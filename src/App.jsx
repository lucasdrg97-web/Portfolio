import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { ProjectDetail } from "./pages/ProjectDetail";
import { About } from "./pages/About";
import Footer from "./components/Footer";

export const App = () => {
    return (
        <BrowserRouter>

            <nav className="navbar">
                <Link className="navbarText" to="/">Inicio</Link>
                <Link to="/projects">Proyectos</Link>
                <Link to="/about">Sobre mí</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/about" element={<About />} />
            </Routes>
    
            <Footer />
        </BrowserRouter>
    );
};
