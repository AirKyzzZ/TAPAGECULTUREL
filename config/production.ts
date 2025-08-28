export const productionConfig = {
  siteUrl: 'https://tapage.example.com', // À remplacer par votre URL
  apiUrl: 'https://tapage.example.com/api',
  environment: 'production',
  
  // Configuration des polices
  fonts: {
    aura: '/fonts/Aura-Regular.woff2',
    alga: '/fonts/Alga-Regular.woff2',
  },
  
  // Configuration des images
  images: {
    baseUrl: 'https://tapage.example.com',
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
      fallbackEmail: 'contact@tapage.example',
    },
  },
  
  // Configuration analytics (optionnel)
  analytics: {
    googleAnalytics: '', // GA4 ID
    googleTagManager: '', // GTM ID
  },
};
