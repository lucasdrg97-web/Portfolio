export const About = () => {
    return (
        <div className="container fade-in about">
            <h2>Sobre mí</h2>

            <p className="about-intro">
                Soy Lucas, un desarrollador frontend especializado en React, UI/UX y creación de aplicaciones web modernas.
                Me enfoco en construir interfaces limpias, funcionales y con una arquitectura modular que facilite el
                mantenimiento y la escalabilidad.
            </p>

            <h3>Habilidades principales</h3>
            <ul className="skills-list">
                <li>React + Hooks</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5 & CSS3</li>
                <li>UI/UX y diseño responsivo</li>
                <li>Gestión de estado</li>
                <li>LocalStorage & APIs</li>
                <li>Arquitectura modular</li>
            </ul>

            <h3>Mi enfoque</h3>
            <p className="about-intro">
                Me gusta trabajar con buenas prácticas, componentes reutilizables y una estructura clara. 
                Disfruto especialmente del diseño de interfaces, la experiencia de usuario y la creación de 
                dashboards o herramientas que resuelven problemas reales.
            </p>

            <h3>Objetivo profesional</h3>
            <p className="about-intro">
                Actualmente busco incorporarme a un equipo donde pueda seguir creciendo como frontend developer,
                aportar valor real y participar en proyectos que requieran creatividad, lógica y una buena experiencia de usuario.
            </p>

            <div className="container fade-in contact">
            <h2>Contacto</h2>

            <div className="contact-links">

                <div className="contact-item">
                    <span>📧 Email</span>
                    <a href="mailto:lucasdrg97@gmail.com">lucasdrg97@gmail.com</a>
                </div>

                <div className="contact-item">
                    <span>📱 Teléfono</span>
                    <a href="tel:+34656197757">+34 656197757</a>
                </div>
            </div>
        </div>
        </div>
    );
};
