export const developmentConfig = {
  siteUrl: 'http://localhost:3000',
  apiUrl: 'http://localhost:3000/api',
  environment: 'development',
  
  // Configuration des polices
  fonts: {
    aura: '/fonts/Aura-Regular.woff2',
    alga: '/fonts/Alga-Regular.woff2',
  },
  
  // Configuration des images
  images: {
    baseUrl: 'http://localhost:3000',
    formats: ['jpg', 'png', 'webp'],
    sizes: [400, 800, 1200],
  },
  
  // Configuration SEO
  seo: {
    defaultTitle: 'Tapage Culturel — Événements & DJs • Bordeaux',
    defaultDescription: 'Collectif musical bordelais — soirées électroniques, éclectiques & visuelles.',
    siteName: 'Tapage Culturel',
    twitterHandle: '@tapage',
  },
  
  // Configuration des formulaires
  forms: {
    contact: {
      enabled: true,
      netlifyForms: true,
      fallbackEmail: 'tapagebordeaux@gmail.com',
    },
  },
};
