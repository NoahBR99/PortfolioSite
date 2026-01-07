import './ProjectSelector.css';

const ProjectSelector = ({ projects, activeProject, onSelect }) => (
  <section className="section project-selector section-white">
    <div className="container">
      <div className="project-selector-head">
        <div>
          <p className="eyebrow">Case studies</p>
        </div>
        <div className="project-selector-controls" role="group" aria-label="Project selection">
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              className={`project-selector-btn project-${project.id} ${
                activeProject === project.id ? 'is-active' : ''
              }`}
              aria-pressed={activeProject === project.id}
              onClick={() => onSelect(project.id)}
              aria-label={project.label}
            >
              <span className="project-selector-logo">
                {project.logoSrc ? (
                  <img src={project.logoSrc} alt="" />
                ) : (
                  <span className="project-selector-text">{project.label}</span>
                )}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProjectSelector;
