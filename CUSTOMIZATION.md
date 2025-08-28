# 🎨 Guide de Personnalisation - Tapage Culturel

Ce guide vous explique comment personnaliser le site Tapage Culturel selon vos besoins.

## 🖼️ Remplacement des Images

### 1. Images des Artistes
**Dossier** : `public/assets/artists/`

**Recommandations** :
- **Format** : JPG ou WebP
- **Taille** : 1200x1200px minimum
- **Aspect** : Carré (1:1)
- **Qualité** : 85-90%
- **Noms** : Utilisez des noms descriptifs (ex: `romywhite-1200.jpg`)

**Étapes** :
1. Remplacez les fichiers placeholder
2. Mettez à jour `data/artists.json` avec les bons chemins
3. Vérifiez que les images s'affichent correctement

### 2. Images des Événements
**Dossier** : `public/assets/events/`

**Recommandations** :
- **Format** : JPG ou WebP
- **Taille** : 1200x800px minimum
- **Aspect** : Paysage (3:2)
- **Qualité** : 85-90%
- **Style** : Covers d'événements, flyers, etc.

### 3. Images de la Galerie
**Dossier** : `public/assets/gallery/`

**Recommandations** :
- **Format** : JPG ou WebP
- **Taille** : 1200x1200px minimum
- **Aspect** : Carré recommandé
- **Qualité** : 85-90%
- **Contenu** : Photos d'événements, ambiance, performances

### 4. Logo et Branding
**Dossier** : `public/assets/logo/`

**Recommandations** :
- **Format** : SVG (vectoriel) ou PNG haute résolution
- **Taille** : 200x200px minimum
- **Fond** : Transparent ou adapté au thème
- **Variantes** : Logo clair et sombre si nécessaire

## 🔤 Personnalisation des Polices

### 1. Aura Regular (Titres)
**Fichier** : `public/fonts/Aura-Regular.ttf`

**Utilisation** : Titres principaux, headings, navigation
**Fallback** : serif (Times New Roman, Georgia)

**Mise à jour** :
1. Remplacez `Aura-Regular.ttf` par votre police
2. Vérifiez que le nom de la police correspond dans `styles/globals.css`
3. Testez l'affichage sur différents navigateurs

### 2. Alga Regular (Artistes)
**Fichier** : `public/fonts/Alga-Regular.woff2`

**Utilisation** : Noms d'artistes, textes secondaires
**Fallback** : sans-serif (Arial, Helvetica)

**Mise à jour** :
1. Remplacez `Alga-Regular.woff2` par votre police
2. Vérifiez que le nom de la police correspond dans `styles/globals.css`
3. Testez l'affichage sur différents navigateurs

### 3. Police de Corps (Inter)
**Fallback** : Inter, system-ui, -apple-system, Segoe UI, Roboto

**Personnalisation** :
1. Modifiez `tailwind.config.js` dans la section `fontFamily.sans`
2. Ajoutez votre police personnalisée
3. Mettez à jour `styles/globals.css` si nécessaire

## 🎨 Personnalisation des Couleurs

### 1. Palette Principale
**Fichier** : `tailwind.config.js`

**Couleurs actuelles** :
```javascript
colors: {
  'tapage-periglacial': '#e3eadb',  // Vert clair
  'tapage-cod': '#060606',          // Noir profond
  'tapage-bitter': '#7f8078',       // Gris verdâtre
  'tapage-storm': '#5d5e59',        // Gris foncé
  'tapage-fuscous': '#444442',      // Gris moyen
  'tapage-tuatara': '#2f2f2c',      // Gris très foncé
  'tapage-xanadu': '#747674',       // Gris clair
  'tapage-stack': '#848c83',        // Gris vert
  'tapage-mineshaft': '#3c3c3c',    // Gris charbon
  'tapage-tuatara-dark': '#242421', // Noir absolu
}
```

