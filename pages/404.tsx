import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { loadSiteData } from '../utils/dataLoader';
import { SiteData } from '../types';

interface NotFoundProps {
  siteData: SiteData;
}

export default function NotFound({ siteData }: NotFoundProps) {
  return (
    <>
      <Head>
        <title>Page non trouvée — Tapage Culturel</title>
        <meta name="description" content="La page que vous recherchez n'existe pas." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar events={[]} />
      
      <main className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-aura text-tapage-periglacial mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-alga text-tapage-periglacial mb-6">
              Page non trouvée
            </h2>
            <p className="text-tapage-stack text-lg max-w-md mx-auto mb-8">
              La page que vous recherchez semble avoir disparu dans le vortex électronique.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-tapage-periglacial text-tapage-cod px-8 py-3 rounded-md text-lg font-medium hover:bg-white transition-colors"
            >
              Retour à l'accueil
            </Link>
            <Link
              href="/events"
              className="border-2 border-tapage-periglacial text-tapage-periglacial px-8 py-3 rounded-md text-lg font-medium hover:bg-tapage-periglacial hover:text-tapage-cod transition-colors"
            >
              Voir les événements
            </Link>
          </div>
        </div>
      </main>

      <Footer siteData={siteData} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const siteData = await loadSiteData();

  return {
    props: {
      siteData,
    },
  };
};
