import Head from 'next/head';
import { MetaData } from '../types';

interface OGMetaProps {
  meta: MetaData;
}

export default function OGMeta({ meta }: OGMetaProps) {
  const siteName = 'Tapage Culturel';
  const baseUrl = 'https://tapage.example.com'; // À remplacer par votre URL

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      {meta.url && <meta property="og:url" content={meta.url} />}
      {meta.image && <meta property="og:image" content={`${baseUrl}${meta.image}`} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      {meta.image && <meta name="twitter:image" content={`${baseUrl}${meta.image}`} />}
      
      {/* Canonical */}
      {meta.url && <link rel="canonical" href={meta.url} />}
    </Head>
  );
}
