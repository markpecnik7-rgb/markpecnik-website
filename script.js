const languageButtons = document.querySelectorAll('[data-lang]');
let savedLanguage = 'sl';
try { savedLanguage = localStorage.getItem('language') === 'en' ? 'en' : 'sl'; } catch (_) { /* Storage may be disabled */ }
let language = savedLanguage;

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
  const facts = document.querySelector('.facts');
  if (facts) facts.setAttribute('aria-label', next === 'sl' ? 'Dosežki in nastopi' : 'Achievements and appearances');
  try { localStorage.setItem('language', next); } catch (_) { /* Continue without persistence */ }
}

languageButtons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
setLanguage(language);
