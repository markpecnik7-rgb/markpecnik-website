const languageButtons = document.querySelectorAll('[data-lang]');
let language = localStorage.getItem('language') === 'en' ? 'en' : 'sl';

function setLanguage(next) {
  language = next;
  document.documentElement.lang = next;
  document.querySelectorAll('[data-sl]').forEach((element) => {
    const value = element.dataset[next];
    if (value) element.innerHTML = value.replaceAll('\\n', '<br>');
  });
  languageButtons.forEach((button) => {
    const active = button.dataset.lang === next;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.title = next === 'sl'
    ? 'Mark Pečnik — Odbojka na mivki in coaching'
    : 'Mark Pečnik — Beach Volleyball Athlete & Coach';
  document.querySelector('meta[name="description"]').content = next === 'sl'
    ? 'Mark Pečnik, profesionalni igralec odbojke na mivki in trener iz Slovenije. Treningi, športna pot in sodelovanja.'
    : 'Mark Pečnik, professional beach volleyball athlete and coach from Slovenia. Coaching, career and collaborations.';
  localStorage.setItem('language', next);
}

languageButtons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
setLanguage(language);
