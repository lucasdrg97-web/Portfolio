import { ProjectCard } from "../components/ProjectCard";

export const Projects = () => {
    const proyectos = [
        {
            id: "dashboard-finanzas",
            titulo: "Dashboard de Finanzas",
            descripcion: "Dashboard profesional con gráficos, filtros, persistencia y arquitectura modular.",
            tecnologias: ["React", "Custom Hooks", "LocalStorage", "Charts"],
        },
        {
            id: "movimientos-app",
            titulo: "Gestor de Movimientos",
            descripcion: "Aplicación completa para registrar ingresos y gastos con CRUD y modo oscuro.",
            tecnologias: ["React", "React Router", "LocalStorage"],
        }
    ];

    return (
        <div className="container fade-in projects">
            <h2>Proyectos</h2>

            <p className="projects-intro">
                Aquí puedes ver algunos de los proyectos que he desarrollado para mejorar mis habilidades como Frontend Developer.
                Todos están construidos con React y buenas prácticas de UI/UX.
            </p>

            <div className="projects-grid">
                {proyectos.map(p => (
                    <ProjectCard key={p.id} proyecto={p} />
                ))}
            </div>
        </div>
    );
};
