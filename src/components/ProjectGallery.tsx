import { useEffect, useMemo, useState } from 'react';

type Category = 'Todos' | 'Arquitectura' | 'Interiores' | 'Remodelación';

const projects = [
  {
    id: '01',
    category: 'Interiores',
    title: 'Comedor & luz',
    type: 'Espacio residencial',
    images: [
      '/assets/raquel-projects/portfolio-dining-room.webp',
      '/assets/raquel-projects/hero-living-room.webp',
    ],
    layout: 'wide',
  },
  {
    id: '02',
    category: 'Interiores',
    title: 'Suite principal',
    type: 'Interiorismo residencial',
    images: [
      '/assets/raquel-projects/portfolio-bedroom.webp',
      '/assets/raquel-projects/gallery/suite-bathroom.webp',
      '/assets/raquel-projects/portfolio-bathroom.webp',
      '/assets/raquel-projects/gallery/bathroom-detail.webp',
    ],
    layout: 'tall',
  },
  {
    id: '03',
    category: 'Remodelación',
    title: 'Arquitectura y Remodelaciones',
    type: 'Remodelación integral',
    images: [
      '/assets/raquel-projects/gallery/club-lounge.webp',
      '/assets/raquel-projects/gallery/club-restaurant.webp',
      '/assets/raquel-projects/gallery/club-staircase.webp',
      '/assets/raquel-projects/gallery/club-dining.webp',
      '/assets/raquel-projects/gallery/club-gym.webp',
      '/assets/raquel-projects/gallery/club-lockers.webp',
      '/assets/raquel-projects/gallery/club-entrance.webp',
    ],
    layout: 'square',
  },
  {
    id: '04',
    category: 'Interiores',
    title: 'Mobiliario & ritmo',
    type: 'Diseño a medida',
    images: [
      '/assets/raquel-projects/portfolio-custom-divider.webp',
      '/assets/raquel-projects/gallery/custom-space-dining.webp',
      '/assets/raquel-projects/gallery/custom-space-living.webp',
    ],
    layout: 'wide',
  },
  {
    id: '05',
    category: 'Interiores',
    title: 'Color & carácter',
    type: 'Sala de estar',
    images: [
      '/assets/raquel-projects/portfolio-red-living-room.webp',
      '/assets/raquel-projects/gallery/red-living-dining.webp',
      '/assets/raquel-projects/gallery/red-living-fireplace.webp',
      '/assets/raquel-projects/gallery/red-living-overview.webp',
    ],
    layout: 'wide',
  },
  {
    id: '06',
    category: 'Arquitectura',
    title: 'Nuestros Proyectos',
    type: 'Arquitectura e interiorismo',
    images: [
      '/assets/raquel-projects/gallery/projects-red-corridor.webp',
      '/assets/raquel-projects/gallery/projects-blue-bathroom.webp',
      '/assets/raquel-projects/gallery/projects-white-staircase.webp',
      '/assets/raquel-projects/gallery/projects-red-dining.webp',
    ],
    layout: 'tall',
  },
] as const;

const categories: Category[] = ['Todos', 'Arquitectura', 'Interiores', 'Remodelación'];

