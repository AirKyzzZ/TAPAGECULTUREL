# Guide d'Administration — Tapage Culturel

Guide complet pour la mise à jour du contenu du site web Tapage Culturel.

## 📋 Table des Matières

1. [Structure des Données](#structure-des-données)
2. [Ajouter un Événement](#ajouter-un-événement)
3. [Ajouter un DJ](#ajouter-un-dj)
4. [Modifier la Galerie](#modifier-la-galerie)
5. [Mise à Jour des Images](#mise-à-jour-des-images)
6. [Déploiement](#déploiement)
7. [Dépannage](#dépannage)

## 📊 Structure des Données

### Fichiers de Données

- `data/site.json` : Informations générales du site
- `data/events.json` : Liste des événements
- `data/artists.json` : Liste des DJs
- `data/gallery.json` : Photos de la galerie

### Structure des Assets

```
public/assets/
├── artists/           # Photos des DJs (1200px recommandé)
├── events/           # Covers des événements (1200px recommandé)
├── gallery/          # Photos de la galerie (1200px recommandé)
├── fonts/            # Polices personnalisées
└── rider/            # PDF du rider technique
```

## 🎉 Ajouter un Événement

### 1. Préparer l'Image

- **Format** : JPG recommandé
- **Taille** : 1200x800px minimum
- **Nom** : `nom-evenement-1200.jpg`
- **Placement** : `public/assets/events/`

### 2. Modifier `data/events.json`

```json
{
  "id": "nom-evenement-2024-12-25",
  "title": "NOM DE L'ÉVÉNEMENT",
  "date": "2024-12-25",
  "venue": "Lieu, Ville",
  "lineup": ["DJ 1", "DJ 2"],
  "cover": "/assets/events/nom-evenement-1200.jpg",
  "description": "Description complète de l'événement...",
  "ticketUrl": "https://lien-billetterie.com",
  "instagramUrl": "https://instagram.com/p/..."
}
```

### 3. Champs Obligatoires

- **id** : Unique, format `nom-evenement-YYYY-MM-DD`
- **title** : Titre de l'événement
- **date** : Format ISO `YYYY-MM-DD`
- **venue** : Lieu et ville
- **cover** : Chemin vers l'image
- **ticketUrl** : Lien vers la billetterie
- **instagramUrl** : Lien vers le post Instagram

### 4. Champs Optionnels

- **lineup** : Array des noms des DJs
- **description** : Description détaillée

## 🎵 Ajouter un DJ

### 1. Préparer la Photo

- **Format** : JPG recommandé
- **Taille** : 1200x1200px (carré)
- **Nom** : `nomdj-1200.jpg`
- **Placement** : `public/assets/artists/`

### 2. Modifier `data/artists.json`

```json
{
  "id": "nomdj",
  "name": "Nom du DJ",
  "bio": "Biographie complète du DJ...",
  "genres": ["Genre 1", "Genre 2"],
  "photo": "/assets/artists/nomdj-1200.jpg",
  "social": {
    "instagram": "https://instagram.com/nomdj"
  },
  "mixUrl": null
}
```

### 3. Champs Obligatoires

- **id** : Unique, en minuscules, sans espaces
- **name** : Nom d'artiste
- **bio** : Biographie complète
- **genres** : Array des genres musicaux
- **photo** : Chemin vers la photo

### 4. Champs Optionnels

- **social.instagram** : Lien Instagram
- **social.soundcloud** : Lien SoundCloud
- **social.youtube** : Lien YouTube
- **mixUrl** : Lien vers un mix récent

## 📸 Modifier la Galerie

### 1. Préparer les Images

- **Format** : JPG recommandé
- **Taille** : 1200x1200px (carré)
- **Nom** : `description-1200.jpg`
- **Placement** : `public/assets/gallery/`

### 2. Modifier `data/gallery.json`

```json
{
  "id": "g4",
  "src": "/assets/gallery/description-1200.jpg",
  "alt": "Description de l'image pour l'accessibilité",
  "caption": "Titre de l'image - Date/Événement",
  "credit": "Photographe: [Nom du photographe]"
}
```

### 3. Champs Obligatoires

- **id** : Unique, format `g1`, `g2`, etc.
- **src** : Chemin vers l'image
- **alt** : Description pour lecteurs d'écran
- **caption** : Légende de l'image
- **credit** : Crédit photographe

## 🖼️ Mise à Jour des Images

### Tailles Recommandées

- **1200px** : Images principales (hero, covers)
- **800px** : Images de grille
- **400px** : Thumbnails

### Formats Supportés

- **JPG** : Photos et images complexes
- **PNG** : Logos et images avec transparence
- **WebP** : Recommandé pour production

### Optimisation

1. **Compression** : 80-85% qualité
2. **Redimensionnement** : Respecter les ratios
3. **Nommage** : Descriptif et cohérent

### Exemple de Nommage

```
romywhite-1200.jpg          # Photo principale
romywhite-800.jpg           # Version grille
romywhite-400.jpg           # Thumbnail
```

## 🚀 Déploiement

### 1. Build Local

```bash
# Installer les dépendances (si pas fait)
npm install

# Build de production
npm run build

# Export statique
npm run export
```

### 2. Vérification

- Le dossier `out/` est créé
- Contient tous les fichiers HTML/CSS/JS
- Images et assets sont présents

### 3. Déploiement Netlify

#### Méthode Auto (Recommandée)

1. **Push** sur le repo Git
2. **Netlify** rebuild automatiquement
3. **Vérifier** le déploiement

#### Méthode Manuelle

1. **Uploader** le dossier `out/` sur Netlify
2. **Vérifier** que le site fonctionne
3. **Tester** les nouvelles fonctionnalités

### 4. Post-Déploiement

- [ ] Vérifier l'accueil
- [ ] Tester les nouvelles pages
- [ ] Vérifier les images
- [ ] Tester les formulaires
- [ ] Vérifier la responsivité

## 🔧 Dépannage

### Erreur de Build

```bash
# Nettoyer le cache
rm -rf .next out node_modules
npm install
npm run build
```

### Images qui ne s'affichent pas

- ✅ Vérifier les chemins dans les JSON
- ✅ S'assurer que les images existent
- ✅ Vérifier les permissions
- ✅ Tester en local d'abord

### Problème de Déploiement

- ✅ Vérifier la commande de build
- ✅ Vérifier le dossier de publication
- ✅ Consulter les logs Netlify
- ✅ Vérifier les variables d'environnement

### Problème de Polices

- ✅ Vérifier les fichiers `.woff2`
- ✅ Vérifier la syntaxe `@font-face`
- ✅ Tester sur différents navigateurs

## 📱 Test et Validation

### Tests Obligatoires

- [ ] **Accueil** : Hero, sections, navigation
- [ ] **Événements** : Liste, filtres, pages individuelles
- [ ] **DJs** : Grille, pages individuelles, filtres
- [ ] **Galerie** : Grille, lightbox, recherche
- [ ] **Contact** : Formulaire, validation
- [ ] **Responsive** : Mobile, tablette, desktop

### Navigateurs à Tester

- Chrome (dernière version)
- Firefox (dernière version)
- Safari (dernière version)
- Edge (dernière version)

### Tests d'Accessibilité

- [ ] Navigation clavier
- [ ] Lecteurs d'écran
- [ ] Contrastes
- [ ] Alt text des images

## 📞 Support et Contact

### En Cas de Problème

1. **Vérifier** ce guide
2. **Consulter** le README principal
3. **Vérifier** la documentation Next.js
4. **Contacter** l'équipe technique

### Ressources Utiles

- [Documentation Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Netlify Docs](https://docs.netlify.com)

---

**Note** : Ce guide est destiné aux administrateurs du site Tapage Culturel. 
Pour toute question technique, consulter d'abord ce document.
