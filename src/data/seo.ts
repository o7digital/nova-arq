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

export const localSeo = {
  es: { location: 'en Ciudad de México', home: 'Arquitectura e interiorismo en CDMX | RHEO', description: 'Estudio de arquitectura residencial, interiorismo y remodelación integral en Ciudad de México. Diseño, mobiliario a medida y supervisión de obra con RHEO.' },
  en: { location: 'in Mexico City', home: 'Architecture & Interior Design in Mexico City | RHEO', description: 'Residential architecture, interior design and complete renovations in Mexico City. RHEO coordinates design, bespoke furniture and site supervision.' },
  fr: { location: 'à Mexico', home: 'Architecture et décoration à Mexico | RHEO', description: 'Architecture résidentielle, décoration et rénovation intégrale à Mexico. RHEO accompagne votre projet, du design au mobilier sur mesure et au suivi de chantier.' },
  it: { location: 'a Città del Messico', home: 'Architettura e interni a Città del Messico | RHEO', description: 'Architettura residenziale, interni e ristrutturazioni a Città del Messico. RHEO segue design, arredi su misura e supervisione dei lavori.' },
  de: { location: 'in Mexiko-Stadt', home: 'Architektur und Interieur in Mexiko-Stadt | RHEO', description: 'Wohnarchitektur, Innenarchitektur und Komplettsanierung in Mexiko-Stadt. RHEO begleitet Planung, Maßmöbel und Bauaufsicht.' },
  pt: { location: 'na Cidade do México', home: 'Arquitetura e interiores na Cidade do México | RHEO', description: 'Arquitetura residencial, interiores e remodelação integral na Cidade do México. RHEO coordena projeto, mobiliário sob medida e supervisão de obra.' },
} as const;

export function serviceSeo(title: string, summary: string, locale: keyof typeof localSeo) {
  const localTitle = `${title} ${localSeo[locale].location}`;
  return { title: `${localTitle} | RHEO`, description: `${localTitle}. ${summary}` };
}
