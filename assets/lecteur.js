'use strict';
(function () {
  const cours = {
    'electromagnetisme': {
      title: 'Électromagnétisme', category: 'PHYSIQUE CLASSIQUE', year: '2026–2027', pages: 81,
      file: 'ressources/cours-electromagnetisme.pdf', download: 'Cours_Electromagnetisme_Pr_Moha_El_Idrissi.pdf'
    },
    'quantique-relativiste': {
      title: 'Mécanique quantique relativiste', category: 'PHYSIQUE THÉORIQUE', year: '2023–2024', pages: 72,
      file: 'ressources/cours-mecanique-quantique-relativiste.pdf', download: 'Cours_Mecanique_Quantique_Relativiste_Pr_Moha_El_Idrissi.pdf'
    },
    'quantique-avancee': {
      title: 'Mécanique quantique avancée — Théorie quantique de diffusion', category: 'MASTER · RAYONNEMENT MATIÈRE', year: '2025–2026', pages: 70,
      file: 'ressources/cours-mecanique-quantique-avancee.pdf', download: 'Cours_Mecanique_Quantique_Avancee_Pr_Moha_El_Idrissi.pdf'
    }
  };
  const id = new URLSearchParams(location.search).get('cours');
  const data = Object.prototype.hasOwnProperty.call(cours, id) ? cours[id] : null;
  if (!data) {
    document.title = 'Cours introuvable | Pr Moha El Idrissi';
    document.getElementById('reader-title').textContent = 'Ce cours est introuvable';
    document.getElementById('reader-detail').textContent = 'Revenez à la bibliothèque pour choisir un document disponible.';
    document.getElementById('reader-category').textContent = 'RESSOURCE NON DISPONIBLE';
    document.getElementById('reader-frame').remove();
    document.getElementById('reader-open').hidden = true;
    document.getElementById('reader-download').hidden = true;
    return;
  }
  document.title = data.title + ' | Pr Moha El Idrissi';
  document.getElementById('breadcrumb-course').textContent = data.title;
  document.getElementById('reader-title').textContent = data.title;
  document.getElementById('reader-category').textContent = data.category;
  document.getElementById('reader-detail').textContent = 'Pr Moha El Idrissi  ·  ' + data.year + '  ·  ' + data.pages + ' pages';
  document.getElementById('reader-pages').textContent = data.pages + ' PAGES';
  document.getElementById('reader-frame').src = data.file + '#toolbar=1&navpanes=0';
  document.getElementById('reader-open').href = data.file;
  const a = document.getElementById('reader-download');
  a.href = data.file;
  a.setAttribute('download', data.download);
})();
