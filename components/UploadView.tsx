import React, { useState, useCallback } from 'react';

interface UploadViewProps {
  onProcess: (files: File[]) => Promise<{ success: number; failed: number }>;
  onClose: () => void;
}

const UploadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);


export const UploadView: React.FC<UploadViewProps> = ({ onProcess, onClose }) => {
    const [files, setFiles] = useState<File[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [result, setResult] = useState<{success: number, failed: number} | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileChange = (selectedFiles: FileList | null) => {
        if (selectedFiles) {
            setResult(null);
            setFiles(prev => [...prev, ...Array.from(selectedFiles)]);
        }
    };

    const handleRemoveFile = (index: number) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
    };

    const handleProcessClick = async () => {
        if (files.length === 0) return;

        setIsProcessing(true);
        setProgress(0);
        setResult(null);

        const totalFiles = files.length;
        const processPromise = onProcess(files);

        // Simulate progress updates while waiting
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 95) {
                    clearInterval(interval);
                    return prev;
                }
                return prev + (100 / (totalFiles * 2)); // Estimate progress
            });
        }, 1000);

        const finalResult = await processPromise;
        clearInterval(interval);
        setProgress(100);
        setResult(finalResult);
        setFiles([]);
        setIsProcessing(false);
    };
    
    const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };
    const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };
    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        handleFileChange(e.dataTransfer.files);
    };

    return (
        <div className="h-full w-full bg-gray-800 md:bg-gray-700 p-4 flex flex-col">
            <div className="flex justify-between items-center mb-4 border-b border-gray-600 pb-3">
                 <h2 className="text-xl font-bold text-cyan-400">Upload Property Ads</h2>
                 <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-gray-600">
                    <CloseIcon />
                 </button>
            </div>
            
            <div className="mb-4 p-3 bg-gray-900/50 rounded-lg text-center">
                <p className="text-sm text-gray-300">
                    This feature uses AI to read screenshots of property ads. Upload one or more images, and the app will attempt to extract the details and add them to the map.
                </p>
            </div>

            <div 
                className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors ${isDragging ? 'border-cyan-400 bg-gray-800' : 'border-gray-600 hover:border-cyan-500'}`}
                onDragEnter={onDragEnter}
                onDragOver={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <UploadIcon />
                <p className="mt-2 text-sm text-gray-400">
                    Drag & drop screenshots here, or <span className="font-semibold text-cyan-400">click to browse</span>
                </p>
                <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={(e) => handleFileChange(e.target.files)}
                />
            </div>
            
            {files.length > 0 && (
                 <div className="mt-4 flex-grow overflow-y-auto">
                    <h3 className="text-md font-semibold text-gray-300 mb-2">Selected Files ({files.length})</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pr-2">
                        {files.map((file, index) => (
                             <div key={index} className="relative group">
                                <img src={URL.createObjectURL(file)} alt={file.name} className="w-full h-24 object-cover rounded-md" />
                                <button onClick={() => handleRemoveFile(index)} className="absolute top-1 right-1 bg-black bg-opacity-50 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <CloseIcon />
                                </button>
                             </div>
                        ))}
                    </div>
                </div>
            )}
            
            {isProcessing && (
                <div className="mt-4">
                    <p className="text-center text-cyan-400">Processing {files.length} ads with AI...</p>
                    <div className="w-full bg-gray-600 rounded-full h-2.5 mt-2">
                        <div className="bg-cyan-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
            )}
            
            {result && (
                <div className={`mt-4 p-3 rounded-lg text-center animate-fade-in ${result.failed > 0 ? 'bg-red-900 border-red-700' : 'bg-green-900 border-green-700'} border`}>
                    <p className="font-bold">Processing Complete!</p>
                    <p>Successfully added: {result.success}</p>
                    {result.failed > 0 && <p>Failed to process: {result.failed}</p>}
                </div>
            )}

            <div className="mt-auto pt-4">
                 <button
                    onClick={handleProcessClick}
                    disabled={files.length === 0 || isProcessing}
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:bg-gray-700 disabled:cursor-not-allowed"
                >
                    {isProcessing ? 'Processing...' : `Process ${files.length} Ads`}
                </button>
            </div>
        </div>
    );
};