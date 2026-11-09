'use strict';
(function () {
  const search = document.getElementById('course-search');
  const cards = Array.from(document.querySelectorAll('.course-card'));
  const filters = Array.from(document.querySelectorAll('.filter'));
  const count = document.getElementById('results-count');
  const empty = document.getElementById('empty-results');
  let currentFilter = 'tous';
  const normalize = s => (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  function render() {
    const q = normalize(search.value.trim());
    let visible = 0;
    cards.forEach(card => {
      const matchesFilter = currentFilter === 'tous' || card.dataset.category === currentFilter;
      const matchesSearch = normalize(card.textContent + ' ' + card.dataset.search).includes(q);
      const show = matchesFilter && matchesSearch;
      card.hidden = !show;
      if (show) visible++;
    });
    count.textContent = visible + (visible > 1 ? ' cours disponibles' : ' cours disponible');
    empty.hidden = visible > 0;
  }
  filters.forEach(filter => filter.addEventListener('click', () => {
    currentFilter = filter.dataset.filter;
    filters.forEach(btn => {const selected = btn === filter; btn.classList.toggle('is-active', selected); btn.setAttribute('aria-pressed', selected ? 'true' : 'false');});
    render();
  }));
  search.addEventListener('input', render);
  document.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement !== search && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) { e.preventDefault(); search.focus(); }
    if (e.key === 'Escape' && document.activeElement === search) { search.value = ''; search.blur(); render(); }
  });
  document.getElementById('current-year').textContent = new Date().getFullYear();
})();
