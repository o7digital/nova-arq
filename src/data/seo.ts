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

export const studioId = 'https://www.rheo.com.mx/#studio';

/** Priority residential areas served by the studio in Mexico City. */
export const mexicoCityNeighborhoods = [
  'Polanco',
  'Bosques de las Lomas',
  'Santa Fe',
  'Lomas de Chapultepec',
  'Jardines del Pedregal',
  'Condesa',
  'Roma Norte',
] as const;

const spanishNeighborhoodKeywords = [
  'arquitectura residencial en Polanco',
  'interiorismo en Polanco',
  'remodelación de casas en Polanco',
  'arquitectura residencial en Bosques de las Lomas',
  'interiorismo en Bosques de las Lomas',
  'remodelación de casas en Bosques de las Lomas',
  'arquitectura residencial en Santa Fe',
  'interiorismo en Santa Fe',
  'remodelación de casas en Santa Fe',
  'arquitectura residencial en Lomas de Chapultepec',
  'interiorismo en Lomas de Chapultepec',
  'arquitectura residencial en Jardines del Pedregal',
  'interiorismo en Jardines del Pedregal',
  'arquitectura residencial en Condesa',
  'interiorismo en Roma Norte',
] as const;

export const spanishKeywords = [
  ...spanishNeighborhoodKeywords,
  'arquitectura residencial',
  'interiorismo',
  'diseño de interiores',
  'decoración de interiores',
  'remodelación integral',
  'renovación de viviendas',
  'dirección de obra',
  'supervisión de obra',
  'arquitectura residencial en Ciudad de México',
  'arquitectura residencial CDMX',
  'interiorismo en Ciudad de México',
  'interiorismo CDMX',
  'diseño de interiores en Ciudad de México',
  'diseño de interiores CDMX',
  'decoración de interiores en Ciudad de México',
  'decoración de interiores CDMX',
  'remodelación integral en Ciudad de México',
  'remodelación integral CDMX',
  'renovación de viviendas en Ciudad de México',
  'renovación de viviendas CDMX',
  'dirección de obra en Ciudad de México',
  'dirección de obra CDMX',
  'supervisión de obra en Ciudad de México',
  'supervisión de obra CDMX',
  'diseño arquitectónico',
  'proyecto ejecutivo',
  'construcción residencial',
  'ampliación de viviendas',
  'redistribución de espacios',
  'selección de materiales',
  'diseño de iluminación',
  'mobiliario a medida',
  'control de calidad',
  'coordinación de proveedores',
  'presupuesto y planificación',
  'diseño arquitectónico en Ciudad de México',
  'diseño arquitectónico CDMX',
  'proyecto ejecutivo en Ciudad de México',
  'proyecto ejecutivo CDMX',
  'construcción residencial en Ciudad de México',
  'construcción residencial CDMX',
  'ampliación de viviendas en Ciudad de México',
  'ampliación de viviendas CDMX',
  'redistribución de espacios en Ciudad de México',
  'redistribución de espacios CDMX',
  'selección de materiales en Ciudad de México',
  'selección de materiales CDMX',
  'diseño de iluminación en Ciudad de México',
  'diseño de iluminación CDMX',
  'mobiliario a medida en Ciudad de México',
  'mobiliario a medida CDMX',
  'control de calidad de obra en Ciudad de México',
  'control de calidad de obra CDMX',
  'coordinación de proveedores en Ciudad de México',
  'coordinación de proveedores CDMX',
  'presupuesto y planificación de obra en Ciudad de México',
  'presupuesto y planificación de obra CDMX',
  'arquitecta en Ciudad de México',
  'despacho de arquitectura CDMX',
  'estudio de arquitectura en CDMX',
  'interiorismo en Ciudad de México',
  'diseño de interiores CDMX',
  'remodelación de casas CDMX',
  'decoración de interiores CDMX',
  'arquitectura residencial México',
  'RHEO',
  'Raquel Hedo',
  'RHEO Architecture & Interiors',
  'arquitectura personalizada',
  'interiores a medida',
  'diseño integral de espacios',
  'arquitectura contemporánea',
  'espacios con identidad',
  'diseño de casas de lujo',
  'proyectos residenciales exclusivos',
] as const;

