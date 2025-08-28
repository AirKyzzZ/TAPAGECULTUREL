const fs = require('fs');
const path = require('path');

console.log('🔍 Vérification de la structure du projet Tapage Culturel...\n');

const requiredFiles = [
  'package.json',
  'next.config.js',
  'tailwind.config.js',
  'tsconfig.json',
  'netlify.toml',
  'README.md',
  'admin/README.md',
];

const requiredDirs = [
  'components',
  'pages',
  'data',
  'styles',
  'types',
  'utils',
  'public/assets/artists',
  'public/assets/events',
  'public/assets/gallery',
  'public/fonts',
  'public/rider',
];

const requiredDataFiles = [
  'data/site.json',
  'data/artists.json',
  'data/events.json',
  'data/gallery.json',
];

const requiredComponents = [
  'components/Navbar.tsx',
  'components/Hero.tsx',
  'components/EventCard.tsx',
  'components/ArtistCard.tsx',
  'components/Footer.tsx',
  'components/OGMeta.tsx',
];

const requiredPages = [
  'pages/index.tsx',
  'pages/_app.tsx',
  'pages/404.tsx',
  'pages/events/index.tsx',
  'pages/artists/index.tsx',
  'pages/gallery/index.tsx',
  'pages/rider/index.tsx',
  'pages/contact/index.tsx',
];

let allGood = true;

// Vérifier les fichiers requis
console.log('📁 Vérification des fichiers requis...');
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MANQUANT`);
    allGood = false;
  }
});

// Vérifier les dossiers requis
console.log('\n📂 Vérification des dossiers requis...');
requiredDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`✅ ${dir}/`);
  } else {
    console.log(`❌ ${dir}/ - MANQUANT`);
    allGood = false;
  }
});

// Vérifier les fichiers de données
console.log('\n📊 Vérification des fichiers de données...');
requiredDataFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MANQUANT`);
    allGood = false;
  }
});

// Vérifier les composants
console.log('\n🧩 Vérification des composants...');
requiredComponents.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MANQUANT`);
    allGood = false;
  }
});

// Vérifier les pages
console.log('\n📄 Vérification des pages...');
requiredPages.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MANQUANT`);
    allGood = false;
  }
});

// Vérifier les assets
console.log('\n🖼️ Vérification des assets...');
const assetsDirs = ['public/assets/artists', 'public/assets/events', 'public/assets/gallery'];
assetsDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
    if (files.length > 0) {
      console.log(`✅ ${dir}/ (${files.length} fichiers)`);
    } else {
      console.log(`⚠️ ${dir}/ (dossier vide - ajouter des images)`);
    }
  }
});

// Vérifier les polices
console.log('\n🔤 Vérification des polices...');
const fontsDir = 'public/fonts';
if (fs.existsSync(fontsDir)) {
  const fontFiles = fs.readdirSync(fontsDir).filter(f => f.endsWith('.woff2'));
  if (fontFiles.length > 0) {
    console.log(`✅ ${fontsDir}/ (${fontFiles.length} polices)`);
  } else {
    console.log(`⚠️ ${fontsDir}/ (dossier vide - ajouter les polices Aura et Alga)`);
  }
}

// Vérifier le rider
console.log('\n📋 Vérification du rider...');
const riderDir = 'public/rider';
if (fs.existsSync(riderDir)) {
  const riderFiles = fs.readdirSync(riderDir).filter(f => f.endsWith('.pdf'));
  if (riderFiles.length > 0) {
    console.log(`✅ ${riderDir}/ (${riderFiles.length} fichiers PDF)`);
  } else {
    console.log(`⚠️ ${riderDir}/ (dossier vide - ajouter Tapage_Rider.pdf)`);
  }
}

// Résumé
console.log('\n' + '='.repeat(50));
if (allGood) {
  console.log('🎉 Structure du projet OK ! Prêt pour le développement.');
  console.log('\n📝 Prochaines étapes :');
  console.log('1. npm install');
  console.log('2. npm run dev');
  console.log('3. Remplacer les images placeholder par vos vraies photos');
  console.log('4. Remplacer les polices par Aura et Alga');
  console.log('5. Tester le site en local');
} else {
  console.log('❌ Problèmes détectés dans la structure du projet.');
  console.log('Vérifiez les fichiers manquants avant de continuer.');
}
console.log('='.repeat(50));
