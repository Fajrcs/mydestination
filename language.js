// وظيفة تغيير اللغة
function changeLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    updateContent();
}

// وظيفة تحديث محتوى الصفحة
function updateContent() {
    const currentLang = getCurrentLanguage();
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLang] && translations[currentLang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLang][key];
            } else {
                element.textContent = translations[currentLang][key];
            }
        }
    });

    // تحديث اتجاه العناصر
    updateStyles(currentLang);
}

// وظيفة تحديث الستايل حسب اللغة
function updateStyles(lang) {
    const isRTL = lang === 'ar';
    const elements = document.querySelectorAll('.language-dependent');
    
    elements.forEach(element => {
        if (isRTL) {
            element.classList.remove('ltr');
            element.classList.add('rtl');
        } else {
            element.classList.remove('rtl');
            element.classList.add('ltr');
        }
    });
}

// وظيفة الحصول على اللغة الحالية
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'ar';
}

// تهيئة اللغة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = getCurrentLanguage();
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    updateContent();
}); 