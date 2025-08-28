import { SiteData, Artist, Event, GalleryItem } from '../types';

export async function loadSiteData(): Promise<SiteData> {
  const data = await import('../data/site.json');
  return data.default;
}

export async function loadArtists(): Promise<Artist[]> {
  const data = await import('../data/artists.json');
  return data.default;
}

export async function loadEvents(): Promise<Event[]> {
  const data = await import('../data/events.json');
  return data.default;
}

export async function loadGallery(): Promise<GalleryItem[]> {
  const data = await import('../data/gallery.json');
  return data.default;
}

export async function loadArtistById(id: string): Promise<Artist | null> {
  const artists = await loadArtists();
  return artists.find(artist => artist.id === id) || null;
}

export async function loadEventById(id: string): Promise<Event | null> {
  const events = await loadEvents();
  return events.find(event => event.id === id) || null;
}
