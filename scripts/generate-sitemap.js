const fs = require('fs');
const path = require('path');

// Charger les données
const events = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data/events.json'), 'utf8'));
const artists = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data/artists.json'), 'utf8'));

// Pages statiques
const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/events/', priority: '0.8', changefreq: 'weekly' },
  { url: '/artists/', priority: '0.8', changefreq: 'monthly' },
  { url: '/gallery/', priority: '0.7', changefreq: 'weekly' },
  { url: '/rider/', priority: '0.6', changefreq: 'monthly' },
  { url: '/contact/', priority: '0.6', changefreq: 'monthly' },
];

// Générer les URLs des événements
const eventUrls = events.map(event => ({
  url: `/events/${event.id}/`,
  priority: '0.7',
  changefreq: 'monthly',
  lastmod: event.date
}));

// Générer les URLs des artistes
const artistUrls = artists.map(artist => ({
  url: `/artists/${artist.id}/`,
  priority: '0.7',
  changefreq: 'monthly'
}));

// Combiner toutes les URLs
const allUrls = [...staticPages, ...eventUrls, ...artistUrls];

// Générer le XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(page => `  <url>
    <loc>https://tapage.example.com${page.url}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Écrire le fichier
fs.writeFileSync(path.join(process.cwd(), 'public/sitemap.xml'), sitemap);

console.log('Sitemap généré avec succès !');
console.log(`- ${staticPages.length} pages statiques`);
console.log(`- ${eventUrls.length} pages d'événements`);
console.log(`- ${artistUrls.length} pages d'artistes`);
console.log(`- Total: ${allUrls.length} URLs`);
