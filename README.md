# Mandarin Flow - Centre de Formation en Mandarin

Site web moderne pour **Mandarin Flow**, un centre de formation en langue mandarin offrant des programmes personnalisés.

## 📋 Organisation des fichiers

```
MandarinFlow/
├── index.html                    # Page principale du site
├── css/
│   └── styles.css                # Tous les styles, animations et gradients
├── js/
│   └── script.js                 # Toutes les fonctions interactives
├── assets/
│   └── images/                   # Images locales du site
└── README.md                     # Ce fichier
```

## ✨ Fonctionnalités principales

### Interface utilisateur
- 📱 **Navigation responsive** - Menu adapté mobile/desktop
- 🎨 **Design moderne** - Glassmorphism, gradients, animations fluides
- 🎭 **Animations** - fadeInUp, slideInLeft, pulse-glow, float, flip
- 📊 **Système d'onglets** - Filtrage formations (Étudiants/Pro/Executive)
- 📸 **Galerie d'images** - Lightbox avec images locales
- 🔝 **Bouton retour** - Automatique après 300px de scroll

### Contenu et sections
- **En-tête** - Navigation sticky avec logo
- **Hero** - Section d'accueil avec CTA
- **Galerie** - 4 images avec modal
- **Arguments** - 3 piliers de valeur
- **Formations** - 3 onglets avec 6 packages:
  - Étudiants: Pack Découverte, Pack Accélération
  - Professionnels: Pack Flexibility, Pack Intensif
  - Cadres/Executive: Pack Executive, Pack VIP
- **Entreprises** - 3 packages B2B (Starter, Pro, VIP)
- **Témoignages** - Citations + statistiques
- **Ressources** - Documents et PDF
- **Contact** - Informations
- **Footer** - Liens et crédits

### Formulaires
- ✅ Modal diagnostic avec validation
- ✅ Validation email
- ✅ Message de succès  

## Comment utiliser

1. **Ouvrir le site** : Ouvrir `index.html` dans un navigateur
2. **Développement** : Modifier `css/styles.css` ou `js/script.js` selon vos besoins
3. **Ajouter des assets** : Placer vos images/fichiers dans le dossier `assets/`

## 🎯 Stack technique

- **HTML5** - Structure sémantique
- **Tailwind CSS** - Framework utility-first (CDN)
- **JavaScript Vanilla** - Zéro dépendance
- **Images locales** - Assets dans `assets/images/`

## Fichiers CSS personnalisés

Les styles Tailwind CSS sont importés via CDN. Les styles personnalisés dans `css/styles.css`.

## Fichiers JavaScript

Toutes les fonctions interactives sont dans `js/script.js` :
- `toggleMenu()` - Menu mobile
- `openModal()` / `closeModal()` - Formulaire diagnostic
- `switchTab(tab)` - Onglets des formations
- `openImageModal(imgSrc)` - Galerie d'images
- Événements et listeners

## Notes importantes

- Les liens des images pointent vers AWS S3 (URLs externes)
- Tailwind CSS est chargé via CDN
- Tous les liens relatifs pour CSS et JS fonctionnent correctement
- Le fichier `main.html` peut être supprimé (remplacé par `index.html`)

---

**Projet créé avec :** HTML5, Tailwind CSS, Vanilla JavaScript  
**Dernière mise à jour :** Décembre 2025