const translations = {
  es: { categories: ['Todos','Arquitectura','Interiores','Remodelación'], filter: 'Filtrar selección de proyectos', titles: ['Comedor & luz','Suite principal','Arquitectura y Remodelaciones','Mobiliario & ritmo','Color & carácter','Nuestros Proyectos'], types: ['Espacio residencial','Interiorismo residencial','Remodelación integral','Diseño a medida','Sala de estar','Arquitectura e interiorismo'], previous: 'Foto anterior', next: 'Foto siguiente', feature: { eyebrow: 'Estudio de arquitectura en Ciudad de México', title: 'Diseñamos espacios con identidad, precisión y permanencia.', paragraphs: ['El estudio Raquel Hedo crea proyectos de arquitectura residencial, interiorismo, decoración y remodelación integral en Ciudad de México y otros destinos de México.', 'Desde una obra nueva hasta la transformación completa de una vivienda, coordinamos concepto, distribución, materiales, iluminación, mobiliario a medida, presupuesto, proveedores y supervisión de obra.'], link: 'Conocer nuestros servicios' } },
  en: { categories: ['All','Architecture','Interiors','Renovation'], filter: 'Filter selected projects', titles: ['Dining & light','Primary suite','Architecture & Renovations','Furniture & rhythm','Colour & character','Our Projects'], types: ['Residential space','Residential interiors','Complete renovation','Bespoke design','Living room','Architecture and interiors'], previous: 'Previous photo', next: 'Next photo', feature: { eyebrow: 'Architecture studio in Mexico City', title: 'We design enduring spaces with identity and precision.', paragraphs: ['Raquel Hedo Studio creates residential architecture, interior design, decoration and complete renovation projects in Mexico City and across Mexico.', 'From new homes to the complete transformation of an existing property, we coordinate concept, spatial planning, materials, lighting, bespoke furniture, budgets, suppliers and construction supervision.'], link: 'Explore our services' } },
  fr: { categories: ['Tous','Architecture','Intérieurs','Rénovation'], filter: 'Filtrer les projets', titles: ['Salle à manger & lumière','Suite principale','Architecture & Rénovations','Mobilier & rythme','Couleur & caractère','Nos projets'], types: ['Espace résidentiel','Architecture intérieure','Rénovation intégrale','Création sur mesure','Salon','Architecture et intérieurs'], previous: 'Photo précédente', next: 'Photo suivante', feature: { eyebrow: 'Studio d’architecture à Mexico', title: 'Nous créons des espaces durables, précis et singuliers.', paragraphs: ['Le studio Raquel Hedo conçoit des projets d’architecture résidentielle, d’architecture intérieure, de décoration et de rénovation intégrale à Mexico et ailleurs au Mexique.', 'De la construction neuve à la transformation complète d’un logement, nous coordonnons concept, distribution, matériaux, éclairage, mobilier sur mesure, budget, fournisseurs et suivi de chantier.'], link: 'Découvrir nos services' } },
  it: { categories: ['Tutti','Architettura','Interni','Ristrutturazione'], filter: 'Filtra i progetti', titles: ['Pranzo & luce','Suite padronale','Architettura & Ristrutturazioni','Arredi & ritmo','Colore & carattere','I nostri progetti'], types: ['Spazio residenziale','Interior design','Ristrutturazione integrale','Design su misura','Soggiorno','Architettura e interni'], previous: 'Foto precedente', next: 'Foto successiva', feature: { eyebrow: 'Studio di architettura a Città del Messico', title: 'Progettiamo spazi durevoli, precisi e ricchi di identità.', paragraphs: ['Lo studio Raquel Hedo realizza progetti di architettura residenziale, interior design, decorazione e ristrutturazione integrale a Città del Messico e in tutto il Messico.', 'Dalle nuove costruzioni alla trasformazione completa di un’abitazione, coordiniamo concept, distribuzione, materiali, illuminazione, arredi su misura, budget, fornitori e direzione lavori.'], link: 'Scopri i nostri servizi' } },
  de: { categories: ['Alle','Architektur','Interieur','Sanierung'], filter: 'Projekte filtern', titles: ['Esszimmer & Licht','Master Suite','Architektur & Sanierungen','Möbel & Rhythmus','Farbe & Charakter','Unsere Projekte'], types: ['Wohnraum','Wohninterieur','Komplettsanierung','Maßanfertigung','Wohnzimmer','Architektur und Interieur'], previous: 'Vorheriges Foto', next: 'Nächstes Foto', feature: { eyebrow: 'Architekturstudio in Mexiko-Stadt', title: 'Wir gestalten beständige Räume mit Identität und Präzision.', paragraphs: ['Das Studio Raquel Hedo entwickelt Wohnarchitektur, Innenarchitektur, Dekoration und ganzheitliche Sanierungen in Mexiko-Stadt und in ganz Mexiko.', 'Vom Neubau bis zur vollständigen Transformation eines Hauses koordinieren wir Konzept, Raumplanung, Materialien, Beleuchtung, Maßmöbel, Budget, Partner und Bauaufsicht.'], link: 'Unsere Leistungen entdecken' } },
  pt: { categories: ['Todos','Arquitetura','Interiores','Remodelação'], filter: 'Filtrar projetos', titles: ['Sala de jantar & luz','Suíte principal','Arquitetura e Remodelações','Mobiliário & ritmo','Cor & caráter','Nossos projetos'], types: ['Espaço residencial','Interiores residenciais','Remodelação integral','Design sob medida','Sala de estar','Arquitetura e interiores'], previous: 'Foto anterior', next: 'Foto seguinte', feature: { eyebrow: 'Estúdio de arquitetura na Cidade do México', title: 'Criamos espaços duradouros com identidade e precisão.', paragraphs: ['O estúdio Raquel Hedo desenvolve projetos de arquitetura residencial, interiores, decoração e remodelação integral na Cidade do México e em todo o México.', 'De novas construções à transformação completa de uma casa, coordenamos conceito, distribuição, materiais, iluminação, mobiliário sob medida, orçamento, fornecedores e supervisão de obra.'], link: 'Conhecer os nossos serviços' } },
} as const;

