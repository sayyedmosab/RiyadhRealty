export const getInitialLoadData = (): string => {
  // Load the entire dataset instead of just a small sample.
  return RAW_CSV_DATA.trim();
};

export const RAW_CSV_DATA = `
Area,File Name,Housing Project,Price,Features
Al-Malqa,property_01_A.pdf,Malqa Residence,1250000,A modern three-bedroom apartment with a spacious living area,a fully equipped kitchen,and a maid's room. The unit features smart home technology,a private balcony with a city view,and access to the community pool and gym.
Al-Malqa,unit_14_C.pdf,North Gate Living,980000,This two-bedroom apartment offers a contemporary design with high-quality finishes. Includes built-in wardrobes,central air conditioning,and two dedicated parking spots. The project is located near King Fahd Road.
Hittin,hittin_villa_apt_3.pdf,The Boulevard,2100000,A luxurious four-bedroom duplex apartment featuring an open-plan living and dining space,floor-to-ceiling windows,and premium marble flooring. The project boasts exclusive resident amenities including a private cinema and gardens.
Hittin,tower_B_unit_402.pdf,Hittin Towers,1600000,A spacious three-bedroom apartment on a high floor,offering panoramic views of the city. The unit comes with two and a half bathrooms,a modern kitchen with German appliances,and access to a rooftop lounge and fitness center.
Al-Yasmin,yasmin_gardens_2B.pdf,Yasmin Gardens,850000,"An affordable two-bedroom apartment perfect for small families. The unit includes a cozy living room, a closed kitchen, and shaded parking. The project is situated in a quiet residential area with nearby parks and schools."
Al-Yasmin,new_build_8.pdf,Al-Yasmin Homes,910000,"Brand new three-bedroom apartment with excellent finishing. Features include a guest toilet, a laundry room, and large windows providing ample natural light. The building has 24/7 security and maintenance services."
Al-Nakheel,nakheel_oasis_7.pdf,Nakheel Oasis,1800000,A premium three-bedroom apartment with a dedicated study. The unit includes a large terrace,walk-in closets,and two underground parking spaces. The project is located near the King Abdullah Financial District and offers concierge services.
Al-Nakheel,digital_city_apt_21.pdf,The Digital Lofts,2300000,This unique two-bedroom loft-style apartment features double-height ceilings in the living area and smart home integration. Residents have access to an exclusive co-working space and rooftop pool with views of the Digital City.
Al-Aqiq,aqiq_plaza_11B.pdf,Aqiq Plaza,1150000,"A modern two-bedroom, two-bathroom apartment located steps away from a Riyadh metro station. The unit is efficiently designed with an open kitchen, built-in appliances, and access to a residents-only fitness center and lounge."
Al-Aqiq,riyadh_park_view.pdf,Parkside Residence,1400000,"A family-oriented three-bedroom apartment with a spacious balcony overlooking a community park. The project includes dedicated children's play areas, 24-hour security, and is in close proximity to Riyadh Park Mall."
Al-Malqa,manual_1.pdf,مشروع حيراث 3,68000,"3 غرف نوم + صالتين + مطبخ + 3 دورات مياه + سطح خاص (مساحة 155 م²، الدور الأول)"
King Salman,manual_2.pdf,مشروع الماجدية 122 شقة G12,100000,"3 غرف نوم + مجلس + صالة + مطبخ + 3 دورات مياه + سطح خاص (الدور الثاني)"
Al-Yasmin,manual_3.pdf,مشروع رونق شقة 15,115000,"غرفتي نوم + مجلس + صالة + مطبخ + 3 دورات مياه + سطح خاص راكب بالأجهزة + 7 مكيفات راكبة (مساحة 155 م²، الدور الأول)"
Al-Arid,manual_4.pdf,مشروع العبيكان هيلز 3 شقة F12,68000,"3 غرف نوم + صالة + مطبخ + 2 دورات مياه + سطح خاص (مساحة 146 م²، الدور الأول)"
Al-Arid,manual_5.pdf,مشروع الشعلان شقة B2,100000,"3 غرف نوم + صالة + مطبخ + 3 دورات مياه + سطح خاص راكب بالأجهزة + 7 مكيفات راكبة (مساحة 203 م²، الدور الأرضي)"
Al-Arid,manual_6.pdf,مشروع مغني 43 شقة 1,115000,"3 غرف نوم + صالة طعام + 3 دورات مياه + مطبخ + غرفة غسيل + غرفة عاملة + 4 دورات مياه + بلكونة + سطح خاص راكب بالأجهزة + 7 مكيفات راكبة (مساحة 125 م²، الدور الثاني)"
Al-Arid,manual_7.pdf,مشروع مكين العارض 50 شقة F8,75000,"3 غرف نوم + صالة + مطبخ + 3 دورات مياه + سطح خاص (مساحة 155 م²، الدور الأول)"
Al-Arid,manual_8.pdf,مشروع هاجر 53 شقة 2,100000,"غرفتين نوم + صالة طعام + 3 دورات مياه + مطبخ + الشقة مؤثثة + مكيفات راكبة + سطح خاص + موقف خاص + حوش صغير + مدخل خاص (مساحة 107 م²، الدور الأرضي)"
Al-Arid,manual_9.pdf,مشروع فيلا ديلوكس,60000,"3 غرف نوم + صالة + مطبخ + دورتي مياه + الشقة مؤثثة + مكيفات راكبة (مساحة 108 م²، الدور الأرضي)"
Al-Arid,manual_10.pdf,مشروع هاجر 57 عمارة,85000,"3 غرف نوم + صالة + مطبخ + 3 دورات مياه + سطح خاص راكب مع الأجهزة + نظام ذكي + الونج + نادي نسائي ورجالي + موقف خاص (مساحة 155 م²، الدور الأرضي)"
Al-Arid,manual_11.pdf,مشروع فيلا لاونج البساتين,65000,"غرفتين نوم + مجلس + صالة + مطبخ + دورتي مياه + مكيفات راكبة + موقف خاص (مساحة 108 م²، الدور الأرضي)"
Al-Arid,manual_12.pdf,مشروع مساكن اشراقة 13 شقة 9,150000,"4 غرف نوم + صالة + مجلس + صالات كبيرة + 4 غرف نوم مع دورات مياه خاصة + مطبخ + غرفة غسيل + غرفة خادمة + ملحق بدورة مياه خاصة + مكيفات مركزية + سبليت + مطبخ مؤثث + ملحق خلفي (مساحة 260 م²، الدور الأرضي)"
Al-Arid,manual_13.pdf,فيلا سكنية,1150000,"14 شقة بمساحات متنوعة (79-210 م²)، كل شقة تشمل مجلس + صالة + غرف نوم (3-2) + دورات مياه (3) + مطبخ + مغاسل، والقيمة المضافة حوش، بلكونات، سطوح خاصة، زوايا على شوارع"
Al-Arid,manual_14.pdf,مشروع حيراث 3,84000,"3 غرف نوم رئيسية + دورات مياه + مطبخ + مكيفات راكبة + مدخل خاص + سطح خاص (مساحة 230 م²، الدور الأرضي)"
King Salman,manual_15.pdf,مشروع الماجدية 122 شقة G12,70000,"3 غرف نوم + مجلس مفصول + غرفة خادمة + صالة + مطبخ + 3 دورات مياه + سمارت هوم + مدخلين + مكنسة مركزية (مساحة 240 م²، الدور الثاني)"
Al-Yasmin,manual_16.pdf,مشروع رونق شقة 15,250000,"غرف كبيرة + صالة + غرفة رياضة + مطبخ + حديقتين + 18 مكيف راكب (مساحة 600 م²، 6)"
Al-Arid,manual_17.pdf,مشروع العبيكان هيلز 3 شقة F12,64000,"3 غرف نوم + صالة + مطبخ + 2 دورات مياه + سطح خاص (مساحة 146 م²، الدور الأول)"
Al-Arid,manual_18.pdf,مشروع الشعلان شقة B2,100000,"3 غرف نوم + مجلس + صالة + مطبخ + 3 دورات مياه + سطح خاص (الدور الثاني)"
Al-Arid,manual_19.pdf,مشروع عراقة 11 شقة B11,115000,"3 غرف نوم + صالة طعام + 3 دورات مياه + مطبخ + غرفة غسيل + غرفة عاملة + 4 دورات مياه + بلكونة + سطح خاص راكب بالأجهزة + 7 مكيفات راكبة (مساحة 125 م²، الدور الثاني)"
Al-Arid,manual_20.pdf,مشروع خوالد 15 شقة L3,80000,"3 غرف نوم + صالة + مطبخ + 3 دورات مياه + سطح خاص خارجي (مساحة 129 م²، الدور الثاني)"
Al-Arid,manual_21.pdf,مشروع خوالد 15 شقة C08,80000,"3 غرف نوم + صالة + مطبخ + 3 دورات مياه + سطح خاص راكب مع الأجهزة + نادي رجالي ونسائي مع مسبح + حديقة خارجية ومرافق (الدور الأرضي)"
Al-Arid,manual_22.pdf,مشروع هاجر 53 شقة 7,80000,"3 غرف نوم + مجلس + صالة + مطبخ + 3 دورات مياه + سطح خاص + موقف خاص (مساحة 117 م²، الدور الأرضي)"
Al-Arid,manual_23.pdf,مشروع هاجر 53 شقة 4,80000,"غرفتين نوم + مجلس + صالة + مطبخ + 3 دورات مياه + سطح خاص راكب + 5 مكيفات راكبة + بلكونة خلفية (مساحة 135 م²، الدور الأول)"
Al-Narjis,manual_24.pdf,مشروع هاجر 34 شقة B4,70000,"3 غرف نوم + صالة + مجلس + مطبخ + 3 دورات مياه + سطح خاص + 5 مكيفات راكبة + دخول ذكي + شرفتان (مساحة 151 م²، الدور الأول)"
Al-Narjis,manual_25.pdf,مشروع هاجر 34 شقة A12,75000,"3 غرف نوم + صالة + مجلس + مطبخ + 3 دورات مياه + سطح خاص راكب + 5 مكيفات راكبة (مساحة 115 م²، الدور 2)"
Al-Narjis,manual_26.pdf,مشروع هاجر 34 شقة B10,65000,"غرفتين نوم + صالة + مجلس + مطبخ + دورتي مياه + سطح خاص راكب + 5 مكيفات راكبة (مساحة 183 م²، الدور الثاني)"
Al-Narjis,manual_27.pdf,مشروع هاجر 34 شقة B6,85000,"غرفتين نوم + صالة + مجلس + مطبخ + دورتي مياه + سطح خاص (مساحة 169 م²، الدور الثاني)"
Al-Malqa,manual_28.pdf,مشروع حيراث 3,80000,"3 غرف نوم + صالة + مجلس + مطبخ + 3 دورات مياه + سطح خاص (مساحة 126 م²، الدور الأول)"
King Salman,manual_29.pdf,مشروع الماجدية 122 شقة G12,68000,"3 غرف نوم + صالة + مجلس + مطبخ + 2 دورات مياه + سطح خاص (مساحة 146 م²، الدور الأول)"
Al-Malqa,manual_30.pdf,مشروع العبادية ريزيدنس D8,150000,"غرفتين نوم مع دورة مياه مستقلة + موقفين سيارة مستقل + ألياف بصرية خاص + الدور الأول والثاني"
Al-Narjis,manual_31.pdf,تاون هاوس B04,90000,"صالة واسعة مع مدخلين + غرفة خادمة مع دورة مياه مستقلة + غرفة سائق + مطبخ + حديقتين + 3 دورات مياه (مساحة 319 م²، الدور الأرضي والأول)"
Al-Malqa,manual_32.pdf,مشروع رجب 247 شقة 3,95000,"3 غرف نوم + صالة + مطبخ + 3 دورات مياه + ارتداادات خارجية + سطح خاص (مساحة 130 م²، الدور الأرضي)"
Al-Narjis,manual_33.pdf,مشروع هاجر 34 شقة A2,75000,"3 غرف نوم + صالة + مجلس + مطبخ + 3 دورات مياه + سطح خاص + كاميرات مراقبة + مودم لشبكة الإنترنت (مساحة 160 م²، الدور الأول)"
Al-Narjis,manual_34.pdf,مشروع هاجر 34 شقة B9,80000,"غرفتين نوم مع دورة مياه + مجلس + مطبخ + 3 دورات مياه + سطح خاص + موقف خاص (مساحة 153 م²، الدور الثاني)"
Al-Narjis,manual_35.pdf,مشروع تراي بلازا مبنى,430000,"ملحق كامل (مساحة 360 م²، دورين)"
Al-Malqa,manual_36.pdf,مشروع الماجدية 127 شقة E9,60000,"غرفتين نوم + صالة + مطبخ + دورتي مياه + سطح خاص + بلكونة + مستودع (مساحة 115 م²، الدور 2)"
Al-Malqa,manual_37.pdf,مشروع حيراث 3,62000,"3 غرف نوم + صالة + مجلس + مطبخ + 3 دورات مياه + سطح خاص + موقف خاص (مساحة 139 م²، الدور الأول)"
Al-Narjis,manual_38.pdf,مشروع مساكن النرجس 21 شقة 4,110000,"غرفتين نوم + صالة + مطبخ + دورتي مياه + سطح خاص + حوش (مساحة 140 م²، الدور الأرضي 2)"
Al-Malqa,manual_39.pdf,عمارة C,125000,"3 غرف نوم ماستر + غرفة طعام + صالة + مطبخ + 3 دورات مياه + سطح خاص + موقف خاص (مساحة 177 م²، الدور الأول)"
Al-Malqa,manual_40.pdf,مشروع وسيم B3، شقة 8,90000,"غرف نوم، صالة، مجلس، مستودع، مدخل سيارة، بلكونتين، مكيفات راكبة 3"
Al-Malqa,manual_41.pdf,مشروع ديار 14، شقة 62,120000,"غير متاح"
Al-Malqa,manual_42.pdf,مشروع ديار 14، شقة 62,75000,"غير متاح"
Al-Malqa,manual_43.pdf,مشروع زمرد 5، شقة 15,35000,"غير متاح"
Al-Malqa,manual_44.pdf,دور فاخر في عكاظ,75000,"غير متاح"
Al-Malqa,manual_45.pdf,مشروع هاجر 35، الوحدة 6,70000,"غير متاح"
Al-Malqa,manual_46.pdf,مشروع هاجر 35، الوحدة 8,110000,"غير متاح"
Al-Malqa,manual_47.pdf,مشروع هاجر 35، الوحدة 10,100000,"غير متاح"
Al-Malqa,manual_48.pdf,مشروع الماجدية E9، شقة 127,43000,"غير متاح"
Al-Fayha,manual_49.pdf,مشروع كل أوفيسس، شقة 9,47000,"غير متاح"
`;
