import { GetStaticProps } from 'next';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { loadSiteData } from '../../utils/dataLoader';
import { SiteData } from '../../types';

interface RiderProps {
  siteData: SiteData;
}

export default function Rider({ siteData }: RiderProps) {
  return (
    <>
      <Head>
        <title>Rider Technique — Tapage Culturel</title>
        <meta name="description" content="Rider technique et hospitality pour les événements Tapage. Spécifications techniques, équipements et demandes pour organisateurs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar events={[]} />
      
      <main className="pt-16">
        {/* Header */}
        <section className="py-20 bg-tapage-cod">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-aura text-tapage-periglacial text-center mb-6">
              Rider Technique
            </h1>
            <p className="text-xl text-tapage-stack text-center max-w-2xl mx-auto">
              Spécifications techniques et hospitality pour nos événements
            </p>
          </div>
        </section>

        {/* Download PDF */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <a
              href="/rider/Tapage_Rider.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-tapage-periglacial text-tapage-cod px-8 py-4 rounded-md text-lg font-medium hover:bg-white transition-colors"
            >
              📄 Télécharger le PDF
            </a>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-tapage-cod">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-2xl font-aura text-tapage-periglacial mb-6">
                TECHNICAL & HOSPITALITY RIDER
              </h2>

              <h3 className="text-xl font-alga text-tapage-periglacial mb-4">
                Set-up & Équipements
              </h3>
              <ul className="text-tapage-stack space-y-2 mb-8">
                <li>• 2x CDJ-2000 ou équivalent (Pioneer, Denon)</li>
                <li>• 1x DJM-900 ou équivalent (mixer 4 canaux minimum)</li>
                <li>• 1x Table de DJ standard (120x60cm minimum)</li>
                <li>• 1x Chaise de DJ confortable</li>
                <li>• 1x Éclairage d'appoint sur la table (LED flexible)</li>
                <li>• 1x Ventilateur pour la table de DJ</li>
                <li>• 1x Tapis anti-dérapant pour les CDJs</li>
              </ul>

              <h3 className="text-xl font-alga text-tapage-periglacial mb-4">
                Requests Techniques
              </h3>
              <ul className="text-tapage-stack space-y-2 mb-8">
                <li>• Accès aux prises électriques 220V (minimum 2 prises)</li>
                <li>• Éclairage principal éteint pendant les sets</li>
                <li>• Contrôle du volume principal accessible au DJ</li>
                <li>• Monitoring de retour (si possible)</li>
                <li>• Température de la salle maintenue entre 18-22°C</li>
                <li>• Accès facile à la table de DJ (pas d'obstacles)</li>
              </ul>

              <h3 className="text-xl font-alga text-tapage-periglacial mb-4">
                Hospitality List
              </h3>
              <ul className="text-tapage-stack space-y-2 mb-8">
                <li>• 2x Bouteilles d'eau (500ml) par DJ</li>
                <li>• 1x Boisson énergisante (Red Bull, Monster) par DJ</li>
                <li>• 1x Bière pression ou bouteille (si autorisé)</li>
                <li>• 1x Sandwich ou snack végétarien</li>
                <li>• 1x Fruits frais (pommes, bananes)</li>
                <li>• 1x Café ou thé (selon l'heure)</li>
                <li>• 1x Serviettes en papier</li>
                <li>• 1x Poubelle à proximité de la table</li>
              </ul>

              <h3 className="text-xl font-alga text-tapage-periglacial mb-4">
                Informations Supplémentaires
              </h3>
              <p className="text-tapage-stack mb-4">
                Les DJs arrivent généralement 1h avant leur set pour le soundcheck et la préparation. 
                Merci de prévoir un espace de rangement pour les sacs et vêtements.
              </p>
              <p className="text-tapage-stack">
                Pour toute question technique spécifique, n'hésitez pas à nous contacter à l'avance.
              </p>
            </div>
          </div>
        </section>
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
