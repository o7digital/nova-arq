export const homeAlternates = {
  es: '/',
  en: '/en/',
  fr: '/fr/',
  it: '/it/',
  de: '/de/',
  pt: '/pt/',
};

export const privacyAlternates = {
  es: '/aviso-de-privacidad/',
  en: '/en/privacy/',
  fr: '/fr/privacy/',
  it: '/it/privacy/',
  de: '/de/privacy/',
  pt: '/pt/privacy/',
};

export const studioId = 'https://raquel-hedo.vercel.app/#studio';

export function serviceStructuredData(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: new URL(url, 'https://raquel-hedo.vercel.app').href,
    provider: { '@id': studioId },
    areaServed: [{ '@type': 'Country', name: 'México' }, { '@type': 'Place', name: 'International' }],
  };
}
