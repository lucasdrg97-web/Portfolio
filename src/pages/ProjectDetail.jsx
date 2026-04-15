import { useParams } from "react-router-dom";

export const ProjectDetail = () => {
    const { id } = useParams();

    // Información de cada proyecto
    const proyectos = {
        "dashboard-finanzas": {
            titulo: "Dashboard de Finanzas",
            descripcion: "Dashboard profesional con gráficos, filtros, persistencia y arquitectura modular.",
            tecnologias: ["React", "Custom Hooks", "LocalStorage", "Charts.js"],
            problema: "Permite visualizar ingresos y gastos de forma clara y ordenada.",
            aprendizaje: "Aprendí a trabajar con gráficos, estados derivados, filtros y arquitectura modular.",
            retos: "Sincronizar filtros, cálculos y gráficos sin perder rendimiento.",
            repo: "https://github.com/lucasdrg97-web/dashboard-finanzas",
            demo: "https://dashboard-finanzas-ten.vercel.app",
        },

        "movimientos-app": {
            titulo: "Gestor de Movimientos",
            descripcion: "Aplicación completa para registrar ingresos y gastos con CRUD, tabla profesional y modo oscuro.",
            tecnologias: ["React", "React Router", "LocalStorage"],
            problema: "Permite gestionar movimientos financieros de forma sencilla y visual.",
            aprendizaje: "Aprendí a manejar rutas, formularios controlados, validaciones y modo oscuro persistente.",
            retos: "Diseñar una tabla profesional, manejar estados complejos y persistencia.",
            repo: "https://github.com/lucasdrg97-web/gestor-movimientos",
            demo: "https://gestor-movimientos.vercel.app",
        }
    };

    const proyecto = proyectos[id];

    if (!proyecto) {
        return (
            <div className="container fade-in">
                <h2>Proyecto no encontrado</h2>
            </div>
        );
    }

    return (
        <div className="container fade-in project-detail">
            <h2>{proyecto.titulo}</h2>

            <p className="project-desc">{proyecto.descripcion}</p>

            <h3>Tecnologías utilizadas</h3>
            <ul className="tech-list">
                {proyecto.tecnologias.map(t => (
                    <li key={t}>{t}</li>
                ))}
            </ul>

            <h3>Problema que resuelve</h3>
            <p className="project-parrafo">{proyecto.problema}</p>

            <h3>Qué aprendí</h3>
            <p className="project-parrafo">{proyecto.aprendizaje}</p>

            <h3>Retos técnicos</h3>
            <p className="project-parrafo">{proyecto.retos}</p>

            <div className="project-links">
                <a href={proyecto.repo} target="_blank" className="btn-primary">
                    Ver repositorio
                </a>
                <a href={proyecto.demo} target="_blank" className="btn-secondary">
                    Ver demo
                </a>
            </div>
        </div>
    );
};