const renovationFeatures = {
  es: {
    eyebrow: 'Remodelación integral en Ciudad de México',
    title: 'Transformamos lo existente para crear una nueva forma de habitar.',
    paragraphs: [
      'Cada remodelación comienza con una lectura precisa del espacio: su estructura, circulación, luz natural y potencial. Raquel Hedo replantea la arquitectura para adaptarla a la vida actual sin perder la identidad del lugar.',
      'El estudio coordina proyecto ejecutivo, distribución, materiales, interiorismo, iluminación, mobiliario a medida, presupuesto, proveedores y supervisión de obra para lograr una transformación coherente de principio a fin.',
    ],
    link: 'Descubrir remodelación integral',
  },
  en: {
    eyebrow: 'Complete renovation in Mexico City',
    title: 'We transform existing spaces for a new way of living.',
    paragraphs: [
      'Every renovation begins with a precise reading of the building: its structure, circulation, natural light and potential. Raquel Hedo reshapes the architecture for contemporary life while preserving the identity of the place.',
      'The studio coordinates construction documents, layouts, materials, interiors, lighting, bespoke furniture, budgets, suppliers and site supervision for a coherent transformation from first idea to completion.',
    ],
    link: 'Explore complete renovation',
  },
  fr: {
    eyebrow: 'Rénovation intégrale à Mexico',
    title: 'Nous transformons l’existant pour inventer une nouvelle manière d’habiter.',
    paragraphs: [
      'Chaque rénovation commence par une lecture précise du lieu : structure, circulation, lumière naturelle et potentiel. Raquel Hedo repense l’architecture pour la vie contemporaine tout en préservant l’identité du bâti.',
      'Le studio coordonne projet d’exécution, distribution, matériaux, architecture intérieure, éclairage, mobilier sur mesure, budget, fournisseurs et suivi de chantier, de la première idée à la livraison.',
    ],
    link: 'Découvrir la rénovation intégrale',
  },
  it: {
    eyebrow: 'Ristrutturazione integrale a Città del Messico',
    title: 'Trasformiamo gli spazi esistenti per un nuovo modo di abitare.',
    paragraphs: [
      'Ogni ristrutturazione nasce da una lettura precisa dello spazio: struttura, percorsi, luce naturale e potenziale. Raquel Hedo ripensa l’architettura per la vita contemporanea preservando l’identità del luogo.',
      'Lo studio coordina progetto esecutivo, distribuzione, materiali, interni, illuminazione, arredi su misura, budget, fornitori e direzione lavori per una trasformazione coerente dall’idea alla consegna.',
    ],
    link: 'Scopri la ristrutturazione integrale',
  },
  de: {
    eyebrow: 'Komplettsanierung in Mexiko-Stadt',
    title: 'Wir verwandeln Bestehendes in eine neue Art zu wohnen.',
    paragraphs: [
      'Jede Sanierung beginnt mit einer präzisen Analyse von Struktur, Wegen, Tageslicht und Potenzial. Raquel Hedo entwickelt die Architektur für heutige Lebensweisen weiter und bewahrt zugleich die Identität des Ortes.',
      'Das Studio koordiniert Ausführungsplanung, Grundrisse, Materialien, Innenarchitektur, Beleuchtung, Maßmöbel, Budget, Partner und Bauaufsicht für eine stimmige Transformation bis zur Übergabe.',
    ],
    link: 'Komplettsanierung entdecken',
  },
  pt: {
    eyebrow: 'Remodelação integral na Cidade do México',
    title: 'Transformamos o existente para criar uma nova forma de viver.',
    paragraphs: [
      'Cada remodelação começa com uma leitura precisa do espaço: estrutura, circulação, luz natural e potencial. Raquel Hedo repensa a arquitetura para a vida contemporânea, preservando a identidade do lugar.',
      'O estúdio coordena projeto executivo, distribuição, materiais, interiores, iluminação, mobiliário sob medida, orçamento, fornecedores e supervisão de obra para uma transformação coerente até à entrega.',
    ],
    link: 'Conhecer a remodelação integral',
  },
} as const;