const localizedKeywords = (keywords: readonly string[], location: string) =>
  keywords.map((keyword) => `${keyword} ${location}`);

export const seoKeywords = {
  es: spanishKeywords,
  en: [
    ...mexicoCityNeighborhoods.flatMap((neighborhood) => [
      `residential architecture in ${neighborhood}`,
      `interior design in ${neighborhood}`,
      `home renovation in ${neighborhood}`,
    ]),
    'residential architecture', 'interior design', 'interior decoration', 'complete renovation',
    'home renovation', 'site supervision', 'construction management', 'architectural design',
    'construction documents', 'residential construction', 'home extensions', 'space planning',
    'material selection', 'lighting design', 'bespoke furniture', 'quality control',
    'supplier coordination', 'budget and planning', 'architect in Mexico City',
    ...localizedKeywords([
      'residential architecture', 'interior design', 'interior decoration', 'complete renovation',
      'home renovation', 'site supervision', 'construction management', 'architectural design',
      'construction documents', 'residential construction', 'home extensions', 'space planning',
      'material selection', 'lighting design', 'bespoke furniture', 'quality control',
      'supplier coordination', 'budget and planning',
    ], 'in Mexico City'),
    'architecture studio Mexico City', 'interior design Mexico City', 'home renovation Mexico City',
    'residential architecture Mexico', 'RHEO', 'Raquel Hedo', 'RHEO Architecture & Interiors',
    'custom architecture', 'bespoke interiors', 'holistic spatial design',
    'contemporary architecture', 'luxury home design', 'exclusive residential projects',
  ],
  fr: [
    ...mexicoCityNeighborhoods.flatMap((neighborhood) => [
      `architecture résidentielle à ${neighborhood}`,
      `architecture intérieure à ${neighborhood}`,
      `rénovation de maison à ${neighborhood}`,
    ]),
    'architecture résidentielle', 'architecture intérieure', 'décoration intérieure',
    'rénovation intégrale', 'rénovation de maison', 'suivi de chantier', 'direction de chantier',
    'conception architecturale', 'projet d’exécution', 'construction résidentielle',
    'extension de maison', 'redistribution des espaces', 'sélection des matériaux',
    'conception lumière', 'mobilier sur mesure', 'contrôle qualité', 'coordination des fournisseurs',
    'budget et planification', 'architecte à Mexico', 'cabinet d’architecture à Mexico',
    ...localizedKeywords([
      'architecture résidentielle', 'architecture intérieure', 'décoration intérieure',
      'rénovation intégrale', 'rénovation de maison', 'suivi de chantier', 'direction de chantier',
      'conception architecturale', 'projet d’exécution', 'construction résidentielle',
      'extension de maison', 'redistribution des espaces', 'sélection des matériaux',
      'conception lumière', 'mobilier sur mesure', 'contrôle qualité',
      'coordination des fournisseurs', 'budget et planification',
    ], 'à Mexico'),
    'architecture intérieure à Mexico', 'rénovation de maison à Mexico',
    'architecture résidentielle au Mexique', 'RHEO', 'Raquel Hedo', 'RHEO Architecture & Interiors',
    'architecture personnalisée', 'intérieurs sur mesure', 'conception globale des espaces',
    'architecture contemporaine', 'maisons de luxe', 'projets résidentiels exclusifs',
  ],
  it: [
    ...mexicoCityNeighborhoods.flatMap((neighborhood) => [
      `architettura residenziale a ${neighborhood}`,
      `interior design a ${neighborhood}`,
      `ristrutturazione casa a ${neighborhood}`,
    ]),
    'architettura residenziale', 'interior design', 'decorazione d’interni',
    'ristrutturazione integrale', 'ristrutturazione casa', 'direzione lavori',
    'supervisione cantiere', 'progettazione architettonica', 'progetto esecutivo',
    'costruzione residenziale', 'ampliamento casa', 'ridistribuzione degli spazi',
    'selezione dei materiali', 'progettazione illuminotecnica', 'arredi su misura',
    'controllo qualità', 'coordinamento fornitori', 'budget e pianificazione',
    'architetto a Città del Messico', 'studio di architettura Città del Messico',
    ...localizedKeywords([
      'architettura residenziale', 'interior design', 'decorazione d’interni',
      'ristrutturazione integrale', 'ristrutturazione casa', 'direzione lavori',
      'supervisione cantiere', 'progettazione architettonica', 'progetto esecutivo',
      'costruzione residenziale', 'ampliamento casa', 'ridistribuzione degli spazi',
      'selezione dei materiali', 'progettazione illuminotecnica', 'arredi su misura',
      'controllo qualità', 'coordinamento fornitori', 'budget e pianificazione',
    ], 'a Città del Messico'),
    'interior design Città del Messico', 'ristrutturazione casa Città del Messico',
    'architettura residenziale Messico', 'RHEO', 'Raquel Hedo', 'RHEO Architecture & Interiors',
    'architettura personalizzata', 'interni su misura', 'progettazione integrale degli spazi',
    'architettura contemporanea', 'ville di lusso', 'progetti residenziali esclusivi',
  ],
  de: [
    ...mexicoCityNeighborhoods.flatMap((neighborhood) => [
      `Wohnarchitektur in ${neighborhood}`,
      `Innenarchitektur in ${neighborhood}`,
      `Haussanierung in ${neighborhood}`,
    ]),
    'Wohnarchitektur', 'Innenarchitektur', 'Inneneinrichtung', 'Komplettsanierung',
    'Haussanierung', 'Bauleitung', 'Bauaufsicht', 'Architekturplanung', 'Ausführungsplanung',
    'Wohnungsbau', 'Hauserweiterung', 'Raumplanung', 'Materialauswahl', 'Lichtplanung',
    'Maßmöbel', 'Qualitätskontrolle', 'Lieferantenkoordination', 'Budget und Planung',
    'Architekt in Mexiko-Stadt', 'Architekturbüro Mexiko-Stadt', 'Innenarchitektur Mexiko-Stadt',
    ...localizedKeywords([
      'Wohnarchitektur', 'Innenarchitektur', 'Inneneinrichtung', 'Komplettsanierung',
      'Haussanierung', 'Bauleitung', 'Bauaufsicht', 'Architekturplanung', 'Ausführungsplanung',
      'Wohnungsbau', 'Hauserweiterung', 'Raumplanung', 'Materialauswahl', 'Lichtplanung',
      'Maßmöbel', 'Qualitätskontrolle', 'Lieferantenkoordination', 'Budget und Planung',
    ], 'in Mexiko-Stadt'),
    'Haussanierung Mexiko-Stadt', 'Wohnarchitektur Mexiko', 'RHEO', 'Raquel Hedo',
    'RHEO Architecture & Interiors', 'individuelle Architektur', 'maßgeschneiderte Innenräume',
    'ganzheitliche Raumgestaltung', 'zeitgenössische Architektur', 'Luxushaus Design',
    'exklusive Wohnprojekte',
  ],
  pt: [
    ...mexicoCityNeighborhoods.flatMap((neighborhood) => [
      `arquitetura residencial em ${neighborhood}`,
      `design de interiores em ${neighborhood}`,
      `remodelação de casas em ${neighborhood}`,
    ]),
    'arquitetura residencial', 'design de interiores', 'decoração de interiores',
    'remodelação integral', 'renovação de casas', 'direção de obra', 'supervisão de obra',
    'projeto arquitetónico', 'projeto executivo', 'construção residencial',
    'ampliação de casas', 'redistribuição de espaços', 'seleção de materiais',
    'design de iluminação', 'mobiliário sob medida', 'controlo de qualidade',
    'coordenação de fornecedores', 'orçamento e planeamento', 'arquiteta na Cidade do México',
    ...localizedKeywords([
      'arquitetura residencial', 'design de interiores', 'decoração de interiores',
      'remodelação integral', 'renovação de casas', 'direção de obra', 'supervisão de obra',
      'projeto arquitetónico', 'projeto executivo', 'construção residencial',
      'ampliação de casas', 'redistribuição de espaços', 'seleção de materiais',
      'design de iluminação', 'mobiliário sob medida', 'controlo de qualidade',
      'coordenação de fornecedores', 'orçamento e planeamento',
    ], 'na Cidade do México'),
    'estúdio de arquitetura Cidade do México', 'design de interiores Cidade do México',
    'remodelação de casas Cidade do México', 'arquitetura residencial México',
    'RHEO', 'Raquel Hedo', 'RHEO Architecture & Interiors', 'arquitetura personalizada',
    'interiores sob medida', 'design integral de espaços', 'arquitetura contemporânea',
    'design de casas de luxo', 'projetos residenciais exclusivos',
  ],
} as const;

