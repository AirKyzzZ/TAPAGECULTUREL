# Guide de Déploiement - Tapage Culturel

## 🚀 Déploiement sur Netlify

Ce guide vous explique comment déployer le site Tapage Culturel sur Netlify.

### Prérequis

- Compte GitHub/GitLab/Bitbucket
- Compte Netlify
- Node.js 18+ installé localement

### 1. Préparation du Projet

#### Installation des dépendances
```bash
npm install
```

#### Vérification de la structure
```bash
npm run check-structure
```

#### Test local
```bash
npm run dev
```
Ouvrez http://localhost:3000 pour vérifier que tout fonctionne.

#### Build de test
```bash
npm run build:full
```
Cette commande exécute :
- `next build` - Build Next.js
- `next export` - Export statique
- `generate-sitemap` - Génération du sitemap

### 2. Déploiement sur Netlify

#### Option A : Déploiement automatique (Recommandé)

1. **Poussez votre code sur GitHub/GitLab/Bitbucket**

2. **Connectez-vous à Netlify**
   - Allez sur [netlify.com](https://netlify.com)
   - Cliquez sur "New site from Git"

3. **Sélectionnez votre repository**
   - Choisissez votre provider (GitHub, GitLab, Bitbucket)
   - Sélectionnez le repository `tapage-culturel`

4. **Configuration du build**
   - **Build command** : `npm run build:full`
   - **Publish directory** : `out`
   - **Node version** : `18` (ou plus récent)

5. **Variables d'environnement** (optionnel)
   ```
   NODE_VERSION=18
   NPM_FLAGS=--legacy-peer-deps
   ```

6. **Cliquez sur "Deploy site"**

#### Option B : Déploiement manuel

1. **Build local**
   ```bash
   npm run build:full
   ```

2. **Upload du dossier `out/`**
   - Allez sur Netlify
   - Cliquez sur "New site from Git" → "Deploy manually"
   - Glissez-déposez le dossier `out/` complet

### 3. Configuration Post-Déploiement

#### Domain personnalisé
1. Dans les paramètres de votre site Netlify
2. Allez dans "Domain management"
3. Ajoutez votre domaine personnalisé
4. Configurez les DNS selon les instructions Netlify

#### Formulaires
Le formulaire de contact utilise Netlify Forms. Vérifiez que les soumissions arrivent dans l'onglet "Forms" de votre dashboard Netlify.

#### Redirections
Le fichier `netlify.toml` configure déjà les redirections nécessaires pour le SPA.

### 4. Mise à Jour du Site

#### Déploiement automatique
À chaque push sur la branche principale, Netlify redéploiera automatiquement.

#### Déploiement manuel
```bash
git add .
git commit -m "Mise à jour du site"
git push origin main
```

### 5. Vérifications Post-Déploiement

#### ✅ Checklist de vérification
- [ ] Site accessible sur l'URL Netlify
- [ ] Toutes les pages se chargent correctement
- [ ] Images et assets s'affichent
- [ ] Formulaire de contact fonctionne
- [ ] Navigation mobile fonctionne
- [ ] Sitemap accessible sur `/sitemap.xml`
- [ ] Robots.txt accessible sur `/robots.txt`

#### 🔍 Tests de performance
- [ ] PageSpeed Insights
- [ ] Lighthouse
- [ ] GTmetrix

### 6. Résolution des Problèmes

#### Erreur "ISR cannot be used with output: export"
- ✅ **Résolu** : Suppression de `revalidate` dans tous les `getStaticProps`

#### Images qui ne s'affichent pas
- Vérifiez que les images sont dans `/public/assets/`
- Utilisez des chemins relatifs commençant par `/`
- Vérifiez les formats supportés (WebP recommandé)

#### Build qui échoue
- Vérifiez la version de Node.js (18+)
- Exécutez `npm run type-check` pour vérifier TypeScript
- Vérifiez les erreurs dans les logs Netlify

### 7. Optimisations Recommandées

#### Images
- Convertissez en WebP pour de meilleures performances
- Optimisez la taille des images
- Utilisez des dimensions appropriées

#### Performance
- Vérifiez le bundle size avec `npm run build`
- Optimisez les composants lourds
- Utilisez la lazy loading des images

### 8. Maintenance

#### Mise à jour des dépendances
```bash
npm update
npm audit fix
```

#### Vérification de la structure
```bash
npm run check-structure
```

#### Génération du sitemap
```bash
npm run generate-sitemap
```

### 9. Support

Pour toute question ou problème :
- Consultez la [documentation Next.js](https://nextjs.org/docs)
- Consultez la [documentation Netlify](https://docs.netlify.com)
- Vérifiez les logs de build dans votre dashboard Netlify

---

**🎉 Félicitations !** Votre site Tapage Culturel est maintenant déployé et accessible en ligne.
