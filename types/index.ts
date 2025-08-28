export interface SiteData {
  name: string;
  title: string;
  description: string;
  instagram: string;
  contactEmail: string;
  hero: {
    headline: string;
    sub: string;
  };
}

export interface Artist {
  id: string;
  name: string;
  bio: string;
  genres: string[];
  photo: string;
  social: {
    instagram?: string;
    soundcloud?: string;
    youtube?: string;
  };
  mixUrl: string | null;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  venue: string;
  lineup: string[];
  cover: string;
  description: string;
  ticketUrl: string;
  instagramUrl: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  credit: string;
}

export interface MetaData {
  title: string;
  description: string;
  image?: string;
  url?: string;
}