type Project = (typeof projects)[number];
type Copy = (typeof translations)[keyof typeof translations];
type RenovationCopy = (typeof renovationFeatures)[keyof typeof renovationFeatures];

function ProjectCard({ project, index, copy, renovation }: { project: Project; index: number; copy: Copy; renovation: RenovationCopy }) {
  const [current, setCurrent] = useState(0);
  const editorial = project.id === '03' ? renovation : project.id === '06' ? copy.feature : null;
  const move = (direction: -1 | 1) => {
    setCurrent((photo) => (photo + direction + project.images.length) % project.images.length);
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setTimeout(() => move(1), 4000);
    return () => window.clearTimeout(timer);
  }, [current]);

  return (
    <article className={`project-card project-card--${project.layout}${editorial ? ' project-card--editorial' : ''}`}>
      <div
        className="project-image-wrap"
        role="group"
        aria-roledescription="carousel"
        aria-label={copy.titles[index]}
      >
        {project.images.map((image, photo) => (
          <img
            key={image}
            className={`project-slide ${photo === current ? 'is-active' : ''}`}
            src={image}
            alt={`${copy.titles[index]}, ${photo + 1} / ${project.images.length}`}
            loading="lazy"
            aria-hidden={photo !== current}
          />
        ))}
        <span className="project-number">{project.id}</span>
        <div className="project-slider-controls">
          <button type="button" onClick={() => move(-1)} aria-label={copy.previous}>←</button>
          <div className="project-slider-dots" aria-label={`${current + 1} / ${project.images.length}`}>
            {project.images.map((_, photo) => (
              <button
                key={photo}
                type="button"
                className={photo === current ? 'is-active' : ''}
                onClick={() => setCurrent(photo)}
                aria-label={`${copy.titles[index]} ${photo + 1}`}
                aria-pressed={photo === current}
              />
            ))}
          </div>
          <button type="button" onClick={() => move(1)} aria-label={copy.next}>→</button>
        </div>
      </div>
      <div className="project-meta">
        <div>
          <p>{copy.types[index]}</p>
          <h3>{copy.titles[index]}</h3>
        </div>
        <span>{copy.categories[categories.indexOf(project.category)]}</span>
      </div>
      {editorial && (
        <div className="project-editorial">
          <p className="eyebrow"><span></span>{editorial.eyebrow}</p>
          <h4>{editorial.title}</h4>
          {editorial.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <a href="#servicios">{editorial.link}<span aria-hidden="true">→</span></a>
        </div>
      )}
    </article>
  );
}

export default function ProjectGallery({ locale = 'es' }: { locale?: keyof typeof translations }) {
  const copy = translations[locale];
  const [active, setActive] = useState<Category>('Todos');
  const visible = useMemo(
    () => active === 'Todos' ? projects : projects.filter((project) => project.category === active),
    [active],
  );

  return (
    <div className="portfolio-interactive">
      <div className="project-filters" aria-label={copy.filter}>
        {categories.map((category, index) => (
          <button
            key={category}
            type="button"
            className={active === category ? 'is-active' : ''}
            aria-pressed={active === category}
            onClick={() => setActive(category)}
          >
            {copy.categories[index]}
          </button>
        ))}
      </div>

      <div className={`project-grid ${active !== 'Todos' ? 'project-grid--filtered' : ''}`} aria-live="polite">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} index={projects.indexOf(project)} copy={copy} renovation={renovationFeatures[locale]} />
        ))}
      </div>
    </div>
  );
}
