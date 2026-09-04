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
    title: 'Club de Empresarios',
    type: 'Club privado',
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
  es: { categories: ['Todos','Arquitectura','Interiores','Remodelación'], filter: 'Filtrar selección de proyectos', titles: ['Comedor & luz','Suite principal','Club de Empresarios','Mobiliario & ritmo','Color & carácter','Nuestros Proyectos'], types: ['Espacio residencial','Interiorismo residencial','Club privado','Diseño a medida','Sala de estar','Arquitectura e interiorismo'], previous: 'Foto anterior', next: 'Foto siguiente', feature: { eyebrow: 'Estudio de arquitectura en Ciudad de México', title: 'Diseñamos espacios con identidad, precisión y permanencia.', paragraphs: ['El estudio Raquel Hedo crea proyectos de arquitectura residencial, interiorismo, decoración y remodelación integral en Ciudad de México y otros destinos de México.', 'Desde una obra nueva hasta la transformación completa de una vivienda, coordinamos concepto, distribución, materiales, iluminación, mobiliario a medida, presupuesto, proveedores y supervisión de obra.'], link: 'Conocer nuestros servicios' } },
  en: { categories: ['All','Architecture','Interiors','Renovation'], filter: 'Filter selected projects', titles: ['Dining & light','Primary suite','Club de Empresarios','Furniture & rhythm','Colour & character','Our Projects'], types: ['Residential space','Residential interiors','Private club','Bespoke design','Living room','Architecture and interiors'], previous: 'Previous photo', next: 'Next photo', feature: { eyebrow: 'Architecture studio in Mexico City', title: 'We design enduring spaces with identity and precision.', paragraphs: ['Raquel Hedo Studio creates residential architecture, interior design, decoration and complete renovation projects in Mexico City and across Mexico.', 'From new homes to the complete transformation of an existing property, we coordinate concept, spatial planning, materials, lighting, bespoke furniture, budgets, suppliers and construction supervision.'], link: 'Explore our services' } },
  fr: { categories: ['Tous','Architecture','Intérieurs','Rénovation'], filter: 'Filtrer les projets', titles: ['Salle à manger & lumière','Suite principale','Club de Empresarios','Mobilier & rythme','Couleur & caractère','Nos projets'], types: ['Espace résidentiel','Architecture intérieure','Club privé','Création sur mesure','Salon','Architecture et intérieurs'], previous: 'Photo précédente', next: 'Photo suivante', feature: { eyebrow: 'Studio d’architecture à Mexico', title: 'Nous créons des espaces durables, précis et singuliers.', paragraphs: ['Le studio Raquel Hedo conçoit des projets d’architecture résidentielle, d’architecture intérieure, de décoration et de rénovation intégrale à Mexico et ailleurs au Mexique.', 'De la construction neuve à la transformation complète d’un logement, nous coordonnons concept, distribution, matériaux, éclairage, mobilier sur mesure, budget, fournisseurs et suivi de chantier.'], link: 'Découvrir nos services' } },
  it: { categories: ['Tutti','Architettura','Interni','Ristrutturazione'], filter: 'Filtra i progetti', titles: ['Pranzo & luce','Suite padronale','Club de Empresarios','Arredi & ritmo','Colore & carattere','I nostri progetti'], types: ['Spazio residenziale','Interior design','Club privato','Design su misura','Soggiorno','Architettura e interni'], previous: 'Foto precedente', next: 'Foto successiva', feature: { eyebrow: 'Studio di architettura a Città del Messico', title: 'Progettiamo spazi durevoli, precisi e ricchi di identità.', paragraphs: ['Lo studio Raquel Hedo realizza progetti di architettura residenziale, interior design, decorazione e ristrutturazione integrale a Città del Messico e in tutto il Messico.', 'Dalle nuove costruzioni alla trasformazione completa di un’abitazione, coordiniamo concept, distribuzione, materiali, illuminazione, arredi su misura, budget, fornitori e direzione lavori.'], link: 'Scopri i nostri servizi' } },
  de: { categories: ['Alle','Architektur','Interieur','Sanierung'], filter: 'Projekte filtern', titles: ['Esszimmer & Licht','Master Suite','Club de Empresarios','Möbel & Rhythmus','Farbe & Charakter','Unsere Projekte'], types: ['Wohnraum','Wohninterieur','Privatclub','Maßanfertigung','Wohnzimmer','Architektur und Interieur'], previous: 'Vorheriges Foto', next: 'Nächstes Foto', feature: { eyebrow: 'Architekturstudio in Mexiko-Stadt', title: 'Wir gestalten beständige Räume mit Identität und Präzision.', paragraphs: ['Das Studio Raquel Hedo entwickelt Wohnarchitektur, Innenarchitektur, Dekoration und ganzheitliche Sanierungen in Mexiko-Stadt und in ganz Mexiko.', 'Vom Neubau bis zur vollständigen Transformation eines Hauses koordinieren wir Konzept, Raumplanung, Materialien, Beleuchtung, Maßmöbel, Budget, Partner und Bauaufsicht.'], link: 'Unsere Leistungen entdecken' } },
  pt: { categories: ['Todos','Arquitetura','Interiores','Remodelação'], filter: 'Filtrar projetos', titles: ['Sala de jantar & luz','Suíte principal','Club de Empresarios','Mobiliário & ritmo','Cor & caráter','Nossos projetos'], types: ['Espaço residencial','Interiores residenciais','Clube privado','Design sob medida','Sala de estar','Arquitetura e interiores'], previous: 'Foto anterior', next: 'Foto seguinte', feature: { eyebrow: 'Estúdio de arquitetura na Cidade do México', title: 'Criamos espaços duradouros com identidade e precisão.', paragraphs: ['O estúdio Raquel Hedo desenvolve projetos de arquitetura residencial, interiores, decoração e remodelação integral na Cidade do México e em todo o México.', 'De novas construções à transformação completa de uma casa, coordenamos conceito, distribuição, materiais, iluminação, mobiliário sob medida, orçamento, fornecedores e supervisão de obra.'], link: 'Conhecer os nossos serviços' } },
} as const;

type Project = (typeof projects)[number];
type Copy = (typeof translations)[keyof typeof translations];

function ProjectCard({ project, index, copy }: { project: Project; index: number; copy: Copy }) {
  const [current, setCurrent] = useState(0);
  const isStudioOverview = project.id === '06';
  const move = (direction: -1 | 1) => {
    setCurrent((photo) => (photo + direction + project.images.length) % project.images.length);
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setTimeout(() => move(1), 4000);
    return () => window.clearTimeout(timer);
  }, [current]);

  return (
    <article className={`project-card project-card--${project.layout}${isStudioOverview ? ' project-card--editorial' : ''}`}>
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
      {isStudioOverview && (
        <div className="project-editorial">
          <p className="eyebrow"><span></span>{copy.feature.eyebrow}</p>
          <h4>{copy.feature.title}</h4>
          {copy.feature.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <a href="#servicios">{copy.feature.link}<span aria-hidden="true">→</span></a>
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
          <ProjectCard key={project.id} project={project} index={projects.indexOf(project)} copy={copy} />
        ))}
      </div>
    </div>
  );
}
