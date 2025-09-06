import type { Property } from '../types';

// Pre-processed and geocoded property data.
// This eliminates the need for AI calls on initial load, drastically improving performance.
export const preprocessedProperties: Property[] = [
  {
    id: 'property_01_A.pdf-0',
    area: 'Al-Malqa',
    fileName: 'property_01_A.pdf',
    housingProject: 'Malqa Residence',
    price: 1250000,
    features: 'A modern three-bedroom apartment with a spacious living area,a fully equipped kitchen,and a maid\'s room. The unit features smart home technology,a private balcony with a city view,and access to the community pool and gym.',
    bedrooms: 3,
    location: { lat: 24.78, lng: 46.63 }
  },
  {
    id: 'unit_14_C.pdf-1',
    area: 'Al-Malqa',
    fileName: 'unit_14_C.pdf',
    housingProject: 'North Gate Living',
    price: 980000,
    features: 'This two-bedroom apartment offers a contemporary design with high-quality finishes. Includes built-in wardrobes,central air conditioning,and two dedicated parking spots. The project is located near King Fahd Road.',
    bedrooms: 2,
    location: { lat: 24.78, lng: 46.63 }
  },
  {
    id: 'hittin_villa_apt_3.pdf-2',
    area: 'Hittin',
    fileName: 'hittin_villa_apt_3.pdf',
    housingProject: 'The Boulevard',
    price: 2100000,
    features: 'A luxurious four-bedroom duplex apartment featuring an open-plan living and dining space,floor-to-ceiling windows,and premium marble flooring. The project boasts exclusive resident amenities including a private cinema and gardens.',
    bedrooms: 4,
    location: { lat: 24.76, lng: 46.60 }
  },
  {
    id: 'tower_B_unit_402.pdf-3',
    area: 'Hittin',
    fileName: 'tower_B_unit_402.pdf',
    housingProject: 'Hittin Towers',
    price: 1600000,
    features: 'A spacious three-bedroom apartment on a high floor,offering panoramic views of the city. The unit comes with two and a half bathrooms,a modern kitchen with German appliances,and access to a rooftop lounge and fitness center.',
    bedrooms: 3,
    location: { lat: 24.76, lng: 46.60 }
  },
  {
    id: 'yasmin_gardens_2B.pdf-4',
    area: 'Al-Yasmin',
    fileName: 'yasmin_gardens_2B.pdf',
    housingProject: 'Yasmin Gardens',
    price: 850000,
    features: 'An affordable two-bedroom apartment perfect for small families. The unit includes a cozy living room, a closed kitchen, and shaded parking. The project is situated in a quiet residential area with nearby parks and schools.',
    bedrooms: 2,
    location: { lat: 24.81, lng: 46.64 }
  },
  {
    id: 'new_build_8.pdf-5',
    area: 'Al-Yasmin',
    fileName: 'new_build_8.pdf',
    housingProject: 'Al-Yasmin Homes',
    price: 910000,
    features: 'Brand new three-bedroom apartment with excellent finishing. Features include a guest toilet, a laundry room, and large windows providing ample natural light. The building has 24/7 security and maintenance services.',
    bedrooms: 3,
    location: { lat: 24.81, lng: 46.64 }
  },
  {
    id: 'nakheel_oasis_7.pdf-6',
    area: 'Al-Nakheel',
    fileName: 'nakheel_oasis_7.pdf',
    housingProject: 'Nakheel Oasis',
    price: 1800000,
    features: 'A premium three-bedroom apartment with a dedicated study. The unit includes a large terrace,walk-in closets,and two underground parking spaces. The project is located near the King Abdullah Financial District and offers concierge services.',
    bedrooms: 3,
    location: { lat: 24.74, lng: 46.62 }
  },
  {
    id: 'digital_city_apt_21.pdf-7',
    area: 'Al-Nakheel',
    fileName: 'digital_city_apt_21.pdf',
    housingProject: 'The Digital Lofts',
    price: 2300000,
    features: 'This unique two-bedroom loft-style apartment features double-height ceilings in the living area and smart home integration. Residents have access to an exclusive co-working space and rooftop pool with views of the Digital City.',
    bedrooms: 2,
    location: { lat: 24.74, lng: 46.62 }
  },
  {
    id: 'aqiq_plaza_11B.pdf-8',
    area: 'Al-Aqiq',
    fileName: 'aqiq_plaza_11B.pdf',
    housingProject: 'Aqiq Plaza',
    price: 1150000,
    features: 'A modern two-bedroom, two-bathroom apartment located steps away from a Riyadh metro station. The unit is efficiently designed with an open kitchen, built-in appliances, and access to a residents-only fitness center and lounge.',
    bedrooms: 2,
    location: { lat: 24.77, lng: 46.60 }
  },
  {
    id: 'riyadh_park_view.pdf-9',
    area: 'Al-Aqiq',
    fileName: 'riyadh_park_view.pdf',
    housingProject: 'Parkside Residence',
    price: 1400000,
    features: 'A family-oriented three-bedroom apartment with a spacious balcony overlooking a community park. The project includes dedicated children\'s play areas, 24-hour security, and is in close proximity to Riyadh Park Mall.',
    bedrooms: 3,
    location: { lat: 24.77, lng: 46.60 }
  },
  {
    id: 'manual_1.pdf-10',
    area: 'Al-Malqa',
    fileName: 'manual_1.pdf',
    housingProject: 'مشروع حيراث 3',
    price: 68000,
    features: '3 غرف نوم + صالتين + مطبخ + 3 دورات مياه + سطح خاص (مساحة 155 م²، الدور الأول)',
    bedrooms: 3,
    location: { lat: 24.78, lng: 46.63 }
  },
  {
    id: 'manual_2.pdf-11',
    area: 'King Salman',
    fileName: 'manual_2.pdf',
    housingProject: 'مشروع الماجدية 122 شقة G12',
    price: 100000,
    features: '3 غرف نوم + مجلس + صالة + مطبخ + 3 دورات مياه + سطح خاص (الدور الثاني)',
    bedrooms: 3,
    location: { lat: 24.70, lng: 46.65 }
  },
  {
    id: 'manual_3.pdf-12',
    area: 'Al-Yasmin',
    fileName: 'manual_3.pdf',
    housingProject: 'مشروع رونق شقة 15',
    price: 115000,
    features: 'غرفتي نوم + مجلس + صالة + مطبخ + 3 دورات مياه + سطح خاص راكب بالأجهزة + 7 مكيفات راكبة (مساحة 155 م²، الدور الأول)',
    bedrooms: 2,
    location: { lat: 24.81, lng: 46.64 }
  },
  {
    id: 'manual_4.pdf-13',
    area: 'Al-Arid',
    fileName: 'manual_4.pdf',
    housingProject: 'مشروع العبيكان هيلز 3 شقة F12',
    price: 68000,
    features: '3 غرف نوم + صالة + مطبخ + 2 دورات مياه + سطح خاص (مساحة 146 م²، الدور الأول)',
    bedrooms: 3,
    location: { lat: 24.85, lng: 46.66 }
  },
  {
    id: 'manual_5.pdf-14',
    area: 'Al-Arid',
    fileName: 'manual_5.pdf',
    housingProject: 'مشروع الشعلان شقة B2',
    price: 100000,
    features: '3 غرف نوم + صالة + مطبخ + 3 دورات مياه + سطح خاص راكب بالأجهزة + 7 مكيفات راكبة (مساحة 203 م²، الدور الأرضي)',
    bedrooms: 3,
    location: { lat: 24.85, lng: 46.66 }
  },
  {
    id: 'manual_6.pdf-15',
    area: 'Al-Arid',
    fileName: 'manual_6.pdf',
    housingProject: 'مشروع مغني 43 شقة 1',
    price: 115000,
    features: '3 غرف نوم + صالة طعام + 3 دورات مياه + مطبخ + غرفة غسيل + غرفة عاملة + 4 دورات مياه + بلكونة + سطح خاص راكب بالأجهزة + 7 مكيفات راكبة (مساحة 125 م²، الدور الثاني)',
    bedrooms: 3,
    location: { lat: 24.85, lng: 46.66 }
  },
  {
    id: 'manual_7.pdf-16',
    area: 'Al-Arid',
    fileName: 'manual_7.pdf',
    housingProject: 'مشروع مكين العارض 50 شقة F8',
    price: 75000,
    features: '3 غرف نوم + صالة + مطبخ + 3 دورات مياه + سطح خاص (مساحة 155 م²، الدور الأول)',
    bedrooms: 3,
    location: { lat: 24.85, lng: 46.66 }
  },
  {
    id: 'manual_8.pdf-17',
    area: 'Al-Arid',
    fileName: 'manual_8.pdf',
    housingProject: 'مشروع هاجر 53 شقة 2',
    price: 100000,
    features: 'غرفتين نوم + صالة طعام + 3 دورات مياه + مطبخ + الشقة مؤثثة + مكيفات راكبة + سطح خاص + موقف خاص + حوش صغير + مدخل خاص (مساحة 107 م²، الدور الأرضي)',
    bedrooms: 2,
    location: { lat: 24.85, lng: 46.66 }
  },
  {
    id: 'manual_9.pdf-18',
    area: 'Al-Arid',
    fileName: 'manual_9.pdf',
    housingProject: 'مشروع فيلا ديلوكس',
    price: 60000,
    features: '3 غرف نوم + صالة + مطبخ + دورتي مياه + الشقة مؤثثة + مكيفات راكبة (مساحة 108 م²، الدور الأرضي)',
    bedrooms: 3,
    location: { lat: 24.85, lng: 46.66 }
  },
  {
    id: 'manual_10.pdf-19',
    area: 'Al-Arid',
    fileName: 'manual_10.pdf',
    housingProject: 'مشروع هاجر 57 عمارة',
    price: 85000,
    features: '3 غرف نوم + صالة + مطبخ + 3 دورات مياه + سطح خاص راكب مع الأجهزة + نظام ذكي + الونج + نادي نسائي ورجالي + موقف خاص (مساحة 155 م²، الدور الأرضي)',
    bedrooms: 3,
    location: { lat: 24.85, lng: 46.66 }
  },
  {
    id: 'manual_11.pdf-20',
    area: 'Al-Arid',
    fileName: 'manual_11.pdf',
    housingProject: 'مشروع فيلا لاونج البساتين',
    price: 65000,
    features: 'غرفتين نوم + مجلس + صالة + مطبخ + دورتي مياه + مكيفات راكبة + موقف خاص (مساحة 108 م²، الدور الأرضي)',
    bedrooms: 2,
    location: { lat: 24.85, lng: 46.66 }
  },
  {
    id: 'manual_12.pdf-21',
    area: 'Al-Arid',
    fileName: 'manual_12.pdf',
    housingProject: 'مشروع مساكن اشراقة 13 شقة 9',
    price: 150000,
    features: '4 غرف نوم + صالة + مجلس + صالات كبيرة + 4 غرف نوم مع دورات مياه خاصة + مطبخ + غرفة غسيل + غرفة خادمة + ملحق بدورة مياه خاصة + مكيفات مركزية + سبليت + مطبخ مؤثث + ملحق خلفي (مساحة 260 م²، الدور الأرضي)',
    bedrooms: 4,
    location: { lat: 24.85, lng: 46.66 }
  },
  {
    id: 'manual_13.pdf-22',
    area: 'Al-Arid',
    fileName: 'manual_13.pdf',
    housingProject: 'فيلا سكنية',
    price: 1150000,
    features: '14 شقة بمساحات متنوعة (79-210 م²)، كل شقة تشمل مجلس + صالة + غرف نوم (3-2) + دورات مياه (3) + مطبخ + مغاسل، والقيمة المضافة حوش، بلكونات، سطوح خاصة، زوايا على شوارع',
    bedrooms: 3,
    location: { lat: 24.85, lng: 46.66 }
  },
  {
    id: 'manual_14.pdf-23',
    area: 'Al-Arid',
    fileName: 'manual_14.pdf',
    housingProject: 'مشروع حيراث 3',
    price: 84000,
    features: '3 غرف نوم رئيسية + دورات مياه + مطبخ + مكيفات راكبة + مدخل خاص + سطح خاص (مساحة 230 م²، الدور الأرضي)',
    bedrooms: 3,
    location: { lat: 24.85, lng: 46.66 }
  },
  {
    id: 'manual_15.pdf-24',
    area: 'King Salman',
    fileName: 'manual_15.pdf',
    housingProject: 'مشروع الماجدية 122 شقة G12',
    price: 70000,
    features: '3 غرف نوم + مجلس مفصول + غرفة خادمة + صالة + مطبخ + 3 دورات مياه + سمارت هوم + مدخلين + مكنسة مركزية (مساحة 240 م²، الدور الثاني)',
    bedrooms: 3,
    location: { lat: 24.70, lng: 46.65 }
  },
  {
    id: 'manual_16.pdf-25',
    area: 'Al-Yasmin',
    fileName: 'manual_16.pdf',
    housingProject: 'مشروع رونق شقة 15',
    price: 250000,
    features: 'غرف كبيرة + صالة + غرفة رياضة + مطبخ + حديقتين + 18 مكيف راكب (مساحة 600 م²، 6)',
    bedrooms: 2,
    location: { lat: 24.81, lng: 46.64 }
  },
  {
    id: 'manual_18.pdf-26',
    area: 'Al-Arid',
    fileName: 'manual_18.pdf',
    housingProject: 'مشروع الشعلان شقة B2',
    price: 100000,
    features: '3 غرف نوم + مجلس + صالة + مطبخ + 3 دورات مياه + سطح خاص (الدور الثاني)',
    bedrooms: 3,
    location: { lat: 24.85, lng: 46.66 }
  },
  {
    id: 'manual_19.pdf-27',
    area: 'Al-Arid',
    fileName: 'manual_19.pdf',
    housingProject: 'مشروع عراقة 11 شقة B11',
    price: 115000,
    features: '3 غرف نوم + صالة طعام + 3 دورات مياه + مطبخ + غرفة غسيل + غرفة عاملة + 4 دورات مياه + بلكونة + سطح خاص راكب بالأجهزة + 7 مكيفات راكبة (مساحة 125 م²، الدور الثاني)',
    bedrooms: 3,
    location: { lat: 24.85, lng: 46.66 }
  },
  {
    id: 'manual_20.pdf-28',
    area: 'Al-Arid',
    fileName: 'manual_20.pdf',
    housingProject: 'مشروع خوالد 15 شقة L3',
    price: 80000,
    features: '3 غرف نوم + صالة + مطبخ + 3 دورات مياه + سطح خاص خارجي (مساحة 129 م²، الدور الثاني)',
    bedrooms: 3,
    location: { lat: 24.85, lng: 46.66 }
  },
  {
    id: 'manual_21.pdf-29',
    area: 'Al-Arid',
    fileName: 'manual_21.pdf',
    housingProject: 'مشروع خوالد 15 شقة C08',
    price: 80000,
    features: '3 غرف نوم + صالة + مطبخ + 3 دورات مياه + سطح خاص راكب مع الأجهزة + نادي رجالي ونسائي مع مسبح + حديقة خارجية ومرافق (الدور الأرضي)',
    bedrooms: 3,
    location: { lat: 24.85, lng: 46.66 }
  },
  {
    id: 'manual_22.pdf-30',
    area: 'Al-Arid',
    fileName: 'manual_22.pdf',
    housingProject: 'مشروع هاجر 53 شقة 7',
    price: 80000,
    features: '3 غرف نوم + مجلس + صالة + مطبخ + 3 دورات مياه + سطح خاص + موقف خاص (مساحة 117 م²، الدور الأرضي)',
    bedrooms: 3,
    location: { lat: 24.85, lng: 46.66 }
  },
  {
    id: 'manual_23.pdf-31',
    area: 'Al-Arid',
    fileName: 'manual_23.pdf',
    housingProject: 'مشروع هاجر 53 شقة 4',
    price: 80000,
    features: 'غرفتين نوم + مجلس + صالة + مطبخ + 3 دورات مياه + سطح خاص راكب + 5 مكيفات راكبة + بلكونة خلفية (مساحة 135 م²، الدور الأول)',
    bedrooms: 2,
    location: { lat: 24.85, lng: 46.66 }
  },
  {
    id: 'manual_24.pdf-32',
    area: 'Al-Narjis',
    fileName: 'manual_24.pdf',
    housingProject: 'مشروع هاجر 34 شقة B4',
    price: 70000,
    features: '3 غرف نوم + صالة + مجلس + مطبخ + 3 دورات مياه + سطح خاص + 5 مكيفات راكبة + دخول ذكي + شرفتان (مساحة 151 م²، الدور الأول)',
    bedrooms: 3,
    location: { lat: 24.83, lng: 46.68 }
  },
  {
    id: 'manual_25.pdf-33',
    area: 'Al-Narjis',
    fileName: 'manual_25.pdf',
    housingProject: 'مشروع هاجر 34 شقة A12',
    price: 75000,
    features: '3 غرف نوم + صالة + مجلس + مطبخ + 3 دورات مياه + سطح خاص راكب + 5 مكيفات راكبة (مساحة 115 م²، الدور 2)',
    bedrooms: 3,
    location: { lat: 24.83, lng: 46.68 }
  },
  {
    id: 'manual_26.pdf-34',
    area: 'Al-Narjis',
    fileName: 'manual_26.pdf',
    housingProject: 'مشروع هاجر 34 شقة B10',
    price: 65000,
    features: 'غرفتين نوم + صالة + مجلس + مطبخ + دورتي مياه + سطح خاص راكب + 5 مكيفات راكبة (مساحة 183 م²، الدور الثاني)',
    bedrooms: 2,
    location: { lat: 24.83, lng: 46.68 }
  },
  {
    id: 'manual_27.pdf-35',
    area: 'Al-Narjis',
    fileName: 'manual_27.pdf',
    housingProject: 'مشروع هاجر 34 شقة B6',
    price: 85000,
    features: 'غرفتين نوم + صالة + مجلس + مطبخ + دورتي مياه + سطح خاص (مساحة 169 م²، الدور الثاني)',
    bedrooms: 2,
    location: { lat: 24.83, lng: 46.68 }
  },
  {
    id: 'manual_28.pdf-36',
    area: 'Al-Malqa',
    fileName: 'manual_28.pdf',
    housingProject: 'مشروع حيراث 3',
    price: 80000,
    features: '3 غرف نوم + صالة + مجلس + مطبخ + 3 دورات مياه + سطح خاص (مساحة 126 م²، الدور الأول)',
    bedrooms: 3,
    location: { lat: 24.78, lng: 46.63 }
  },
  {
    id: 'manual_29.pdf-37',
    area: 'King Salman',
    fileName: 'manual_29.pdf',
    housingProject: 'مشروع الماجدية 122 شقة G12',
    price: 68000,
    features: '3 غرف نوم + صالة + مجلس + مطبخ + 2 دورات مياه + سطح خاص (مساحة 146 م²، الدور الأول)',
    bedrooms: 3,
    location: { lat: 24.70, lng: 46.65 }
  },
  {
    id: 'manual_30.pdf-38',
    area: 'Al-Malqa',
    fileName: 'manual_30.pdf',
    housingProject: 'مشروع العبادية ريزيدنس D8',
    price: 150000,
    features: 'غرفتين نوم مع دورة مياه مستقلة + موقفين سيارة مستقل + ألياف بصرية خاص + الدور الأول والثاني',
    bedrooms: 2,
    location: { lat: 24.78, lng: 46.63 }
  },
  {
    id: 'manual_31.pdf-39',
    area: 'Al-Narjis',
    fileName: 'manual_31.pdf',
    housingProject: 'تاون هاوس B04',
    price: 90000,
    features: 'صالة واسعة مع مدخلين + غرفة خادمة مع دورة مياه مستقلة + غرفة سائق + مطبخ + حديقتين + 3 دورات مياه (مساحة 319 م²، الدور الأرضي والأول)',
    bedrooms: null,
    location: { lat: 24.83, lng: 46.68 }
  },
  {
    id: 'manual_32.pdf-40',
    area: 'Al-Malqa',
    fileName: 'manual_32.pdf',
    housingProject: 'مشروع رجب 247 شقة 3',
    price: 95000,
    features: '3 غرف نوم + صالة + مطبخ + 3 دورات مياه + ارتداادات خارجية + سطح خاص (مساحة 130 م²، الدور الأرضي)',
    bedrooms: 3,
    location: { lat: 24.78, lng: 46.63 }
  },
  {
    id: 'manual_33.pdf-41',
    area: 'Al-Narjis',
    fileName: 'manual_33.pdf',
    housingProject: 'مشروع هاجر 34 شقة A2',
    price: 75000,
    features: '3 غرف نوم + صالة + مجلس + مطبخ + 3 دورات مياه + سطح خاص + كاميرات مراقبة + مودم لشبكة الإنترنت (مساحة 160 م²، الدور الأول)',
    bedrooms: 3,
    location: { lat: 24.83, lng: 46.68 }
  },
  {
    id: 'manual_34.pdf-42',
    area: 'Al-Narjis',
    fileName: 'manual_34.pdf',
    housingProject: 'مشروع هاجر 34 شقة B9',
    price: 80000,
    features: 'غرفتين نوم مع دورة مياه + مجلس + مطبخ + 3 دورات مياه + سطح خاص + موقف خاص (مساحة 153 م²، الدور الثاني)',
    bedrooms: 2,
    location: { lat: 24.83, lng: 46.68 }
  },
  {
    id: 'manual_35.pdf-43',
    area: 'Al-Narjis',
    fileName: 'manual_35.pdf',
    housingProject: 'مشروع تراي بلازا مبنى',
    price: 430000,
    features: 'ملحق كامل (مساحة 360 م²، دورين)',
    bedrooms: null,
    location: { lat: 24.83, lng: 46.68 }
  },
  {
    id: 'manual_36.pdf-44',
    area: 'Al-Malqa',
    fileName: 'manual_36.pdf',
    housingProject: 'مشروع الماجدية 127 شقة E9',
    price: 60000,
    features: 'غرفتين نوم + صالة + مطبخ + دورتي مياه + سطح خاص + بلكونة + مستودع (مساحة 115 م²، الدور 2)',
    bedrooms: 2,
    location: { lat: 24.78, lng: 46.63 }
  },
  {
    id: 'manual_37.pdf-45',
    area: 'Al-Malqa',
    fileName: 'manual_37.pdf',
    housingProject: 'مشروع حيراث 3',
    price: 62000,
    features: '3 غرف نوم + صالة + مجلس + مطبخ + 3 دورات مياه + سطح خاص + موقف خاص (مساحة 139 م²، الدور الأول)',
    bedrooms: 3,
    location: { lat: 24.78, lng: 46.63 }
  },
  {
    id: 'manual_38.pdf-46',
    area: 'Al-Narjis',
    fileName: 'manual_38.pdf',
    housingProject: 'مشروع مساكن النرجس 21 شقة 4',
    price: 110000,
    features: 'غرفتين نوم + صالة + مطبخ + دورتي مياه + سطح خاص + حوش (مساحة 140 م²، الدور الأرضي 2)',
    bedrooms: 2,
    location: { lat: 24.83, lng: 46.68 }
  },
  {
    id: 'manual_39.pdf-47',
    area: 'Al-Malqa',
    fileName: 'manual_39.pdf',
    housingProject: 'عمارة C',
    price: 125000,
    features: '3 غرف نوم ماستر + غرفة طعام + صالة + مطبخ + 3 دورات مياه + سطح خاص + موقف خاص (مساحة 177 م²، الدور الأول)',
    bedrooms: 3,
    location: { lat: 24.78, lng: 46.63 }
  },
  {
    id: 'manual_40.pdf-48',
    area: 'Al-Malqa',
    fileName: 'manual_40.pdf',
    housingProject: 'مشروع وسيم B3، شقة 8',
    price: 90000,
    features: 'غرف نوم، صالة، مجلس، مستودع، مدخل سيارة، بلكونتين، مكيفات راكبة 3',
    bedrooms: 3,
    location: { lat: 24.78, lng: 46.63 }
  },
  {
    id: 'manual_41.pdf-49',
    area: 'Al-Malqa',
    fileName: 'manual_41.pdf',
    housingProject: 'مشروع ديار 14، شقة 62',
    price: 120000,
    features: 'Details not available',
    bedrooms: null,
    location: { lat: 24.78, lng: 46.63 }
  },
  {
    id: 'manual_42.pdf-50',
    area: 'Al-Malqa',
    fileName: 'manual_42.pdf',
    housingProject: 'مشروع ديار 14، شقة 62',
    price: 75000,
    features: 'Details not available',
    bedrooms: null,
    location: { lat: 24.78, lng: 46.63 }
  },
  {
    id: 'manual_43.pdf-51',
    area: 'Al-Malqa',
    fileName: 'manual_43.pdf',
    housingProject: 'مشروع زمرد 5، شقة 15',
    price: 35000,
    features: 'Details not available',
    bedrooms: null,
    location: { lat: 24.78, lng: 46.63 }
  },
  {
    id: 'manual_44.pdf-52',
    area: 'Al-Malqa',
    fileName: 'manual_44.pdf',
    housingProject: 'دور فاخر في عكاظ',
    price: 75000,
    features: 'Details not available',
    bedrooms: null,
    location: { lat: 24.78, lng: 46.63 }
  },
  {
    id: 'manual_45.pdf-53',
    area: 'Al-Malqa',
    fileName: 'manual_45.pdf',
    housingProject: 'مشروع هاجر 35، الوحدة 6',
    price: 70000,
    features: 'Details not available',
    bedrooms: null,
    location: { lat: 24.78, lng: 46.63 }
  },
  {
    id: 'manual_46.pdf-54',
    area: 'Al-Malqa',
    fileName: 'manual_46.pdf',
    housingProject: 'مشروع هاجر 35، الوحدة 8',
    price: 110000,
    features: 'Details not available',
    bedrooms: null,
    location: { lat: 24.78, lng: 46.63 }
  },
  {
    id: 'manual_47.pdf-55',
    area: 'Al-Malqa',
    fileName: 'manual_47.pdf',
    housingProject: 'مشروع هاجر 35، الوحدة 10',
    price: 100000,
    features: 'Details not available',
    bedrooms: null,
    location: { lat: 24.78, lng: 46.63 }
  },
  {
    id: 'manual_48.pdf-56',
    area: 'Al-Malqa',
    fileName: 'manual_48.pdf',
    housingProject: 'مشروع الماجدية E9، شقة 127',
    price: 43000,
    features: 'Details not available',
    bedrooms: null,
    location: { lat: 24.78, lng: 46.63 }
  },
  {
    id: 'manual_49.pdf-57',
    area: 'Al-Fayha',
    fileName: 'manual_49.pdf',
    housingProject: 'مشروع كل أوفيسس، شقة 9',
    price: 47000,
    features: 'Details not available',
    bedrooms: null,
    location: { lat: 24.69, lng: 46.78 }
  }
];
