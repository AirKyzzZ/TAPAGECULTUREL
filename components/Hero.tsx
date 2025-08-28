import Link from 'next/link';

interface HeroProps {
  headline: string;
  sub: string;
  backgroundImage?: string;
}

export default function Hero({ headline, sub, backgroundImage = '/assets/hero-bg-1200.jpg' }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-tapage-cod/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-aura text-tapage-periglacial mb-6 animate-fade-in">
          {headline}
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-tapage-periglacial/90 mb-12 animate-slide-up">
          {sub}
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <Link
            href="/events"
            className="bg-tapage-periglacial text-tapage-cod px-4 sm:px-6 lg:px-8 py-4 rounded-md text-lg font-medium hover:bg-white transition-all duration-300 transform hover:scale-105"
          >
            VOIR LES PROCHAINS ÉVÉNEMENTS
          </Link>
          <Link
            href="/contact"
            className="border-2 border-tapage-periglacial text-tapage-periglacial px-4 sm:px-6 lg:px-8 py-4 rounded-md text-lg font-medium hover:bg-tapage-periglacial hover:text-tapage-cod transition-all duration-300"
          >
            S'ABONNER
          </Link>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-tapage-periglacial rounded-full flex justify-center">
          <div className="w-1 h-3 bg-tapage-periglacial rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
