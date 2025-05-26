// Language translations for the website
const translations = {
  ar: {
    // القائمة العلوية
    home: "الصفحة الرئيسية",
    profile: "الملف الشخصي",
    myTickets: "تذاكري",
    logout: "تسجيل الخروج",
    switchLanguage: "Switch to English",
    
    // البحث والتصفية
    searchPlaceholder: "ابحث عن فعاليات أو وجهات...",
    allCities: "كل المدن",
    
    // أنواع الفعاليات
    all: "الكل",
    historical: "تاريخي",
    conference: "مؤتمر",
    workshop: "ورشة عمل",
    festival: "مهرجان",
    exhibition: "معرض",
    educational: "تعليمي",
    cultural: "ثقافي",
    sports: "رياضي",
    art: "فني",
    entertainment: "ترفيهي",
    
    // تفاصيل الفعالية
    availableSeats: "مقعد متاح",
    details: "التفاصيل",
    book: "احجز",
    price: "ريال",
    location: "الموقع",
    
    // رسائل
    noEvents: "لا توجد فعاليات تطابق معايير البحث",
    bookingSuccess: "تم الحجز بنجاح!",
    soldOut: "نفذت التذاكر",
    
    // صفحة الدفع
    payment: "صفحة الدفع",
    cardNumber: "رقم البطاقة",
    cardName: "الاسم على البطاقة",
    expiryDate: "تاريخ الانتهاء",
    cvv: "رمز الأمان",
    completePayment: "إتمام الدفع",
    
    // خدمة العملاء
    customerService: "خدمة العملاء",
    chatPlaceholder: "اكتب رسالتك هنا...",
    send: "إرسال",
    chatWelcome: "مرحباً! كيف يمكنني مساعدتك اليوم؟"
  },
  en: {
    // Top Menu
    home: "Home",
    profile: "Profile",
    myTickets: "My Tickets",
    logout: "Logout",
    switchLanguage: "التغيير إلى العربية",
    
    // Search and Filter
    searchPlaceholder: "Search for events or destinations...",
    allCities: "All Cities",
    
    // Event Types
    all: "All",
    historical: "Historical",
    conference: "Conference",
    workshop: "Workshop",
    festival: "Festival",
    exhibition: "Exhibition",
    educational: "Educational",
    cultural: "Cultural",
    sports: "Sports",
    art: "Art",
    entertainment: "Entertainment",
    
    // Event Details
    availableSeats: "seats available",
    details: "Details",
    book: "Book",
    price: "SAR",
    location: "Location",
    
    // Messages
    noEvents: "No events match your search criteria",
    bookingSuccess: "Booking successful!",
    soldOut: "Sold Out",
    
    // Payment Page
    payment: "Payment Page",
    cardNumber: "Card Number",
    cardName: "Cardholder Name",
    expiryDate: "Expiry Date",
    cvv: "CVV",
    completePayment: "Complete Payment",
    
    // Customer Service
    customerService: "Customer Service",
    chatPlaceholder: "Type your message here...",
    send: "Send",
    chatWelcome: "Hello! How can I help you today?"
  }
};

// Function to get translation
function getTranslation(key, language = localStorage.getItem('language') || 'ar') {
  return translations[language][key] || key;
}

// Function to switch language
function switchLanguage(language) {
  localStorage.setItem('language', language);
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  window.location.reload();
} 