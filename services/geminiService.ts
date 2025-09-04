import { GoogleGenAI, Type } from "@google/genai";
import type { AIAnalysis, ParsedProperty } from '../types';

// FIX: Initialize GoogleGenAI strictly with process.env.API_KEY as per coding guidelines, removing the console warning and fallback key.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * A robust JSON parser that cleans the AI's response before parsing.
 * It strips markdown code blocks (```json ... ```) that the model might add.
 * @param jsonString The raw string from the AI response.
 * @param errorMessage The error message to throw on failure.
 * @returns The parsed JSON object.
 */
function robustJSONParse<T>(jsonString: string, errorMessage: string): T {
    let cleanedString = jsonString.trim();
    const markdownMatch = cleanedString.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
    if (markdownMatch && markdownMatch[1]) {
      cleanedString = markdownMatch[1];
    }

    try {
      return JSON.parse(cleanedString) as T;
    } catch (error) {
      console.error("Failed to parse JSON from Gemini response:", jsonString);
      throw new Error(errorMessage);
    }
}

export async function parsePropertiesCSV(csvData: string): Promise<ParsedProperty[]> {
  const model = 'gemini-2.5-flash';
  
  const prompt = `You are a highly-tuned data processing API. Your sole function is to convert CSV data into a JSON array based on a schema.
  
  **Instructions:**
  1. Parse the provided CSV data. The headers are: "Area", "File Name", "Housing Project", "Price", "Features".
  2. For each row, create a JSON object.
  3. The "Price" field must be a number.
  4. From the "Features" text, infer the number of bedrooms (e.g., "three-bedroom" -> 3, "two-bedroom apartment" -> 2). If no bedroom count is explicitly mentioned, set "bedrooms" to null.
  5. Ignore any extraneous empty fields or trailing commas in a row.
  6. Your entire response must be ONLY the JSON array. Do not include any descriptive text, apologies, or markdown formatting.
  
  **CSV Data:**
  \`\`\`csv
  ${csvData}
  \`\`\`
  `;
  
  const response = await ai.models.generateContent({
    model,
    contents: prompt,
    config: {
        responseMimeType: "application/json",
        responseSchema: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    area: { type: Type.STRING },
                    fileName: { type: Type.STRING },
                    housingProject: { type: Type.STRING },
                    price: { type: Type.NUMBER },
                    features: { type: Type.STRING },
                    bedrooms: { type: Type.INTEGER, nullable: true },
                }
            }
        }
    }
  });

  return robustJSONParse<ParsedProperty[]>(response.text, "AI failed to return valid JSON for property data.");
}

export async function getPropertyCoordinates(projectNames: string[]): Promise<Record<string, { lat: number, lng: number } | null>> {
    const model = 'gemini-2.5-flash';

    const response = await ai.models.generateContent({
        model,
        contents: `You are a geocoding expert for Riyadh, Saudi Arabia. I will provide a JSON array of housing project names.
        Your task is to return a JSON object where each key is a housing project name and the value is an object with two keys: "lat" (for latitude) and "lng" (for longitude).
        The coordinates must be plausible for that location within Riyadh.

        If you cannot find coordinates for a specific project, return null for its value.

        Example for a successful lookup:
        {
          "Malqa Residence": { "lat": 24.79, "lng": 46.63 }
        }

        Example for a failed lookup:
        {
          "Unknown Project XYZ": null
        }

        Here is the list of housing projects:
        ${JSON.stringify(projectNames)}

        Return ONLY the raw JSON object, without any surrounding text or markdown.`,
        config: {
            responseMimeType: "application/json",
        }
    });

    return robustJSONParse<Record<string, { lat: number, lng: number } | null>>(
      response.text, 
      "AI failed to return valid JSON for coordinates."
    );
}

export async function analyzeDescriptionWithAI(description: string): Promise<AIAnalysis> {
    const model = 'gemini-2.5-flash';

    const response = await ai.models.generateContent({
        model,
        contents: `You are an AI assistant helping people analyze real estate listings. Analyze the following property description for any potential red flags, positive highlights, and key features. Present your analysis in a clear, structured way.

        Description:
        """
        ${description}
        """

        Return a JSON object with three keys: "highlights", "redFlags", and "keyFeatures". Each key should have a value of an array of strings. If no red flags are found, the array should be empty.`,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    highlights: { type: Type.ARRAY, items: { type: Type.STRING } },
                    redFlags: { type: Type.ARRAY, items: { type: Type.STRING } },
                    keyFeatures: { type: Type.ARRAY, items: { type: Type.STRING } },
                }
            }
        }
    });
    
    return robustJSONParse<AIAnalysis>(response.text, "AI failed to return valid JSON for analysis.");
}

export async function extractPropertyFromImage(base64Image: string, mimeType: string): Promise<ParsedProperty> {
  const model = 'gemini-2.5-flash';
  
  const imagePart = {
    inlineData: {
      mimeType: mimeType,
      data: base64Image,
    },
  };
  
  const textPart = {
    text: `You are an expert real estate data extractor. Analyze the provided image of a property advertisement. Extract the following details and return them as a single, clean JSON object.
    
    **Instructions:**
    1.  **area:** The district or neighborhood in Riyadh (e.g., "Al-Malqa", "Hittin"). If not present, infer from other text or use a general location.
    2.  **fileName:** Use the current timestamp or a random string.
    3.  **housingProject:** The main name or title of the property or project.
    4.  **price:** The numerical price in SAR. Extract only the number, no currency symbols or text.
    5.  **features:** The full description text from the ad.
    6.  **bedrooms:** The number of bedrooms. Infer from text like "three-bedroom" or "4 BR". If not mentioned, set to null.
    
    Your entire response must be ONLY the JSON object. Do not add any text before or after, and do not use markdown formatting.`,
  };

  const response = await ai.models.generateContent({
    model,
    contents: { parts: [imagePart, textPart] },
     config: {
        responseMimeType: "application/json",
        responseSchema: {
            type: Type.OBJECT,
            properties: {
                area: { type: Type.STRING },
                fileName: { type: Type.STRING },
                housingProject: { type: Type.STRING },
                price: { type: Type.NUMBER },
                features: { type: Type.STRING },
                bedrooms: { type: Type.INTEGER, nullable: true },
            }
        }
    }
  });

  return robustJSONParse<ParsedProperty>(response.text, "AI failed to extract valid property JSON from the image.");
}
