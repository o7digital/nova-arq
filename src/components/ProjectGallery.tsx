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
    ],
    layout: 'tall',
  },
  {
    id: '03',
    category: 'Remodelación',
    title: 'Materia & bienestar',
    type: 'Baño residencial',
    images: [
      '/assets/raquel-projects/portfolio-bathroom.webp',
      '/assets/raquel-projects/gallery/bathroom-detail.webp',
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
    title: 'Materia & paisaje',
    type: 'Arquitectura residencial',
    images: [
      '/assets/raquel-projects/portfolio-residential-exterior.webp',
      '/assets/raquel-projects/hero-exterior.webp',
      '/assets/raquel-projects/gallery/red-house-passage.webp',
    ],
    layout: 'tall',
  },
] as const;

const categories: Category[] = ['Todos', 'Arquitectura', 'Interiores', 'Remodelación'];

const translations = {
  es: { categories: ['Todos','Arquitectura','Interiores','Remodelación'], filter: 'Filtrar selección de proyectos', titles: ['Comedor & luz','Suite principal','Materia & bienestar','Mobiliario & ritmo','Color & carácter','Materia & paisaje'], types: ['Espacio residencial','Interiorismo residencial','Baño residencial','Diseño a medida','Sala de estar','Arquitectura residencial'], previous: 'Foto anterior', next: 'Foto siguiente' },
  en: { categories: ['All','Architecture','Interiors','Renovation'], filter: 'Filter selected projects', titles: ['Dining & light','Primary suite','Material & wellbeing','Furniture & rhythm','Colour & character','Material & landscape'], types: ['Residential space','Residential interiors','Residential bathroom','Bespoke design','Living room','Residential architecture'], previous: 'Previous photo', next: 'Next photo' },
  fr: { categories: ['Tous','Architecture','Intérieurs','Rénovation'], filter: 'Filtrer les projets', titles: ['Salle à manger & lumière','Suite principale','Matière & bien-être','Mobilier & rythme','Couleur & caractère','Matière & paysage'], types: ['Espace résidentiel','Architecture intérieure','Salle de bains','Création sur mesure','Salon','Architecture résidentielle'], previous: 'Photo précédente', next: 'Photo suivante' },
  it: { categories: ['Tutti','Architettura','Interni','Ristrutturazione'], filter: 'Filtra i progetti', titles: ['Pranzo & luce','Suite padronale','Materia & benessere','Arredi & ritmo','Colore & carattere','Materia & paesaggio'], types: ['Spazio residenziale','Interior design','Bagno residenziale','Design su misura','Soggiorno','Architettura residenziale'], previous: 'Foto precedente', next: 'Foto successiva' },
  de: { categories: ['Alle','Architektur','Interieur','Sanierung'], filter: 'Projekte filtern', titles: ['Esszimmer & Licht','Master Suite','Material & Wohlbefinden','Möbel & Rhythmus','Farbe & Charakter','Material & Landschaft'], types: ['Wohnraum','Wohninterieur','Badezimmer','Maßanfertigung','Wohnzimmer','Wohnarchitektur'], previous: 'Vorheriges Foto', next: 'Nächstes Foto' },
  pt: { categories: ['Todos','Arquitetura','Interiores','Remodelação'], filter: 'Filtrar projetos', titles: ['Sala de jantar & luz','Suíte principal','Matéria & bem-estar','Mobiliário & ritmo','Cor & caráter','Matéria & paisagem'], types: ['Espaço residencial','Interiores residenciais','Casa de banho','Design sob medida','Sala de estar','Arquitetura residencial'], previous: 'Foto anterior', next: 'Foto seguinte' },
} as const;

type Project = (typeof projects)[number];
type Copy = (typeof translations)[keyof typeof translations];

function ProjectCard({ project, index, copy }: { project: Project; index: number; copy: Copy }) {
  const [current, setCurrent] = useState(0);
  const move = (direction: -1 | 1) => {
    setCurrent((photo) => (photo + direction + project.images.length) % project.images.length);
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setTimeout(() => move(1), 4000);
    return () => window.clearTimeout(timer);
  }, [current]);

  return (
    <article className={`project-card project-card--${project.layout}`}>
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
