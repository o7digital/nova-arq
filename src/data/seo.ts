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

export const spanishKeywords = [
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
    locationMarkers[locale].some((marker) => keyword.includes(marker)),
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
