class LanguageSwitcher {
  constructor() {
    this.currentLang = localStorage.getItem('preferred-language') || 'en';
    this.init();
  }

  init() {
    this.updateLanguage(this.currentLang);
    this.bindEvents();
  }

  bindEvents() {
    // Bind flag buttons
    document.querySelectorAll('.lang-btn, .lang-text-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lang = e.currentTarget.dataset.lang;
        this.switchLanguage(lang);
      });
    });
  }

  switchLanguage(lang) {
    if (lang === this.currentLang) return;
    
    this.currentLang = lang;
    this.updateLanguage(lang);
    localStorage.setItem('preferred-language', lang);
    
    // Trigger custom event
    document.dispatchEvent(new CustomEvent('languageChanged', {
      detail: { language: lang }
    }));
  }

  updateLanguage(lang) {
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update button states
    document.querySelectorAll('.lang-btn, .lang-text-btn').forEach(btn => {
      btn.setAttribute('aria-pressed', btn.dataset.lang === lang);
    });

    // Update page title if translations exist
    this.updatePageTitle(lang);
  }

  updatePageTitle(lang) {
    const titleElement = document.querySelector('title');
    if (titleElement) {
      // You can customize this based on your translation structure
      const translations = {
        'en': document.querySelector('[data-title-en]')?.dataset.titleEn,
        'ko': document.querySelector('[data-title-ko]')?.dataset.titleKo
      };
      
      if (translations[lang]) {
        titleElement.textContent = translations[lang];
      }
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new LanguageSwitcher();
});

// Auto-detect language preference
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferred-language');
  const browserLang = navigator.language.split('-')[0];
  
  if (!savedLang && (browserLang === 'ko' || browserLang === 'en')) {
    localStorage.setItem('preferred-language', browserLang);
    document.documentElement.lang = browserLang;
  }
});