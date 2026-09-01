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

export default function ProjectGallery() {
  const [active, setActive] = useState<Category>('Todos');
  const visible = useMemo(
    () => active === 'Todos' ? projects : projects.filter((project) => project.category === active),
    [active],
  );

  return (
    <div className="portfolio-interactive">
      <div className="project-filters" aria-label="Filtrar selección de proyectos">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={active === category ? 'is-active' : ''}
            aria-pressed={active === category}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={`project-grid ${active !== 'Todos' ? 'project-grid--filtered' : ''}`} aria-live="polite">
        {visible.map((project) => (
          <article className={`project-card project-card--${project.layout}`} key={project.id}>
            <div className="project-image-wrap">
              <img src={project.image} alt={`${project.title}, proyecto de Raquel Hedo`} loading="lazy" />
              <span className="project-number">{project.id}</span>
              <span className="project-open" aria-hidden="true">↗</span>
            </div>
            <div className="project-meta">
              <div>
                <p>{project.type}</p>
                <h3>{project.title}</h3>
              </div>
              <span>{project.category}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
