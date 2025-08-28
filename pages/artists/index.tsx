import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useState, useMemo } from 'react';
import Navbar from '../../components/Navbar';
import ArtistCard from '../../components/ArtistCard';
import Footer from '../../components/Footer';
import { loadSiteData, loadArtists } from '../../utils/dataLoader';
import { SiteData, Artist } from '../../types';

interface ArtistsProps {
  siteData: SiteData;
  artists: Artist[];
}

export default function Artists({ siteData, artists }: ArtistsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string>('');

  // Get unique genres
  const allGenres = useMemo(() => {
    const genres = new Set<string>();
    artists.forEach(artist => {
      artist.genres.forEach(genre => genres.add(genre));
    });
    return Array.from(genres).sort();
  }, [artists]);

  const filteredArtists = useMemo(() => {
    let filtered = artists;

    if (searchTerm) {
      filtered = filtered.filter(artist =>
        artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artist.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artist.genres.some(genre => genre.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedGenre) {
      filtered = filtered.filter(artist =>
        artist.genres.includes(selectedGenre)
      );
    }

    return filtered;
  }, [artists, searchTerm, selectedGenre]);

  return (
    <>
      <Head>
        <title>DJs — Tapage Culturel</title>
        <meta name="description" content="Découvrez nos DJs résidents et invités. Scène électronique bordelaise avec des artistes aux univers musicaux variés." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar events={[]} />
      
      <main className="pt-16">
        {/* Header */}
        <section className="py-20 bg-tapage-cod">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-aura text-tapage-periglacial text-center mb-6">
              Nos DJs
            </h1>
            <p className="text-xl text-tapage-stack text-center max-w-2xl mx-auto">
              Découvrez nos artistes résidents et invités, chacun avec leur univers musical unique
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-tapage-tuatara">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Rechercher un DJ ou un genre..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 bg-tapage-mineshaft border border-tapage-fuscous rounded-md text-tapage-periglacial placeholder-tapage-bitter focus:outline-none focus:ring-2 focus:ring-tapage-periglacial"
                />
              </div>

              {/* Genre filter */}
              <div className="flex gap-2">
                <select
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                  className="px-4 py-2 bg-tapage-mineshaft border border-tapage-fuscous rounded-md text-tapage-periglacial focus:outline-none focus:ring-2 focus:ring-tapage-periglacial"
                >
                  <option value="">Tous les genres</option>
                  {allGenres.map((genre) => (
                    <option key={genre} value={genre}>
                      {genre}
                    </option>
                  ))}
                </select>

                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedGenre('');
                  }}
                  className="px-4 py-2 bg-tapage-mineshaft text-tapage-periglacial rounded-md hover:bg-tapage-fuscous transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Artists Grid */}
        <section className="py-20 bg-tapage-cod">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredArtists.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArtists.map((artist) => (
                  <ArtistCard key={artist.id} artist={artist} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-tapage-stack text-lg">
                  Aucun DJ trouvé avec ces critères.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedGenre('');
                  }}
                  className="mt-4 text-tapage-periglacial hover:text-white transition-colors"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer siteData={siteData} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const [siteData, artists] = await Promise.all([
    loadSiteData(),
    loadArtists(),
  ]);

  return {
    props: {
      siteData,
      artists,
    },
  };
};
