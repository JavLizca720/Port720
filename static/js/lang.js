fetch('static/json/translations.json')
  .then(response => response.json())
  .then(data => {
    const flagTheme = document.getElementById('flags-theme');
    const flagIcon = document.getElementById('flags-icon');

    flagTheme.addEventListener('click', () => {
      const lang = flagIcon.src.includes('static/img/lang/en.png') ? 'es' : 'en';
      flagIcon.src = `static/img/lang/${lang}.png`;
      document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = data[lang][key];
      });
      localStorage.setItem('lang', lang);
    });

    const lang = localStorage.getItem('lang') || 'en';
    flagIcon.src = `static/img/lang/${lang}.png`;
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      element.textContent = data[lang][key];
    });
  });
