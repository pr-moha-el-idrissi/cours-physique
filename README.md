# Portail pédagogique — Pr Moha El Idrissi

Site académique en français, prêt pour **GitHub Pages**, avec trois cours PDF fournis par l'utilisateur.

## Contenu

| Cours | Année affichée dans le document | Pages | Fichier |
|---|---|---:|---|
| Électromagnétisme | 2026–2027 | 81 | `ressources/cours-electromagnetisme.pdf` |
| Mécanique quantique relativiste | 2023–2024 | 72 | `ressources/cours-mecanique-quantique-relativiste.pdf` |
| Mécanique quantique avancée — Théorie quantique de diffusion | 2025–2026 | 70 | `ressources/cours-mecanique-quantique-avancee.pdf` |

Le site propose : affichage mobile / ordinateur, recherche et filtrage, pages de lecture PDF, ouverture dans un nouvel onglet et téléchargement direct. Aucune base de données, aucun cookie applicatif, aucune dépendance externe.

## Publier sur GitHub Pages (méthode simple)

1. Connectez-vous à [github.com](https://github.com) et créez un **dépôt public** (par exemple `cours-physique-el-idrissi`).
2. Dans le dépôt, utilisez **Add file → Upload files**. Déposez **tout le contenu** de ce dossier en conservant les sous-dossiers `assets/` et `ressources/` et les fichiers à la racine (`index.html`, `lecteur.html`, `.nojekyll`, etc.). Si votre navigateur ne conserve pas l'arborescence, utilisez la méthode Git ci-dessous.
3. Validez le téléversement avec **Commit changes** sur la branche `main`.
4. Allez dans **Settings → Pages → Build and deployment**. Choisissez **Deploy from a branch**, puis **`main`** et **`/(root)`**, et cliquez sur **Save**.
5. L'URL finale sera de la forme : `https://VOTRE_IDENTIFIANT.github.io/cours-physique-el-idrissi/`.

Les PDF sont déjà placés dans `ressources/` : **inutile de les remplacer**.

## Publier avec Git en ligne de commande (alternative)

Après avoir créé un dépôt vide sur GitHub, ouvrez un terminal dans ce dossier :

```bash
git init
git add .
git commit -m "Publier le portail pédagogique du Pr Moha El Idrissi"
git branch -M main
git remote add origin https://github.com/VOTRE_IDENTIFIANT/cours-physique-el-idrissi.git
git push -u origin main
```

Puis activez GitHub Pages via **Settings → Pages** comme indiqué ci-dessus.

## Tester localement

Dans ce dossier :

```bash
python -m http.server 8000
```

Ouvrez `http://localhost:8000/`.

## Ajouter un nouveau cours

Pour ajouter un support, déposez son PDF dans `ressources/`, créez un aperçu de sa couverture dans `assets/`, puis dupliquez un bloc `<article class="course-card">` de `index.html`. Ajoutez l'entrée correspondante dans `assets/lecteur.js` pour rendre le document accessible sur sa page de lecture. Ajustez les compteurs et les descriptions.

## Attention aux droits de diffusion

**Avant de rendre le dépôt public, obtenez l'accord du Pr Moha El Idrissi pour diffuser les PDF** et vérifiez que les images ou documents qu'ils contiennent peuvent être mis en ligne. Un site GitHub Pages est publiquement accessible. Aucun logo officiel d'université n'a été ajouté au design du site.

Le site attribue les documents au professeur, sans revendiquer un statut de site officiel de l'université.
