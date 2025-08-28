# 🎵 Tapage Culturel - Site Web

Site web officiel de **Tapage Culturel**, collectif organisateur d'événements électroniques et éclectiques à Bordeaux.

## 🚀 Technologies

- **Framework** : Next.js 14 (React 18)
- **Styling** : Tailwind CSS
- **Language** : TypeScript
- **Export** : Static HTML (prêt pour Netlify)
- **Design** : New Wave / Électro / Abstrait

## 📁 Structure du Projet

```
TAPAGECULTUREL/
├── components/          # Composants React réutilisables
├── pages/              # Pages Next.js (SSG)
├── data/               # Données JSON (événements, artistes, etc.)
├── utils/              # Utilitaires (DateHelper, dataLoader)
├── types/              # Types TypeScript
├── styles/             # CSS global et Tailwind
├── public/             # Assets statiques
│   ├── assets/         # Images, logos, etc.
│   ├── fonts/          # Polices personnalisées
│   └── rider/          # Documents techniques
├── scripts/            # Scripts utilitaires
└── configs/            # Configurations d'environnement
```

## 🎨 Design & Identité

### Palette de Couleurs
- **tapage-periglacial** : `#e3eadb` (Vert clair)
- **tapage-cod** : `#060606` (Noir profond)
- **tapage-bitter** : `#7f8078` (Gris verdâtre)
- **tapage-storm** : `#5d5e59` (Gris foncé)
- **tapage-fuscous** : `#444442` (Gris moyen)
- **tapage-tuatara** : `#2f2f2c` (Gris très foncé)

### Typographie
- **Aura Regular** : Titres principaux (TTF)
- **Alga Regular** : Noms d'artistes (WOFF2)
- **Inter** : Corps de texte (fallback)

## 🚀 Installation & Démarrage

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone [votre-repo]
cd TAPAGECULTUREL

# Installer les dépendances
npm install

# Vérifier la structure
npm run check-structure

# Lancer en développement
npm run dev
```

### Scripts Disponibles
```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run export       # Export statique
npm run build:full   # Build + Export + Sitemap
npm run type-check   # Vérification TypeScript
npm run lint         # Linting ESLint
```

## 📱 Pages Disponibles

- **Accueil** (`/`) : Hero, À propos, Prochains événements, DJs, Mini galerie
- **Événements** (`/events`) : Liste des événements avec filtres
- **Événement** (`/events/[id]`) : Page détaillée d'un événement
- **Artistes** (`/artists`) : Liste des DJs avec recherche
- **Artiste** (`/artists/[id]`) : Profil détaillé d'un artiste
- **Galerie** (`/gallery`) : Photos avec lightbox accessible
- **Rider** (`/rider`) : Spécifications techniques et hospitality
- **Contact** (`/contact`) : Formulaire de contact Netlify Forms
- **404** : Page d'erreur personnalisée

## 🎯 Fonctionnalités

### ✅ Implémentées
- **SSG** : Génération statique de toutes les pages
- **Responsive** : Design mobile-first
- **Accessibilité** : Navigation clavier, ARIA, contrastes
- **SEO** : Meta tags dynamiques, Open Graph, Twitter Cards
- **Performance** : Lazy loading, images optimisées
- **Filtres** : Recherche et tri des événements/artistes
- **Lightbox** : Galerie avec navigation clavier
- **Formulaires** : Contact compatible Netlify Forms

### 🔄 À Personnaliser
- **Images** : Remplacer les placeholders dans `/public/assets/`
- **Polices** : Ajouter `Aura-Regular.ttf` et `Alga-Regular.woff2`
- **Contenu** : Modifier les données dans `/data/`
- **Logo** : Remplacer le placeholder dans `/public/assets/logo/`

## 🌐 Déploiement

### Netlify (Recommandé)
1. Pousser le code sur GitHub/GitLab/Bitbucket
2. Connecter le repository à Netlify
3. Build command : `npm run build:full`
4. Publish directory : `out`

### Autres Plateformes
- **Vercel** : Compatible Next.js
- **GitHub Pages** : Via `next export`
- **Serveur statique** : Dossier `out/` généré

## 📊 Données

### Structure des Fichiers JSON
- **`site.json`** : Informations générales du site
- **`events.json`** : Événements avec dates, lieux, lineups
- **`artists.json`** : DJs avec bios, genres, réseaux sociaux
- **`gallery.json`** : Photos avec crédits et descriptions

### Mise à Jour du Contenu
1. Modifier les fichiers JSON dans `/data/`
2. Rebuilder le site : `npm run build:full`
3. Redéployer automatiquement (Netlify) ou manuellement

## 🎨 Personnalisation

### Couleurs
Modifier `tailwind.config.js` pour changer la palette :
```javascript
colors: {
  'tapage-periglacial': '#e3eadb',
  'tapage-cod': '#060606',
  // ... autres couleurs
}
```

### Polices
Ajouter vos polices dans `/public/fonts/` et mettre à jour `styles/globals.css`

### Layout
Modifier les composants dans `/components/` pour changer la structure

## 🔧 Configuration

### Variables d'Environnement
Créer `.env.local` (optionnel) :
```bash
NEXT_PUBLIC_SITE_URL=https://votre-site.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@votre-site.com
```

### Tailwind CSS
Configuration dans `tailwind.config.js` avec :
- Palette de couleurs personnalisée
- Polices personnalisées
- Animations CSS personnalisées

## 📈 Performance

### Optimisations Incluses
- **Images** : Lazy loading, formats WebP recommandés
- **Code splitting** : Next.js automatique
- **CSS** : Tailwind purgé en production
- **Bundle** : Optimisé pour la production

### Métriques Recommandées
- **Lighthouse** : 90+ sur tous les critères
- **PageSpeed** : 90+ mobile et desktop
- **Core Web Vitals** : Respect des standards

## 🐛 Résolution de Problèmes

### Erreurs Communes
- **ISR + Export** : ✅ Résolu (suppression de `revalidate`)
- **Images manquantes** : Vérifier les chemins dans `/public/assets/`
- **Polices non chargées** : Vérifier les fichiers dans `/public/fonts/`

### Debug
```bash
# Vérifier la structure
npm run check-structure

# Vérifier les types
npm run type-check

# Linting
npm run lint
```

## 📚 Documentation

- **Déploiement** : Voir `DEPLOYMENT.md`
- **Structure** : Voir `scripts/check-project-structure.js`
- **Configuration** : Voir `configs/`

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature
3. Commiter les changements
4. Pousser vers la branche
5. Créer une Pull Request

## 📄 Licence

Projet privé pour Tapage Culturel.

## 📞 Support

Pour toute question :
- Consulter la documentation
- Vérifier les issues GitHub
- Contacter l'équipe de développement

---

**🎉 Tapage Culturel** - Organisateur d'événements électroniques à Bordeaux