const locationMarkers = {
  es: ['Ciudad de México', 'CDMX'],
  en: ['Mexico City'],
  fr: ['Mexico'],
  it: ['Città del Messico'],
  de: ['Mexiko-Stadt'],
  pt: ['Cidade do México'],
} as const;

function getFooterSeoKeywords(locale: keyof typeof seoKeywords) {
  return seoKeywords[locale].filter((keyword) =>
    locationMarkers[locale].some((marker) => keyword.includes(marker)) ||
    mexicoCityNeighborhoods.some((neighborhood) => keyword.includes(neighborhood)),
  ).slice(0, 20);
}

export const footerSeoKeywords = {
  es: getFooterSeoKeywords('es'),
  en: getFooterSeoKeywords('en'),
  fr: getFooterSeoKeywords('fr'),
  it: getFooterSeoKeywords('it'),
  de: getFooterSeoKeywords('de'),
  pt: getFooterSeoKeywords('pt'),
} as const;

export function serviceStructuredData(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: new URL(url, 'https://www.rheo.com.mx').href,
    provider: { '@id': studioId },
    areaServed: [
      ...mexicoCityNeighborhoods.map((neighborhood) => ({ '@type': 'Place', name: neighborhood })),
      { '@type': 'Country', name: 'México' },
    ],
  };
}

