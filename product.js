/* =========================================
   MACHINERY SHOP
   FINAL COMBINED PRODUCT DATABASE
   ========================================= */

const products = [

    /* =========================
       MACHINERY
    ========================= */

    {
        id: "machinery-001",
        name: "Manual Cup Sealing Machine SN98273",
        bnName: "ম্যানুয়াল কাপ সিলিং মেশিন",
        category: "machinery",
        categoryName: "Machinery",
        subCategory: "Cup Sealing Machine",

        price: 14500,
        oldPrice: 16500,

        image: "images/cup-sealing-machine.png",
       
       gallery: [
         "images/cup-sealing-machine-1.jpg",
         "images/cup-sealing-roll.jpg"],
     
       videos: [],

        rating: 5,
        reviews: 12,

        badge: "OFFER",

        description: "ব্যবসায়িক ব্যবহারের জন্য ম্যানুয়াল কাপ সিলিং মেশিন। জুস, চা, কোল্ড ড্রিংকস ও বিভিন্ন কাপজাতীয় পণ্য সিল করার জন্য উপযোগী।",

        keywords: [
            "cup sealer",
            "cup sealing machine",
            "কাপ সিলার",
            "কাপ সিলিং মেশিন",
            "কাপ সেলার",
            "SN98273"
        ],

        packageIncludes: [
            "১টি ৯ সেমি Die — 350 ml কাপের জন্য",
            "১টি ৭ সেমি Die — 180 ml কাপের জন্য",
            "১ রোল Sealing Film — প্রায় ৫০০ কাপের জন্য FREE"
        ],

        specifications: {
            "Machine Size": '20" × 10" × 8"',
            "Material": "Carbon Steel Structure",
            "Operation": "Manual",
            "Film System": "প্রতিটি কাপ সিল করার পর ফিল্ম হাতে এগিয়ে দিতে হয়"
        },

        warranty: "৬ মাস Service Warranty। Physical Damage, Mishandling বা Misuse-এর ক্ষেত্রে Warranty প্রযোজ্য নয়।",
        note: "স্টকের ওপর ভিত্তি করে পণ্যের রঙ পরিবর্তিত হতে পারে।",

        stock: 10,
        status: "available",
        delivery: "সারা বাংলাদেশে Delivery Available",
        seller: "Machinery Shop",

        page: "product.html?id=machinery-001"
    },

    {
        id: "machinery-002",
        name: "Commercial Cotton Candy Making Machine",
        bnName: "কটন ক্যান্ডি মেশিন",
        category: "machinery",
        categoryName: "Machinery",
        subCategory: "Cotton Candy Machine",

        price: 19400,
        oldPrice: 20000,

        image: "images/cotton-candy-machine.jpg",      
       
       gallery: ["images/cotton-candy-machine-1.jpg"],

       videos: [],
        

        rating: 5,
        reviews: 8,

        badge: "OFFER",

        description: "Commercial Cotton Candy Making Machine — দোকান, মেলা, ইভেন্ট, পার্ক ও বিভিন্ন ব্যবসায়িক কাজে দ্রুত Cotton Candy তৈরির জন্য উপযোগী।",

        keywords: [
            "cotton candy",
            "cotton candy machine",
            "candy floss machine",
            "কটন ক্যান্ডি",
            "কটন ক্যান্ডি মেশিন"
        ],

        specifications: {
            "Brand": "PD",
            "Voltage": "110V / 220V",
            "Power": "1000W",
            "Dimension": "53 × 53 × 42 cm",
            "Weight": "12 KG",
            "Capacity": "প্রায় ৫ সেকেন্ডে ১ পিস",
            "Power Source": "Electric / Gas",
            "Raw Material": "Sugar",
            "Output": "Cotton Candy",
            "Application": "Commercial Catering, Snack Food Factory",
            "Packaging": "Wooden Case"
        },

        features: [
            "1000W High Power",
            "দ্রুত Cotton Candy Production",
            "Commercial Use-এর জন্য উপযোগী",
            "সহজে পরিচালনা করা যায়",
            "দোকান, মেলা ও ইভেন্টে ব্যবহারযোগ্য"
        ],

        stock: 8,
        status: "available",
        delivery: "সারা বাংলাদেশে Delivery Available",
        seller: "Machinery Shop",

        page: "product.html?id=machinery-002"
    },

    {
        id: "machinery-003",
        name: "Manual Sugar Cane Juicer",
        bnName: "ম্যানুয়াল আখের জুস মেশিন",
        category: "machinery",
        categoryName: "Machinery",
        subCategory: "Sugarcane Machine",

        price: 32000,
        oldPrice: 35000,

        image: "images/sugarcane-machine.jpg",


       gallery: [
          "images/sugarcane-machine-1.jpg",
          "images/sugarcane-machine-2.jpg"],

       videos: [],
       
        rating: 5,
        reviews: 15,

        badge: "BEST SELLER",

        description: "Manual Sugar Cane Juicer Machine — শক্তিশালী ম্যানুয়াল হ্যান্ড-ক্র্যাঙ্ক সিস্টেমের মাধ্যমে আখের রস বের করার জন্য তৈরি। বিভিন্ন ব্যবসায়িক প্রতিষ্ঠানে ব্যবহারের উপযোগী।",

        keywords: [
            "sugarcane machine",
            "sugar cane juice machine",
            "আখের মেশিন",
            "আখের জুস মেশিন",
            "আখ মেশিন"
        ],

        specifications: {
            "Brand": "TECHTONGDA",
            "Type": "Manual",
            "Color": "Green / Silver",
            "Material": "Stainless Steel",
            "Finish": "Stainless Steel",
            "Dimension": '12.6"D × 13.7"W × 16.5"H',
            "Inlet Diameter": '2.4"',
            "Output": "330 lb/hour",
            "Operation": "Manual Hand Crank",
            "Roller Gap": "Adjustable",
            "Special Feature": "Low Noise Operation"
        },

        features: [
            "Hand Crank Operation",
            "Multiple Gear System",
            "Adjustable Roller Gap",
            "2.4-inch Feeding Port",
            "Low Noise Operation",
            "Stainless Steel Construction",
            "আখ ছাড়াও বিভিন্ন ফল ও সবজির রস বের করা যায়"
        ],

        suitableFor: [
            "Hotel",
            "Fruit Shop",
            "Cold Drink Shop",
            "Herbal Tea Shop",
            "Station",
            "Supermarket"
        ],

        stock: 5,
        status: "available",
        delivery: "সারা বাংলাদেশে Delivery Available",
        seller: "Machinery Shop",

        page: "product.html?id=machinery-003"
    },

    {
        id: "machinery-004",
        name: "Commercial Juicer Machine",
        bnName: "কমার্শিয়াল জুস মেশিন",
        category: "machinery",
        categoryName: "Machinery",
        subCategory: "Juice Machine",

        price: 38000,
        oldPrice: 42000,

        image: "images/juice-machine-.jpg",
       
       gallery: [
          "images/juice-machine-1.jpg"],
      
       videos: [],

        rating: 5,
        reviews: 6,

        badge: "POPULAR",

        description: "Commercial Juicer Machine — ব্যবসায়িক ব্যবহারের জন্য উপযোগী শক্তিশালী জুস মেশিন।",

        keywords: [
            "juice machine",
            "commercial juice machine",
            "জুস মেশিন",
            "জুস মেশিনারি",
            "জুস বানানোর মেশিন"
        ],

        specifications: {
            "SKU": "BBM-D3-04",
            "Model": "WF-B3000",
            "Place of Origin": "China",
            "Voltage": "220V / 50Hz",
            "Power": "380W",
            "Body Size": "340 × 270 × 360 mm",
            "Weight": "প্রায় 20 KG",
            "Machine Material": "Stainless Steel Body"
        },

        features: [
            "Commercial Use",
            "Stainless Steel Body",
            "Compact Design",
            "220V / 50Hz Operation"
        ],

        stock: 6,
        status: "available",
        delivery: "সারা বাংলাদেশে Delivery Available",
        seller: "Machinery Shop",

        page: "product.html?id=machinery-004"
    },

    {
        id: "machinery-005",
        name: "Electric Popcorn Machine",
        bnName: "ইলেকট্রিক পপকর্ন মেশিন",
        category: "machinery",
        categoryName: "Machinery",
        subCategory: "Popcorn Machine",

        price: 22000,
        oldPrice: 25000,

        image: "images/popcorn-machine.jpg",
      
       gallery: [  
          "images/popcorn-machine-1.jpg",
          "images/popcorn-machine-2.png"],
  
       videos: [],
       
        rating: 5,
        reviews: 9,

        badge: "POPULAR",

        description: "Electric Popcorn Machine — Commercial ও Home Use-এর জন্য উপযোগী। দোকান, মেলা, ইভেন্ট ও Snack Business-এর জন্য ব্যবহার করা যায়।",

        keywords: [
            "popcorn machine",
            "pop corn machine",
            "পপকর্ন মেশিন",
            "পপকর্ন"
        ],

        specifications: {
            "Brand": "SqSYqz",
            "Type": "Electric",
            "Material": "Stainless Steel",
            "Use": "Commercial & Home",
            "Color": "Red / Yellow"
        },

        features: [
            "Electric Operation",
            "Stainless Steel Construction",
            "Commercial Use-এর জন্য উপযোগী",
            "Home Use-এর জন্যও ব্যবহারযোগ্য"
        ],

        stock: 12,
        status: "available",
        delivery: "সারা বাংলাদেশে Delivery Available",
        seller: "Machinery Shop",

        page: "product.html?id=machinery-005"
    },

    /* =========================
       FOOD & RESTAURANT
    ========================= */

    {
        id: "food-001",
        name: "Commercial Waffle Maker",
        bnName: "ওয়াফল মেকার",
        category: "food",
        categoryName: "Food & Restaurant",
        subCategory: "Waffle Maker",

        price: 12500,
        oldPrice: 15000,

        image: "images/waffle-maker.jpg",
        gallery: [],

        rating: 5,
        reviews: 4,

        badge: "OFFER",

        description: "ক্যাফে, ফাস্টফুড ও রেস্টুরেন্ট ব্যবসার জন্য তৈরি উচ্চমানের কমার্শিয়াল ইলেকট্রিক ওয়াফল মেকার। নন-স্টিক কোটিং সমৃদ্ধ।",

        keywords: [
            "waffle maker",
            "waffle machine",
            "ওয়াফল মেকার",
            "ওয়াফল মেশিন"
        ],

        specifications: {
            "Voltage": "220V",
            "Power": "1500W",
            "Body Material": "Stainless Steel",
            "Coating": "Non-stick Teflon Coating",
            "Temperature": "50-300°C Adjustable"
        },

        features: [
            "দ্রুত গরম হয়",
            "তাপমাত্রা নিয়ন্ত্রণে থার্মোস্ট্যাট",
            "সহজে পরিষ্কারযোগ্য"
        ],

        stock: 7,
        status: "available",
        delivery: "সারা বাংলাদেশে Delivery Available",
        seller: "Machinery Shop",

        page: "product.html?id=food-001"
    },

    {
        id: "food-002",
        name: "Commercial Deep Fryer",
        bnName: "ডিপ ফ্রায়ার",
        category: "food",
        categoryName: "Food & Restaurant",
        subCategory: "Deep Fryer",

        price: 8500,
        oldPrice: 10000,

        image: "images/deep-fryer.jpg",
        gallery: [],

        rating: 5,
        reviews: 11,

        badge: "POPULAR",

        description: "রেস্টুরেন্ট, ফাস্টফুড ও স্ট্রিট ফুড শপের জন্য উপযোগী কমার্শিয়াল ডিপ ফ্রায়ার। ফ্রেঞ্চ ফ্রাই, চিকেন ফ্রাই ইত্যাদি ফ্রাই করার জন্য সেরা।",

        keywords: [
            "deep fryer",
            "fryer machine",
            "ডিপ ফ্রায়ার",
            "ফ্রায়ার মেশিন"
        ],

        specifications: {
            "Capacity": "6 Liters",
            "Power": "2500W",
            "Voltage": "220V",
            "Material": "Heavy Duty Stainless Steel"
        },

        features: [
            "অটোমেটিক টেম্পারেচার কন্ট্রোল",
            "স্টেইনলেস স্টিল বাস্কেট অন্তর্ভুক্ত",
            "কম বিদ্যুৎ খরচ"
        ],

        stock: 15,
        status: "available",
        delivery: "সারা বাংলাদেশে Delivery Available",
        seller: "Machinery Shop",

        page: "product.html?id=food-002"
    },

    /* =========================
       HOME
    ========================= */

    {
        id: "home-001",
        name: "Mini Vacuum Cleaner",
        bnName: "মিনি ভ্যাকুয়াম ক্লিনার",
        category: "home",
        categoryName: "Home",
        subCategory: "Cleaning",

        price: 1800,
        oldPrice: 2200,

        image: "images/mini-vacuum.jpg",
        gallery: [],

        rating: 5,
        reviews: 3,

        badge: "NEW",

        description: "বাসা, অফিস, কম্পিউটার কিবোর্ড এবং গাড়ির ভেতরের অংশ সহজে পরিষ্কার করার জন্য পোর্টেবল রিচার্জেবল মিনি ভ্যাকুয়াম ক্লিনার।",

        keywords: [
            "vacuum cleaner",
            "mini vacuum",
            "ভ্যাকুয়াম ক্লিনার",
            "ক্লিনার"
        ],

        specifications: {
            "Type": "Wireless Rechargeable",
            "Battery": "2000mAh",
            "Charging Port": "USB Type-C",
            "Weight": "400g"
        },

        features: [
            "হালকা ও পোর্টেবল",
            "শক্তিশালী সাকশন পাওয়ার",
            "ওয়াশাবেল ফিল্টার"
        ],

        stock: 20,
        status: "available",
        delivery: "সারা বাংলাদেশে Delivery Available",
        seller: "Machinery Shop",

        page: "product.html?id=home-001"
    },

    /* =========================
       DAILY NEED
    ========================= */

    {
        id: "daily-001",
        name: "Electric Mini Sealing Machine",
        bnName: "মিনি হ্যান্ড সিলার",
        category: "daily",
        categoryName: "Daily Need",
        subCategory: "Daily Products",

        price: 350,
        oldPrice: 500,

        image: "images/daily-product.jpg",
        gallery: [],

        rating: 5,
        reviews: 2,

        badge: "NEW",

        description: "দৈনন্দিন জীবনে খোলার পর যেকোনো প্লাস্টিক বা স্ন্যাকসের প্যাকেট পুনরায় এয়ারটাইট লক করার জন্য মিনি হ্যান্ড সিলার।",

        keywords: [
            "mini sealer",
            "hand sealer",
            "প্যাকেট সিলার",
            "দৈনন্দিন পণ্য"
        ],

        specifications: {
            "Power": "2x AA Battery",
            "Material": "ABS Plastic",
            "Use": "Home & Kitchen"
        },

        features: [
            "ছোট ও পোর্টেবল",
            "খাবার তাজা রাখতে সাহায্য করে"
        ],

        stock: 30,
        status: "available",
        delivery: "সারা বাংলাদেশে Delivery Available",
        seller: "Machinery Shop",

        page: "product.html?id=daily-001"
    },

    /* =========================
       FASHION
    ========================= */

    {
        id: "fashion-001",
        name: "Heavy Duty Work Apron",
        bnName: "ওয়ার্কশপ ও কিচেন এপ্রোন",
        category: "fashion",
        categoryName: "Fashion",
        subCategory: "Fashion",

        price: 850,
        oldPrice: 1100,

        image: "images/fashion-product.jpg",
        gallery: [],

        rating: 5,
        reviews: 5,

        badge: "NEW",

        description: "মেশিনারি ও কিচেনে কাজ করার জন্য বিশেষ ওয়াটারপ্রুফ ও হেভি ডিউটি ওয়ার্কিং এপ্রোন।",

        keywords: [
            "apron",
            "work apron",
            "এপ্রোন",
            "ফ্যাশন আইটেম"
        ],

        specifications: {
            "Material": "Waterproof Canvas",
            "Size": "Free Size Adjustable",
            "Pockets": "3 Utility Pockets"
        },

        features: [
            "মজবুত ও ওয়াটারপ্রুফ",
            "টুলস রাখার একাধিক পকেট"
        ],

        stock: 15,
        status: "available",
        delivery: "সারা বাংলাদেশে Delivery Available",
        seller: "Machinery Shop",

        page: "product.html?id=fashion-001"
    },

    /* =========================
       HEALTH & CARE
    ========================= */

    {
        id: "health-001",
        name: "Industrial Safety Goggles & Mask Set",
        bnName: "সেফটি চশমা ও মাস্ক সেট",
        category: "health",
        categoryName: "Health & Care",
        subCategory: "Health Care",

        price: 650,
        oldPrice: 850,

        image: "images/safety-goggles-mask.jpg",

       gallery: [
          "images/safety-goggles-mask-1.jpg",
          "images/safety-goggles-mask-2.jpg"],
   
       videos: [],

        rating: 5,
        reviews: 7,

        badge: "NEW",

        description: "মেশিনারি কাজ বা ওয়ার্কশপে নিরাপত্তা নিশ্চিত করতে আই প্রটেকশন গ্লাস ও ডাস্ট প্রুফ মাস্ক।",

        keywords: [
            "safety goggles",
            "dust mask",
            "সেফটি চশমা",
            "মাস্ক"
        ],

        specifications: {
            "Material": "Polycarbonate & Silicone",
            "Protection": "Dust, UV & Chemical Splashes"
        },

        features: [
            "চোখ ও মুখ সম্পূর্ণ সুরক্ষিত রাখে",
            "এডজাস্টেবল স্ট্র্যাপ"
        ],

        stock: 25,
        status: "available",
        delivery: "সারা বাংলাদেশে Delivery Available",
        seller: "Machinery Shop",

        page: "product.html?id=health-001"
    },

   // ১. সেফটি হেলমেট
    {
        id: "health-002",
        name: "Industrial Construction Safety Helmet",
        bnName: "ইন্ডাস্ট্রিয়াল সেফটি হেলমেট",
        category: "health",
        categoryName: "Health & Care",
        subCategory: "Safety Equipment",

        price: 450,
        oldPrice: 600,

        image: "images/safety-helmet.jpg",
      
       gallery: [  
          "images/safety-helmet-1.jpg",
          "images/safety-helmet-face-max.jpg"],
       
       videos: [],

        rating: 5,
        reviews: 6,

        badge: "NEW",

        description: "কনস্ট্রাকশন ও ওয়ার্কশপের কাজের জন্য মজবুত এবং টেকসই সেফটি হেলমেট। মাথাকে যেকোনো আঘাত থেকে রক্ষা করে।",

        keywords: [
            "safety helmet",
            "hard hat",
            "সেফটি হেলমেট",
            "হেলমেট"
        ],

        specifications: {
            "Material": "High-Density ABS Plastic",
            "Adjustable Strap": "Yes",
            "Color": "Yellow",
            "Application": "Construction, Factory, Workshop"
        },

        features: [
            "আঘাত প্রতিরোধী শক্ত প্লাস্টিক",
            "মাথার মাপ অনুযায়ী এডজাস্ট করার সুবিধা",
            "হালকা ও দীর্ঘক্ষণ পরে থাকার উপযোগী"
        ],

        stock: 20,
        status: "available",
        delivery: "সারা বাংলাদেশে Delivery Available",
        seller: "Machinery Shop",

        page: "product.html?id=health-002"
    },

    // ২. ফুল ফেস প্রটেক্টিভ শিল্ড
    {
        id: "health-003",
        name: "Transparent Full Face Protective Shield",
        bnName: "ট্রান্সপারেন্ট ফুল ফেস শিল্ড",
        category: "health",
        categoryName: "Health & Care",
        subCategory: "Safety Equipment",

        price: 350,
        oldPrice: 500,

        image: "images/full-face-shield.jpg",

       gallery: [
          "images/full-face-shield-1.jpg"],
       
       videos: [],

        rating: 5,
        reviews: 4,

        badge: "NEW",

        description: "ধুলোবালি, কেমিক্যাল ছিটে আসা বা গ্রাইন্ডিং কাজের সময় মুখ ও চোখ সম্পূর্ণ নিরাপদ রাখার জন্য ফুল ফেস শিল্ড।",

        keywords: [
            "face shield",
            "full face mask",
            "ফেস শিল্ড",
            "প্রটেক্টিভ মাস্ক"
        ],

        specifications: {
            "Material": "HD Clear Polycarbonate",
            "Feature": "Anti-Fog, Dustproof, Splash-Proof",
            "Size": "Universal Fit"
        },

        features: [
            "স্পষ্ট দেখার জন্য একদম ট্রান্সপারেন্ট",
            "ধুলো ও কেমিক্যাল থেকে মুখ সুরক্ষিত রাখে",
            "সহজে ধুয়ে পরিষ্কার করা যায়"
        ],

        stock: 30,
        status: "available",
        delivery: "সারা বাংলাদেশে Delivery Available",
        seller: "Machinery Shop",

        page: "product.html?id=health-003"
    },

    // ৩. গগলস সহ সেফটি ও রাইডিং মাস্ক
    {
        id: "health-004",
        name: "Detachable Safety Goggles Mask",
        bnName: "গগলস সহ সেফটি ও বাইকিং মাস্ক",
        category: "health",
        categoryName: "Health & Care",
        subCategory: "Safety Equipment",

        price: 550,
        oldPrice: 750,

        image: "images/safety-goggles-mask.jpg",

       gallery: [
          "images/safety-goggles-mask-1.jpg",
          "images/safety goggles mask-2.jpg"],

       videos: [],

        rating: 5,
        reviews: 9,

        badge: "POPULAR",

        description: "বাইক রাইডিং বা যেকোনো মেকানিক্যাল কাজে চোখ ও মুখ বাতাসের ধুলোবালি থেকে বাঁচাতে গগলস সহ কুল ডিজাইনের সেফটি মাস্ক।",

        keywords: [
            "riding mask",
            "goggles mask",
            "সেফটি গগলস",
            "বাইকিং মাস্ক"
        ],

        specifications: {
            "Material": "TPU Frame + PC Lens",
            "Features": "UV Protection, Windproof, Dustproof",
            "Strap": "Adjustable Elastic Band"
        },

        features: [
            "গগলস ও মাস্ক আলাদা করা যায়",
            "বাতাস চলাচলের ফিল্টারযুক্ত ফেন্ট",
            "চোখ ও মুখকে ধুলোবালি থেকে শতভাগ রক্ষা করে"
        ],

        stock: 15,
        status: "available",
        delivery: "সারা বাংলাদেশে Delivery Available",
        seller: "Machinery Shop",

        page: "product.html?id=health-004"
    },

   
    /* =========================
       TOOLS & OTHERS
    ========================= */

    {
        id: "tools-001",
        name: "Electric Drill Machine",
        bnName: "ইলেকট্রিক ড্রিল মেশিন",
        category: "tools",
        categoryName: "Tools & Others",
        subCategory: "Power Tools",

        price: 3200,
        oldPrice: 3800,

        image: "images/drill-machine.jpg",
        gallery: [],

        rating: 5,
        reviews: 14,

        badge: "POPULAR",

        description: "বাসাবাড়ি, ওয়ার্কশপ ও বিভিন্ন কনস্ট্রাকশনের কাজের উপযোগী পাওয়ারফুল ইলেকট্রিক ড্রিল মেশিন।",

        keywords: [
            "drill machine",
            "electric drill",
            "ড্রিল মেশিন",
            "ইলেকট্রিক ড্রিল"
        ],

        specifications: {
            "Power": "650W",
            "Voltage": "220V",
            "Chuck Size": "13mm",
            "Speed": "0-3000 RPM Adjustable"
        },

        features: [
            "কাঠ, লোহা ও কংক্রিটে ড্রিল করার উপযোগী",
            "স্পিড কন্ট্রোল ও রিভার্স ফাংশন"
        ],

        stock: 10,
        status: "available",
        delivery: "সারা বাংলাদেশে Delivery Available",
        seller: "Machinery Shop",

        page: "product.html?id=tools-001"
    }

];
