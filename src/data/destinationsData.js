/* src/data/destinationsData.js */
const destinationsData = [
    {
        id: "georgia",
        name: "Georgia",
        tagline: "The Crossroads of Europe & Asia",
        titleImage: "/images/destinations/georgia.jpg",
        description: "Experience the unique blend of ancient wine culture, stunning Caucasus mountains, and the warm hospitality of Tbilisi's terracotta-roofed streets.",
        aboutText: "Georgia is home to some of the oldest winemaking traditions in the world. Nestled between the Black Sea and the Caucasus Mountains, it offers everything from subtropical coastlines to snow-capped peaks and UNESCO-listed medieval stone towers.",
        bestTime: "May to June & September to October",
        experiences: ["Culture", "Wine", "Mountains", "Nature"],
        activities: ["Hiking", "Wine Tasting", "Old Town Exploration", "Mountain Photography", "Sulphur Baths"],
        attractions: [
            { name: "Old Tbilisi", img: "https://images.unsplash.com/photo-1595180637175-9e48c9096173?w=600&q=80" },
            { name: "Uplistsikhe Cave Town", img: "https://images.unsplash.com/photo-1596791039849-cfa09f3ed146?w=600&q=80" },
            { name: "Gergeti Trinity Church", img: "https://images.unsplash.com/photo-1627051381393-2776c52aefbc?w=600&q=80" },
            { name: "Batumi Coast", img: "https://images.unsplash.com/photo-1616428766157-5589ddc8430e?w=600&q=80" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1527269534026-c86f4009e63d?w=800&q=80",
            "https://images.unsplash.com/photo-1624606211835-f494de28a6f4?w=800&q=80",
            "https://images.unsplash.com/photo-1624473822188-66af7e62fc06?w=800&q=80",
            "https://images.unsplash.com/photo-1563810246452-96570fcbb911?w=800&q=80"
        ],
        packages: [
            { name: "Cultural Treasures of Tbilisi", price: "₹45,999", duration: "4 Nights / 5 Days" },
            { name: "Wine & Mountains Adventure", price: "₹68,999", duration: "6 Nights / 7 Days" }
        ]
    },
    {
        id: "armenia",
        name: "Armenia",
        tagline: "The Land of Ancient Monasteries",
        titleImage: "/images/destinations/armenia.jpg",
        description: "A country of breathtaking landscapes where stone monasteries overlook deep river canyons and Mount Ararat dominates the skyline.",
        aboutText: "Armenia is an ancient nation steeped in history. From the bustling open-air cafes of Yerevan to the serene shores of Lake Sevan, it offers a dramatic landscape of deep valleys and plateau vistas.",
        bestTime: "May, June, September, and October",
        experiences: ["History", "Architecture", "Nature", "Pilgrimage"],
        activities: ["Monastery Tours", "Mountain Trekking", "Craft Market Shopping", "Brandy Tasting"],
        attractions: [
            { name: "Tatev Monastery", img: "https://images.unsplash.com/photo-1544865866-50a980721c5b?w=600&q=80" },
            { name: "Lake Sevan", img: "https://images.unsplash.com/photo-1587652750697-393963428801?w=600&q=80" },
            { name: "Cascade Yerevan", img: "https://images.unsplash.com/photo-1589110756770-438645c06be9?w=600&q=80" },
            { name: "Garni Temple", img: "https://images.unsplash.com/photo-1596791039849-cfa09f3ed146?w=600&q=80" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1574044536225-1e35d2fd5341?w=800&q=80",
            "https://images.unsplash.com/photo-1617464010619-7e8c07e0b514?w=800&q=80",
            "https://images.unsplash.com/photo-1628172825367-e850937a4e69?w=800&q=80",
            "https://images.unsplash.com/photo-1578330058814-75af486e9215?w=800&q=80"
        ],
        packages: [
            { name: "Classic Armenia Heritage", price: "₹42,000", duration: "5 Nights / 6 Days" },
            { name: "Highland Spirits & Culture", price: "₹55,000", duration: "6 Nights / 7 Days" }
        ]
    },
    {
        id: "azerbaijan",
        name: "Azerbaijan",
        tagline: "The Land of Fire",
        titleImage: "/images/destinations/azerbaijan.jpg",
        description: "Discover a land where modern futuristic architecture meets ancient UNESCO Silk Road cities and thermal mud volcanoes.",
        aboutText: "Azerbaijan is a country of contrasts, where the Caspian Sea meets the Caucasus mountains. The capital, Baku, is a futuristic hub famous for the Flame Towers and its ancient Walled City.",
        bestTime: "April to June & September to October",
        experiences: ["Adventure", "Luxury", "History", "Nature"],
        activities: ["Baku Night Tour", "Mud Volcano Visit", "Gobustan Rock Art", "Luxury Shopping"],
        attractions: [
            { name: "Flame Towers", img: "https://images.unsplash.com/photo-1601614742562-b911762c938c?w=600&q=80" },
            { name: "Heydar Aliyev Center", img: "https://images.unsplash.com/photo-1595180637175-9e48c9096173?w=600&q=80" },
            { name: "Ancient Icherisheher", img: "https://images.unsplash.com/photo-1565151610996-857e53f05fca?w=600&q=80" },
            { name: "Caspian Sea Promenade", img: "https://images.unsplash.com/photo-1611095773163-979929210203?w=600&q=80" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1611095973763-4140195a243b?w=800&q=80",
            "https://images.unsplash.com/photo-1582234395701-d816431934c9?w=800&q=80",
            "https://images.unsplash.com/photo-1615555415714-386829777174?w=800&q=80",
            "https://images.unsplash.com/photo-1617464010619-7e8c07e0b514?w=800&q=80"
        ],
        packages: [
            { name: "Baku Lights & Modernity", price: "₹48,999", duration: "4 Nights / 5 Days" },
            { name: "Silk Road Silk & Stone", price: "₹72,000", duration: "7 Nights / 8 Days" }
        ]
    },
    {
        id: "thailand",
        name: "Thailand",
        tagline: "The Land of Smiles",
        titleImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&q=80",
        description: "From the neon lights of Bangkok to the crystal waters of Phi Phi, Thailand is a paradise of street food, temples, and tropical blisses.",
        aboutText: "Thailand is Southeast Asia's most popular destination for a reason. Its vibrant culture, world-famous cuisine, and diverse landscapes ranging from northern jungles to southern islands make it a traveler's favorite.",
        bestTime: "November to February",
        experiences: ["Food Tourism", "Beaches", "Culture", "Nightlife"],
        activities: ["Island Hopping", "Temple Tours", "Street Food Safari", "Elephant Sanctuary", "Scuba Diving"],
        attractions: [
            { name: "Grand Palace", img: "https://images.unsplash.com/photo-1510009489794-352fba39acd3?w=600&q=80" },
            { name: "Wat Arun", img: "https://images.unsplash.com/photo-1528181304800-2f1408198f99?w=600&q=80" },
            { name: "Phi Phi Islands", img: "https://images.unsplash.com/photo-1537953391147-f459cedd3e11?w=600&q=80" },
            { name: "Chiang Mai Mountains", img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80",
            "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&q=80",
            "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
            "https://images.unsplash.com/photo-1537953391147-f459cedd3e11?w=800&q=80"
        ],
        packages: [
            { name: "Bangkok & Pattaya Buzz", price: "₹38,000", duration: "4 Nights / 5 Days" },
            { name: "Tropical Island Bliss", price: "₹59,000", duration: "6 Nights / 7 Days" }
        ]
    },
    {
        id: "kazakhstan",
        name: "Kazakhstan",
        tagline: "Vast Horizons & Snow-capped Peaks",
        titleImage: "/images/destinations/kazakhstan.jpg",
        description: "Explore the vast Central Asian steppe, breathtaking Charyn Canyon, and the modern glamour of Almaty nestled against the Tien Shan mountains.",
        aboutText: "The largest landlocked country in the world, Kazakhstan is a land of massive mountain ranges, deep river canyons, and ultra-modern cities. It offers a unique mix of nomadic history and Soviet heritage.",
        bestTime: "May to September",
        experiences: ["Adventure", "Nature", "Steppe Culture", "Winter Sports"],
        activities: ["Canyon Trekking", "Skiing in Shymbulak", "Lake Kaindy Visit", "Metropolitan City Tour"],
        attractions: [
            { name: "Almaty Lake", img: "https://images.unsplash.com/photo-1533221971714-f069485cc12d?w=600&q=80" },
            { name: "Charyn Canyon", img: "https://images.unsplash.com/photo-1582234395701-d816431934c9?w=600&q=80" },
            { name: "Ascension Cathedral", img: "https://images.unsplash.com/photo-1616428766157-5589ddc8430e?w=600&q=80" },
            { name: "Bayterek Tower", img: "https://images.unsplash.com/photo-1563810246452-96570fcbb911?w=600&q=80" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1589110756570-589110756be9?w=800&q=80",
            "https://images.unsplash.com/photo-1587652750697-393963428801?w=800&q=80",
            "https://images.unsplash.com/photo-1533221971714-f069485cc12d?w=800&q=80",
            "https://images.unsplash.com/photo-1582234395701-d816431934c9?w=800&q=80"
        ],
        packages: [
            { name: "Almaty & Beyond", price: "₹49,999", duration: "5 Nights / 6 Days" },
            { name: "Central Asian Adventure", price: "₹85,000", duration: "8 Nights / 9 Days" }
        ]
    },
    {
        id: "bali",
        name: "Bali, Indonesia",
        tagline: "Island of the Gods",
        titleImage: "/images/destinations/bali.jpg",
        description: "Lose yourself in the emerald rice terraces of Ubud, the golden sunsets of Seminyak, and the spiritual tranquility of ancient sea temples.",
        aboutText: "Bali is more than a place; it's a mood, an aspiration, a tropical state of mind. It offers a rich tapestry of art, spirituality, and incredible natural beauty from volcanic peaks to iconic beaches.",
        bestTime: "April to October",
        experiences: ["Luxury", "Nature", "Wellness", "Beaches"],
        activities: ["Surfing", "Yoga Retreats", "Rice Field Trekking", "Temple Visits", "Waterfall Chasing"],
        attractions: [
            { name: "Uluwatu Temple", img: "https://images.unsplash.com/photo-1518134701257-2b8347f892a3?w=600&q=80" },
            { name: "Tegalalang Rice Terrace", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80" },
            { name: "Nusa Penida", img: "https://images.unsplash.com/photo-1537953391147-f459cedd3e11?w=600&q=80" },
            { name: "Ubud Monkey Forest", img: "https://images.unsplash.com/photo-1510009489794-352fba39acd3?w=600&q=80" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
            "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
            "https://images.unsplash.com/photo-1537953391147-f459cedd3e11?w=800&q=80"
        ],
        packages: [
            { name: "Romantic Bali Escape", price: "₹65,000", duration: "6 Nights / 7 Days" },
            { name: "Adventure Bali Explorer", price: "₹78,000", duration: "7 Nights / 8 Days" }
        ]
    },
    {
        id: "india",
        name: "India",
        tagline: "Kerala, Goa, Himachal Pradesh",
        titleImage: "/images/destinations/india.jpg",
        description: "From the serene backwaters of Kerala and sun-soaked beaches of Goa to the majestic mountains of Himachal, India is a world in one country.",
        aboutText: "India is a land of diversity, flavor, and ancient history. Whether you seek spiritual enlightenment, Himalayan adventure, or a luxury beach getaway, India delivers an unforgettable sensory experience.",
        bestTime: "October to March",
        experiences: ["Culture", "Nature", "Beaches", "Food Tourism"],
        activities: ["Houseboat Stay", "Paragliding", "Beach Parties", "Heritage Walks", "Yoga & Ayurveda"],
        attractions: [
            { name: "Alleppey Backwaters", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80" },
            { name: "Rohtang Pass", img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80" },
            { name: "Palolem Beach Goa", img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80" },
            { name: "Taj Mahal", img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?w=600&q=80" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1524491991219-0303c72b226d?w=800&q=80",
            "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
            "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80",
            "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80"
        ],
        packages: [
            { name: "Kerala Backwater Bliss", price: "₹32,000", duration: "4 Nights / 5 Days" },
            { name: "Himachal Highland Sojourn", price: "₹45,000", duration: "6 Nights / 7 Days" }
        ]
    },
    {
        id: "turkey",
        name: "Turkey",
        tagline: "Where East Meets West",
        titleImage: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=80",
        description: "Witness the fairytale chimneys of Cappadocia, the blue domes of Istanbul, and the turquoise waters of the Turkish Riviera.",
        aboutText: "Turkey bridges two continents and thousands of years of history. From the bustling Grand Bazaar to the hot air balloons of Cappadocia, it is a land of vibrant culture and ancient wonders.",
        bestTime: "April, May, September, and October",
        experiences: ["Culture", "Luxury", "History", "Nature"],
        activities: ["Hot Air Ballooning", "Bosphorus Cruise", "Hamam Experience", "Ancient City Tours"],
        attractions: [
            { name: "Hagia Sophia", img: "https://images.unsplash.com/photo-1541432901042-26210f5bb865?w=600&q=80" },
            { name: "Cappadocia Valleys", img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80" },
            { name: "Pamukkale Travertines", img: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&q=80" },
            { name: "Blue Mosque", img: "https://images.unsplash.com/photo-1510009489794-352fba39acd3?w=600&q=80" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1510009489794-352fba39acd3?w=800&q=80",
            "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
            "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
            "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&q=80"
        ],
        packages: [
            { name: "The Grand Turkey Tour", price: "₹1,25,000", duration: "9 Nights / 10 Days" },
            { name: "Istanbul & Cappadocia Magic", price: "₹85,000", duration: "6 Nights / 7 Days" }
        ]
    },
    {
        id: "kenya",
        name: "Kenya",
        tagline: "The Heart of the Safari",
        titleImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80",
        description: "Experience the ultimate wildlife adventure in the Maasai Mara, with vast savannahs and the world's most spectacular animal migration.",
        aboutText: "Kenya is synonymous with the classic African safari. It offers diverse landscapes, vibrant tribal cultures, and an incredible concentration of wildlife in world-renowned national parks.",
        bestTime: "July to October",
        experiences: ["Wildlife", "Adventure", "Nature", "Culture"],
        activities: ["Game Drives", "Hot Air Balloon Safari", "Maasai Village Visit", "Nature Photography"],
        attractions: [
            { name: "Maasai Mara", img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80" },
            { name: "Mount Kenya", img: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=80" },
            { name: "Amboseli Elephants", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80" },
            { name: "Diani Beach", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
        ],
        packages: [
            { name: "Wild Kenya Safari", price: "₹1,85,000", duration: "6 Nights / 7 Days" },
            { name: "Kenya Coast & Wildlife", price: "₹2,10,000", duration: "8 Nights / 9 Days" }
        ]
    },
    {
        id: "sri-lanka",
        name: "Sri Lanka",
        tagline: "The Pearl of the Indian Ocean",
        titleImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&q=80",
        description: "Discover mist-covered tea plantations, golden palm-fringed beaches, and ancient ruins that tell stories of thousands of years.",
        aboutText: "Sri Lanka is an island nation of incredible diversity. From the cool highlands of Nuwara Eliya to the wild elephant herds of Minneriya, it is an explorer's paradise packed into a compact and beautiful country.",
        bestTime: "December to April (West/South) & May to September (East)",
        experiences: ["Nature", "Culture", "Beaches", "Food Tourism"],
        activities: ["Train Ride to Ella", "Wildlife Safari", "Temple Exploration", "Surf Lessons", "Tea Factory Tour"],
        attractions: [
            { name: "Sigiriya Rock", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=80" },
            { name: "Ella Gap", img: "https://images.unsplash.com/photo-1589110756770-438645c06be9?w=600&q=80" },
            { name: "Galle Fort", img: "https://images.unsplash.com/photo-1587652750697-393963428801?w=600&q=80" },
            { name: "Mirissa Beach", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80",
            "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&q=80",
            "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
            "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80"
        ],
        packages: [
            { name: "Highlights of Sri Lanka", price: "₹45,000", duration: "5 Nights / 6 Days" },
            { name: "Island Adventure & Bliss", price: "₹62,000", duration: "7 Nights / 8 Days" }
        ]
    },
    {
        id: "dubai",
        name: "Dubai",
        tagline: "The City of Gold",
        titleImage: "/images/destinations/dubai.jpg",
        description: "Experience the future in the present — with Burj Khalifa's heights, vast desert dunes, and world-class luxury shopping.",
        aboutText: "Dubai is a global city that redefines luxury. Known for its ultra-modern architecture, high-end shopping, and vibrant nightlife, it offers an experience that is bigger and bolder than anywhere else on earth.",
        bestTime: "November to March",
        experiences: ["Luxury", "Adventure", "City Life", "Desert"],
        activities: ["Skydiving", "Desert Safari", "Burj Khalifa Tour", "Dhow Cruise", "Luxury Shopping"],
        attractions: [
            { name: "Burj Khalifa", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80" },
            { name: "Palm Jumeirah", img: "https://images.unsplash.com/photo-1533221971714-f069485cc12d?w=600&q=80" },
            { name: "Dubai Marina", img: "https://images.unsplash.com/photo-1528181304800-2f1408198f99?w=600&q=80" },
            { name: "Desert Dunes", img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
            "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
            "https://images.unsplash.com/photo-1510009489794-352fba39acd3?w=800&q=80",
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80"
        ],
        packages: [
            { name: "Luxury Dubai Getaway", price: "₹89,999", duration: "5 Nights / 6 Days" },
            { name: "Adventure Dubai Sands", price: "₹65,000", duration: "4 Nights / 5 Days" }
        ]
    },
    {
        id: "egypt",
        name: "Egypt",
        tagline: "The cradle of Civilization",
        titleImage: "/images/destinations/egypt.jpg",
        description: "Stand in awe of the Pyramids of Giza, cruise the eternal Nile, and unlock the secrets of ancient pharaohs in the Valley of the Kings.",
        aboutText: "Egypt is a destination like no other. Home to the only remaining wonder of the ancient world, it offers a fascinating journey through time, combined with stunning Red Sea resorts and vibrant city life in Cairo.",
        bestTime: "October to April",
        experiences: ["History", "Culture", "Adventure", "River Cruise"],
        activities: ["Pyramid Tour", "Nile Cruise", "Cairo Market Walk", "Snorkeling in Sharm"],
        attractions: [
            { name: "Pyramids of Giza", img: "https://images.unsplash.com/photo-1539419361304-406deac9e96e?w=600&q=80" },
            { name: "Great Sphinx", img: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=600&q=80" },
            { name: "Luxor Temple", img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80" },
            { name: "Nile River", img: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=600&q=80" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800&q=80",
            "https://images.unsplash.com/photo-1539419361304-406deac9e96e?w=800&q=80",
            "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&q=80",
            "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80"
        ],
        packages: [
            { name: "Pharaoh's Heritage Tour", price: "₹1,45,000", duration: "8 Nights / 9 Days" },
            { name: "Nile Bliss & Pyramids", price: "₹98,000", duration: "6 Nights / 7 Days" }
        ]
    },
    {
        id: "malaysia",
        name: "Malaysia",
        tagline: "Truly Asia",
        titleImage: "/images/destinations/malaysia.jpg",
        description: "A melting pot of cultures where the futuristic Petronas Towers stand alongside ancient rainforests and crystal southern islands.",
        aboutText: "Malaysia is a land of vibrant contrasts. It offers a unique mix of modernity in Kuala Lumpur and prehistoric nature in Borneo, along with some of the best street food in all of Asia.",
        bestTime: "December to April & June to August",
        experiences: ["Food Tourism", "City Life", "Nature", "Beaches"],
        activities: ["KL Tower Visit", "Batu Caves Exploration", "Jungle Trekking", "Street Food Hopping"],
        attractions: [
            { name: "Petronas Towers", img: "https://images.unsplash.com/photo-1532003885409-ed84d334f6cc?w=600&q=80" },
            { name: "Batu Caves", img: "https://images.unsplash.com/photo-1524491991219-0303c72b226d?w=600&q=80" },
            { name: "Langkawi Archipelago", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80" },
            { name: "Cameron Highlands", img: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=600&q=80" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1532003885409-ed84d334f6cc?w=800&q=80",
            "https://images.unsplash.com/photo-1524491991219-0303c72b226d?w=800&q=80",
            "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
            "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80"
        ],
        packages: [
            { name: "Kuala Lumpur City Lights", price: "₹35,000", duration: "3 Nights / 4 Days" },
            { name: "Truly Asia Explorer", price: "₹75,000", duration: "7 Nights / 8 Days" }
        ]
    },
    {
        id: "russia",
        name: "Russia",
        tagline: "The Empire of the North",
        titleImage: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=1200&q=80",
        description: "Experience the imperial glory of St. Petersburg's palaces and the vibrant energy of Moscow's Red Square.",
        aboutText: "Russia is a country of epic proportions and deep history. From the world-class Hermitage Museum to the colorful domes of St. Basil's, it offers a majestic and culturally rich travel experience.",
        bestTime: "June to August",
        experiences: ["History", "Art", "City Life", "Culture"],
        activities: ["Hermitage Museum Tour", "Red Square Walk", "Ballet Performance", "Palace Tours"],
        attractions: [
            { name: "St. Basil's Cathedral", img: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=600&q=80" },
            { name: "Red Square", img: "https://images.unsplash.com/photo-1549468057-0b168f121df0?w=600&q=80" },
            { name: "Hermitage Museum", img: "https://images.unsplash.com/photo-1582234395701-d816431934c9?w=600&q=80" },
            { name: "Gorky Park", img: "https://images.unsplash.com/photo-1616428766157-5589ddc8430e?w=600&q=80" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80",
            "https://images.unsplash.com/photo-1549468057-0b168f121df0?w=800&q=80",
            "https://images.unsplash.com/photo-1533221971714-f069485cc12d?w=800&q=80",
            "https://images.unsplash.com/photo-1582234395701-d816431934c9?w=800&q=80"
        ],
        packages: [
            { name: "Imperial Russia Highlights", price: "₹1,65,000", duration: "7 Nights / 8 Days" },
            { name: "Moscow & St. Petersburg", price: "₹1,25,000", duration: "6 Nights / 7 Days" }
        ]
    },
    {
        id: "vietnam",
        name: "Vietnam",
        tagline: "Timeless Charm",
        titleImage: "https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&q=80",
        description: "Sail through the limestone towers of Ha Long Bay, explore the lantern-lit streets of Hoi An, and savor the world's best street food.",
        aboutText: "Vietnam is a sensory explosion. From the emerald waters of its iconic bays to the chaotic energy of its cities and the serenity of its terraced rice fields, it offers some of the best travel value in the world.",
        bestTime: "February to April & August to October",
        experiences: ["Nature", "Food Tourism", "Adventure", "History"],
        activities: ["Ha Long Bay Cruise", "Lantern Making", "Cu Chi Tunnels Visit", "Food Walking Tour"],
        attractions: [
            { name: "Ha Long Bay", img: "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80" },
            { name: "Hoi An Old Town", img: "https://images.unsplash.com/photo-1589110756770-438645c06be9?w=600&q=80" },
            { name: "Golden Bridge", img: "https://images.unsplash.com/photo-1587652750697-393963428801?w=600&q=80" },
            { name: "SaPa Rice Fields", img: "https://images.unsplash.com/photo-1528181304800-2f1408198f99?w=600&q=80" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80",
            "https://images.unsplash.com/photo-1589110756570-589110756be9?w=800&q=80",
            "https://images.unsplash.com/photo-1533221971714-f069485cc12d?w=800&q=80",
            "https://images.unsplash.com/photo-1528181304800-2f1408198f99?w=800&q=80"
        ],
        packages: [
            { name: "Vietnam Classic Explorer", price: "₹48,000", duration: "6 Nights / 7 Days" },
            { name: "The Grand Vietnam Tour", price: "₹85,000", duration: "10 Nights / 11 Days" }
        ]
    },
    {
        id: "maldives",
        name: "Maldives",
        tagline: "The Sunny Side of Life",
        titleImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80",
        description: "Wake up in an overwater villa suspended over turquoise lagoons, where the marine life is as colorful as the sunsets.",
        aboutText: "The Maldives is the world's premier beach destination, where luxury meets nature in a way that feels surreal. Every resort is its own private island, offering unparalleled privacy and crystal-clear ocean views.",
        bestTime: "November to April",
        experiences: ["Luxury", "Beaches", "Wellness", "Nature"],
        activities: ["Snorkeling", "Overwater Dinner", "Spa Treatments", "Seaplane Adventure"],
        attractions: [
            { name: "Male Atoll", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80" },
            { name: "Blue Lagoon", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80" },
            { name: "Underwater Dining", img: "https://images.unsplash.com/photo-1510009489794-352fba39acd3?w=600&q=80" },
            { name: "Pristine Beaches", img: "https://images.unsplash.com/photo-1528181304800-2f1408198f99?w=600&q=80" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
            "https://images.unsplash.com/photo-1510009489794-352fba39acd3?w=800&q=80",
            "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80"
        ],
        packages: [
            { name: "Luxury Overwater Retreat", price: "₹1,85,000", duration: "4 Nights / 5 Days" },
            { name: "Honeymoon Island Bliss", price: "₹2,50,000", duration: "5 Nights / 6 Days" }
        ]
    },
    {
        id: "switzerland",
        name: "Switzerland",
        tagline: "The Playground of Europe",
        titleImage: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=1200&q=80",
        description: "Explore the majestic Alps, crystal-clear lakes, and charming mountain villages in the heart of Europe.",
        aboutText: "Switzerland is a land of unmatched natural beauty. From the luxury watches of Geneva to the skiing slopes of Zermatt, it offers a refined and breathtaking experience for every traveler.",
        bestTime: "June to August & December to March",
        experiences: ["Nature", "Luxury", "Skiing", "Adventure"],
        activities: ["Mountain Trekking", "Skiing", "Lake Cruises", "Chocolate Tasting"],
        attractions: [
            { name: "The Matterhorn", img: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=600&q=80" },
            { name: "Lake Lucerne", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=1200&q=80"
        ],
        packages: [
            { name: "Alpine Luxury Explorer", price: "₹2,10,000", duration: "7 Nights / 8 Days" }
        ]
    }
];

export default destinationsData;