export const localSeo = {
  es: { location: 'en Polanco, Bosques de las Lomas y Santa Fe', home: 'Arquitectura e interiorismo en Polanco, Santa Fe y CDMX | RHEO', description: 'Estudio de arquitectura residencial, interiorismo y remodelación integral en Polanco, Bosques de las Lomas, Santa Fe, Lomas de Chapultepec y Jardines del Pedregal.' },
  en: { location: 'in Polanco, Bosques de las Lomas and Santa Fe', home: 'Architecture & Interior Design in Polanco, Santa Fe & Mexico City | RHEO', description: 'Residential architecture, interior design and complete renovations in Polanco, Bosques de las Lomas, Santa Fe, Lomas de Chapultepec and Jardines del Pedregal.' },
  fr: { location: 'à Polanco, Bosques de las Lomas et Santa Fe', home: 'Architecture et décoration à Polanco, Santa Fe et Mexico | RHEO', description: 'Architecture résidentielle, décoration et rénovation à Polanco, Bosques de las Lomas, Santa Fe, Lomas de Chapultepec et Jardines del Pedregal.' },
  it: { location: 'a Polanco, Bosques de las Lomas e Santa Fe', home: 'Architettura e interni a Polanco, Santa Fe e Città del Messico | RHEO', description: 'Architettura residenziale, interni e ristrutturazioni a Polanco, Bosques de las Lomas, Santa Fe, Lomas de Chapultepec e Jardines del Pedregal.' },
  de: { location: 'in Polanco, Bosques de las Lomas und Santa Fe', home: 'Architektur und Interieur in Polanco, Santa Fe und Mexiko-Stadt | RHEO', description: 'Wohnarchitektur, Innenarchitektur und Komplettsanierung in Polanco, Bosques de las Lomas, Santa Fe, Lomas de Chapultepec und Jardines del Pedregal.' },
  pt: { location: 'em Polanco, Bosques de las Lomas e Santa Fe', home: 'Arquitetura e interiores em Polanco, Santa Fe e Cidade do México | RHEO', description: 'Arquitetura residencial, interiores e remodelação em Polanco, Bosques de las Lomas, Santa Fe, Lomas de Chapultepec e Jardines del Pedregal.' },
} as const;

export function serviceSeo(title: string, summary: string, locale: keyof typeof localSeo) {
  const localTitle = `${title} ${localSeo[locale].location}`;
  return { title: `${localTitle} | RHEO`, description: `${localTitle}. ${summary}` };
}
