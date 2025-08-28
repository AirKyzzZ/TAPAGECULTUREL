import { GetStaticProps } from 'next';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { loadSiteData } from '../../utils/dataLoader';
import { SiteData } from '../../types';

interface ContactProps {
  siteData: SiteData;
}

export default function Contact({ siteData }: ContactProps) {
  return (
    <>
      <Head>
        <title>Contact & Booking — Tapage Culturel</title>
        <meta name="description" content="Contactez Tapage Culturel pour vos événements, réservations et collaborations. Formulaire de contact et informations de booking." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar events={[]} />
      
      <main className="pt-16">
        {/* Header */}
        <section className="py-20 bg-tapage-cod">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-aura text-tapage-periglacial text-center mb-6">
              Contact & Booking
            </h1>
            <p className="text-xl text-tapage-stack text-center max-w-2xl mx-auto">
              Contactez-nous pour vos événements, réservations et collaborations
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-tapage-tuatara">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-2xl font-aura text-tapage-periglacial mb-6">
                  Envoyez-nous un message
                </h2>
                
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  className="space-y-6"
                >
                  {/* Netlify hidden fields */}
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                  </p>

                  <div>
                    <label htmlFor="name" className="block text-tapage-periglacial font-medium mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-tapage-mineshaft border border-tapage-fuscous rounded-md text-tapage-periglacial placeholder-tapage-bitter focus:outline-none focus:ring-2 focus:ring-tapage-periglacial"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-tapage-periglacial font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-tapage-mineshaft border border-tapage-fuscous rounded-md text-tapage-periglacial placeholder-tapage-bitter focus:outline-none focus:ring-2 focus:ring-tapage-periglacial"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-tapage-periglacial font-medium mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 bg-tapage-mineshaft border border-tapage-fuscous rounded-md text-tapage-periglacial focus:outline-none focus:ring-2 focus:ring-tapage-periglacial"
                    >
                      <option value="">Choisir un sujet</option>
                      <option value="booking">Booking / Réservation</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="partnership">Partenariat</option>
              
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-tapage-periglacial font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 bg-tapage-mineshaft border border-tapage-fuscous rounded-md text-tapage-periglacial placeholder-tapage-bitter focus:outline-none focus:ring-2 focus:ring-tapage-periglacial resize-none"
                      placeholder="Décrivez votre projet ou demande..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      className="mt-1 w-4 h-4 text-tapage-periglacial bg-tapage-mineshaft border-tapage-fuscous rounded focus:ring-tapage-periglacial focus:ring-2"
                    />
                    <label htmlFor="newsletter" className="text-tapage-stack text-sm">
                      Je souhaite recevoir la newsletter Tapage (événements, actualités)
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-tapage-periglacial text-tapage-cod py-3 px-6 rounded-md font-medium hover:bg-white transition-colors"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-aura text-tapage-periglacial mb-6">
                  Informations de contact
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-alga text-tapage-periglacial mb-3">
                      📧 Email
                    </h3>
                    <a
                      href={`mailto:${siteData.contactEmail}`}
                      className="text-tapage-stack hover:text-tapage-periglacial transition-colors"
                    >
                      {siteData.contactEmail}
                    </a>
                  </div>

                  <div>
                    <h3 className="text-lg font-alga text-tapage-periglacial mb-3">
                      📱 Instagram
                    </h3>
                    <a
                      href={siteData.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tapage-stack hover:text-tapage-periglacial transition-colors"
                    >
                      @tapage
                    </a>
                  </div>

                  <div>
                    <h3 className="text-lg font-alga text-tapage-periglacial mb-3">
                      🎵 Booking
                    </h3>
                    <p className="text-tapage-stack text-sm leading-relaxed">
                      Pour réserver Tapage pour votre événement, utilisez le formulaire ci-contre 
                      ou contactez-nous directement par email. Nous répondons généralement sous 24h.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-alga text-tapage-periglacial mb-3">
                      📍 Zone d'intervention
                    </h3>
                    <p className="text-tapage-stack text-sm leading-relaxed">
                      Bordeaux et sa métropole, Arcachon, Biarritz, Toulouse, 
                      et autres villes du Sud-Ouest selon disponibilité.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-alga text-tapage-periglacial mb-3">
                      ⏰ Délais de réservation
                    </h3>
                    <p className="text-tapage-stack text-sm leading-relaxed">
                      Réservation recommandée 2-3 semaines à l'avance pour les événements privés, 
                      1-2 mois pour les événements publics et festivals.
                    </p>
                  </div>
                </div>
              </div>
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
