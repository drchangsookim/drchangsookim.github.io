function switchLanguage(lang) {
  // Hide all language content
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.classList.remove('show');
  });
  
  // Show selected language content
  document.querySelectorAll(`[data-lang="${lang}"]`).forEach(el => {
    el.classList.add('show');
  });
  
  // Update button states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[onclick*="${lang}"]`).classList.add('active');
  
  // Save preference
  localStorage.setItem('preferred-language', lang);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  const savedLang = localStorage.getItem('preferred-language') || 'ko'; // Default to Korean
  
  // Set initial language
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.classList.remove('show');
  });
  
  document.querySelectorAll(`[data-lang="${savedLang}"]`).forEach(el => {
    el.classList.add('show');
  });
  
  // Update button states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.querySelector(`[onclick*="${savedLang}"]`);
  if (activeBtn) activeBtn.classList.add('active');
});