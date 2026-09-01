import { useMemo, useState } from 'react';

type Category = 'Todos' | 'Arquitectura' | 'Interiores' | 'Remodelación';

const projects = [
  {
    id: '01',
    category: 'Interiores',
    title: 'Referencia editorial 01',
    type: 'Imagen provisional',
    image: '/assets/architecture/portfolio-reference-01.jpg',
    layout: 'wide',
  },
  {
    id: '02',
    category: 'Arquitectura',
    title: 'Referencia editorial 02',
    type: 'Imagen provisional',
    image: '/assets/architecture/portfolio-reference-02.jpg',
    layout: 'tall',
  },
  {
    id: '03',
    category: 'Remodelación',
    title: 'Referencia editorial 03',
    type: 'Imagen provisional',
    image: '/assets/architecture/portfolio-reference-03.jpg',
    layout: 'square',
  },
  {
    id: '04',
    category: 'Interiores',
    title: 'Referencia editorial 04',
    type: 'Imagen provisional',
    image: '/assets/architecture/portfolio-reference-04.jpg',
    layout: 'wide',
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
              <img src={project.image} alt={`${project.title}, imagen arquitectónica provisional`} loading="lazy" />
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
