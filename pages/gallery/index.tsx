'use client';

import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useState, useMemo } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { loadSiteData, loadGallery } from '../../utils/dataLoader';
import { SiteData, GalleryItem } from '../../types';

interface GalleryProps {
  siteData: SiteData;
  gallery: GalleryItem[];
}

export default function Gallery({ siteData, gallery }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGallery = useMemo(() => {
    if (!searchTerm) return gallery;
    
    return gallery.filter(item =>
      item.caption.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.credit.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [gallery, searchTerm]);

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = filteredGallery.findIndex(item => item.id === selectedImage.id);
    let newIndex: number;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredGallery.length - 1;
    } else {
      newIndex = currentIndex < filteredGallery.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredGallery[newIndex]);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!selectedImage) return;
    
    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        navigateImage('prev');
        break;
      case 'ArrowRight':
        navigateImage('next');
        break;
    }
  };

  return (
    <>
      <Head>
        <title>Galerie — Tapage Culturel</title>
        <meta name="description" content="Découvrez nos meilleurs moments en photos. Événements, performances et ambiance de nos soirées électroniques à Bordeaux." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar events={[]} />
      
      <main className="pt-16">
        {/* Header */}
        <section className="py-20 bg-tapage-cod">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-aura text-tapage-periglacial text-center mb-6">
              Galerie
            </h1>
            <p className="text-xl text-tapage-stack text-center max-w-2xl mx-auto">
              Revivez nos meilleurs moments en photos
            </p>
          </div>
        </section>

        {/* Search */}
        <section className="py-8 bg-tapage-tuatara">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <input
                type="text"
                placeholder="Rechercher par événement ou photographe..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full max-w-md px-4 py-2 bg-tapage-mineshaft border border-tapage-fuscous rounded-md text-tapage-periglacial placeholder-tapage-bitter focus:outline-none focus:ring-2 focus:ring-tapage-periglacial"
              />
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-tapage-cod">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredGallery.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredGallery.map((item) => (
                  <div
                    key={item.id}
                    className="group cursor-pointer"
                    onClick={() => openLightbox(item)}
                  >
                    <div className="aspect-square overflow-hidden rounded-lg bg-tapage-tuatara">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-tapage-cod/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="mt-3 text-center">
                      <p className="text-tapage-periglacial text-sm font-medium">
                        {item.caption}
                      </p>
                      <p className="text-tapage-bitter text-xs">
                        {item.credit}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-tapage-stack text-lg">
                  Aucune image trouvée avec ces critères.
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-4 text-tapage-periglacial hover:text-white transition-colors"
                >
                  Réinitialiser la recherche
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-tapage-cod/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-tapage-periglacial hover:text-white transition-colors"
              aria-label="Fermer"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-tapage-periglacial hover:text-white transition-colors"
              aria-label="Image précédente"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-tapage-periglacial hover:text-white transition-colors"
              aria-label="Image suivante"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Caption */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-tapage-periglacial text-lg font-medium mb-2">
                {selectedImage.caption}
              </p>
              <p className="text-tapage-bitter text-sm">
                {selectedImage.credit}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer siteData={siteData} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const [siteData, gallery] = await Promise.all([
    loadSiteData(),
    loadGallery(),
  ]);

  return {
    props: {
      siteData,
      gallery,
    },
  };
};