**Personnalisation** :
1. Modifiez les valeurs hexadécimales
2. Gardez les noms des classes Tailwind
3. Testez les contrastes pour l'accessibilité
4. Vérifiez la cohérence visuelle

### 2. Couleurs d'Accent
**Ajout de nouvelles couleurs** :
```javascript
colors: {
  // ... couleurs existantes
  'tapage-accent': '#ff6b6b',       // Rouge accent
  'tapage-highlight': '#4ecdc4',    // Turquoise highlight
}
```

## 📝 Personnalisation du Contenu

### 1. Informations du Site
**Fichier** : `data/site.json`

**Éléments personnalisables** :
- Titre du site
- Description
- Email de contact
- Liens Instagram
- Texte du hero
- Section "À propos"

### 2. Événements
**Fichier** : `data/events.json`

**Structure d'un événement** :
```json
{
  "id": "unique-id",
  "title": "Nom de l'événement",
  "date": "2025-01-15",
  "venue": "Lieu de l'événement",
  "description": "Description détaillée...",
  "lineup": ["Artiste 1", "Artiste 2"],
  "cover": "/assets/events/event-cover.jpg",
  "ticketUrl": "https://...",
  "instagramUrl": "https://..."
}
```

### 3. Artistes
**Fichier** : `data/artists.json`

**Structure d'un artiste** :
```json
{
  "id": "unique-id",
  "name": "Nom de l'artiste",
  "bio": "Biographie détaillée...",
  "genres": ["Techno", "House"],
  "photo": "/assets/artists/artist-photo.jpg",
  "social": {
    "instagram": "https://..."
  },
  "mixUrl": "https://..."
}
```

### 4. Galerie
**Fichier** : `data/gallery.json`

**Structure d'une image** :
```json
{
  "id": "unique-id",
  "src": "/assets/gallery/image.jpg",
  "alt": "Description de l'image",
  "caption": "Titre de l'image",
  "credit": "© Photographe"
}
```

## 🏗️ Personnalisation du Layout

### 1. Composants
**Dossier** : `components/`

**Composants principaux** :
- `Navbar.tsx` : Navigation et menu
- `Hero.tsx` : Section hero de la page d'accueil
- `EventCard.tsx` : Carte d'événement
- `ArtistCard.tsx` : Carte d'artiste
- `Footer.tsx` : Pied de page

**Personnalisation** :
1. Modifiez le JSX et les styles
2. Gardez la structure des props
3. Testez la responsivité
4. Vérifiez l'accessibilité

### 2. Pages
**Dossier** : `pages/`

**Pages principales** :
- `index.tsx` : Page d'accueil
- `events/index.tsx` : Liste des événements
- `artists/index.tsx` : Liste des artistes
- `gallery/index.tsx` : Galerie photos

**Personnalisation** :
1. Modifiez le contenu et la structure
2. Gardez les `getStaticProps` pour le SSG
3. Testez la génération statique
4. Vérifiez le SEO

## 🎭 Personnalisation du Style

### 1. Animations CSS
**Fichier** : `tailwind.config.js`

**Animations disponibles** :
```javascript
animation: {
  'fade-in': 'fadeIn 0.6s ease-in-out',
  'slide-up': 'slideUp 0.8s ease-out',
  'scale-in': 'scaleIn 0.4s ease-out',
}
```

**Ajout d'animations** :
```javascript
animation: {
  // ... animations existantes
  'bounce-in': 'bounceIn 0.8s ease-out',
}
```

### 2. Transitions
**Classes Tailwind disponibles** :
- `transition-colors` : Transitions de couleurs
- `transition-transform` : Transitions de transformation
- `transition-opacity` : Transitions d'opacité
- `duration-300` : Durée de 300ms
- `ease-in-out` : Courbe d'accélération

### 3. Effets de Hover
**Exemples d'effets** :
```jsx
className="hover:scale-110 hover:shadow-lg transition-all duration-300"
```

## 📱 Personnalisation Responsive

