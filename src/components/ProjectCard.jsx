import { Link } from "react-router-dom";

export const ProjectCard = ({ proyecto }) => {
    return (
        <div className="project-card">
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>

            <div className="tags">
                {proyecto.tecnologias.map(t => (
                    <span key={t}>{t}</span>
                ))}
            </div>

            <Link to={`/projects/${proyecto.id}`} className="btn-ver">
                Ver proyecto
            </Link>
        </div>
    );
};
