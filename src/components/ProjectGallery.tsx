import { useMemo, useState } from 'react';

type Category = 'Todos' | 'Arquitectura' | 'Interiores' | 'Remodelación';

const projects = [
  {
    id: '01',
    category: 'Interiores',
    title: 'Comedor & luz',
    type: 'Espacio residencial',
    image: '/assets/raquel-projects/portfolio-dining-room.webp',
    layout: 'wide',
  },
  {
    id: '02',
    category: 'Interiores',
    title: 'Suite principal',
    type: 'Interiorismo residencial',
    image: '/assets/raquel-projects/portfolio-bedroom.webp',
    layout: 'tall',
  },
  {
    id: '03',
    category: 'Remodelación',
    title: 'Materia & bienestar',
    type: 'Baño residencial',
    image: '/assets/raquel-projects/portfolio-bathroom.webp',
    layout: 'square',
  },
  {
    id: '04',
    category: 'Interiores',
    title: 'Mobiliario & ritmo',
    type: 'Diseño a medida',
    image: '/assets/raquel-projects/portfolio-custom-divider.webp',
    layout: 'wide',
  },
  {
    id: '05',
    category: 'Interiores',
    title: 'Color & carácter',
    type: 'Sala de estar',
    image: '/assets/raquel-projects/portfolio-red-living-room.webp',
    layout: 'wide',
  },
  {
    id: '06',
    category: 'Arquitectura',
    title: 'Materia & paisaje',
    type: 'Arquitectura residencial',
    image: '/assets/raquel-projects/portfolio-residential-exterior.webp',
    layout: 'tall',
  },
] as const;

const categories: Category[] = ['Todos', 'Arquitectura', 'Interiores', 'Remodelación'];

const translations = {
  es: { categories: ['Todos','Arquitectura','Interiores','Remodelación'], filter: 'Filtrar selección de proyectos', titles: ['Comedor & luz','Suite principal','Materia & bienestar','Mobiliario & ritmo','Color & carácter','Materia & paisaje'], types: ['Espacio residencial','Interiorismo residencial','Baño residencial','Diseño a medida','Sala de estar','Arquitectura residencial'] },
  en: { categories: ['All','Architecture','Interiors','Renovation'], filter: 'Filter selected projects', titles: ['Dining & light','Primary suite','Material & wellbeing','Furniture & rhythm','Colour & character','Material & landscape'], types: ['Residential space','Residential interiors','Residential bathroom','Bespoke design','Living room','Residential architecture'] },
  fr: { categories: ['Tous','Architecture','Intérieurs','Rénovation'], filter: 'Filtrer les projets', titles: ['Salle à manger & lumière','Suite principale','Matière & bien-être','Mobilier & rythme','Couleur & caractère','Matière & paysage'], types: ['Espace résidentiel','Architecture intérieure','Salle de bains','Création sur mesure','Salon','Architecture résidentielle'] },
  it: { categories: ['Tutti','Architettura','Interni','Ristrutturazione'], filter: 'Filtra i progetti', titles: ['Pranzo & luce','Suite padronale','Materia & benessere','Arredi & ritmo','Colore & carattere','Materia & paesaggio'], types: ['Spazio residenziale','Interior design','Bagno residenziale','Design su misura','Soggiorno','Architettura residenziale'] },
  de: { categories: ['Alle','Architektur','Interieur','Sanierung'], filter: 'Projekte filtern', titles: ['Esszimmer & Licht','Master Suite','Material & Wohlbefinden','Möbel & Rhythmus','Farbe & Charakter','Material & Landschaft'], types: ['Wohnraum','Wohninterieur','Badezimmer','Maßanfertigung','Wohnzimmer','Wohnarchitektur'] },
  pt: { categories: ['Todos','Arquitetura','Interiores','Remodelação'], filter: 'Filtrar projetos', titles: ['Sala de jantar & luz','Suíte principal','Matéria & bem-estar','Mobiliário & ritmo','Cor & caráter','Matéria & paisagem'], types: ['Espaço residencial','Interiores residenciais','Casa de banho','Design sob medida','Sala de estar','Arquitetura residencial'] },
} as const;

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
        {visible.map((project) => {
          const index = projects.indexOf(project);
          return (
          <article className={`project-card project-card--${project.layout}`} key={project.id}>
            <div className="project-image-wrap">
              <img src={project.image} alt={`${copy.titles[index]}, Raquel Hedo`} loading="lazy" />
              <span className="project-number">{project.id}</span>
              <span className="project-open" aria-hidden="true">↗</span>
            </div>
            <div className="project-meta">
              <div>
                <p>{copy.types[index]}</p>
                <h3>{copy.titles[index]}</h3>
              </div>
              <span>{copy.categories[categories.indexOf(project.category)]}</span>
            </div>
          </article>);
        })}
      </div>
    </div>
  );
}