### 1. Breakpoints Tailwind
**Breakpoints par défaut** :
- `sm:` : 640px+
- `md:` : 768px+
- `lg:` : 1024px+
- `xl:` : 1280px+
- `2xl:` : 1536px+

### 2. Grilles Responsives
**Exemples de grilles** :
```jsx
// 1 colonne sur mobile, 2 sur tablette, 3 sur desktop
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// 1 colonne sur mobile, 4 sur desktop
className="grid grid-cols-1 lg:grid-cols-4"
```

### 3. Navigation Mobile
**Personnalisation** :
- Modifiez `components/Navbar.tsx`
- Ajustez le menu mobile
- Testez sur différents appareils

## 🔍 Personnalisation SEO

### 1. Meta Tags
**Composant** : `components/OGMeta.tsx`

**Personnalisation** :
- Modifiez les balises Open Graph
- Ajustez les Twitter Cards
- Personnalisez les descriptions

### 2. Sitemap
**Fichier** : `scripts/generate-sitemap.js`

**Personnalisation** :
- Ajoutez de nouvelles pages
- Modifiez les priorités
- Ajustez les changements de fréquence

### 3. Robots.txt
**Fichier** : `public/robots.txt`

**Personnalisation** :
- Ajoutez des règles spécifiques
- Bloquez certains dossiers si nécessaire

## 🚀 Personnalisation du Déploiement

### 1. Configuration Netlify
**Fichier** : `netlify.toml`

**Personnalisation** :
- Modifiez la commande de build
- Ajustez les redirections
- Changez la version de Node.js

### 2. Variables d'Environnement
**Fichier** : `.env.local` (créer)

**Variables disponibles** :
```bash
NEXT_PUBLIC_SITE_URL=https://votre-site.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@votre-site.com
```

### 3. Scripts de Build
**Fichier** : `package.json`

**Scripts disponibles** :
- `build:full` : Build complet avec export et sitemap
- `check-structure` : Vérification de la structure
- `generate-sitemap` : Génération du sitemap

## 🧪 Tests et Validation

### 1. Vérification TypeScript
```bash
npm run type-check
```

### 2. Linting
```bash
npm run lint
```

### 3. Vérification de la Structure
```bash
npm run check-structure
```

### 4. Tests de Build
```bash
npm run build
npm run export
```

## 📋 Checklist de Personnalisation

### ✅ Images
- [ ] Images des artistes remplacées
- [ ] Images des événements remplacées
- [ ] Images de la galerie remplacées
- [ ] Logo personnalisé ajouté

### ✅ Polices
- [ ] Aura Regular remplacée
- [ ] Alga Regular remplacée
- [ ] Polices testées sur différents navigateurs

### ✅ Couleurs
- [ ] Palette personnalisée définie
- [ ] Contrastes vérifiés
- [ ] Cohérence visuelle validée

### ✅ Contenu
- [ ] Informations du site mises à jour
- [ ] Événements personnalisés
- [ ] Artistes ajoutés
- [ ] Galerie personnalisée

### ✅ Layout
- [ ] Composants adaptés
- [ ] Pages personnalisées
- [ ] Responsive testé
- [ ] Accessibilité vérifiée

### ✅ Déploiement
- [ ] Build testé localement
- [ ] Export statique validé
- [ ] Déploiement sur Netlify
- [ ] Tests en production

## 🆘 Support et Aide

### Ressources
- **Documentation Next.js** : https://nextjs.org/docs
- **Documentation Tailwind** : https://tailwindcss.com/docs
- **Documentation Netlify** : https://docs.netlify.com

### Problèmes Courants
1. **Images qui ne s'affichent pas** : Vérifiez les chemins et permissions
2. **Polices non chargées** : Vérifiez les noms de fichiers
3. **Build qui échoue** : Vérifiez TypeScript et ESLint
4. **Styles qui ne s'appliquent pas** : Vérifiez Tailwind et CSS

---

**🎨 Votre site Tapage Culturel est maintenant personnalisé et prêt pour la production !**
