import React from 'react';
import { createRoot } from 'react-dom/client';

// --- DADOS DOS PROJETOS ---
// Adicione ou altere seus projetos aqui.
// Para a imagem, você pode usar um link de um serviço como Imgur ou deixar o nome do projeto.
const projectsData = [
  {
    title: 'Sistema de Gerenciamento',
    description: 'Dashboard administrativo para gerenciamento de chamados para controle/uso pessoal.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Typescript', 'React', 'Vite'],
    liveUrl: 'https://meucontrolepessoal.netlify.app/',
    imageText: 'Controle Pessoal'
  },
  {
    title: 'Landing Page para uma Advogada',
    description: 'Site completo para uma Advogada, apresentando serviços, feedback e depoimentos.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Typescript', 'React', 'Vite'],
    liveUrl: 'https://lading-page-advocacia.netlify.app/',
    imageText: 'Landing Page Advocacia'
  },
  {
    title: 'Website para venda de móveis',
    description: 'Site completo para uma empresa de venda de móveis, apresentando produtos, categorias e carrinho de compras.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Typescript', 'React', 'Vite'],
    liveUrl: 'https://venda-de-moveis.netlify.app/',
    imageText: 'Venda de móveis'
  },
];


const Header = () => (
  <header className="header">
    <div className="container nav">
      <a href="#" className="nav-logo">dev<span>.</span>silvver</a>
      <ul className="nav-list">
        <li><a href="#about" className="nav-link">Sobre</a></li>
        <li><a href="#projects" className="nav-link">Projetos</a></li>
        <li><a href="#contact" className="nav-link">Contato</a></li>
      </ul>
    </div>
  </header>
);

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero-content container">
      <h1>Guilherme Silvestrini</h1>
      <p className="subtitle">Desenvolvedor Front-end | Transformando ideias em experiências digitais.</p>
      <a href="#projects" className="cta-button">Meus Projetos</a>
      <a href="#contact" className="cta-button secondary">Contato</a>
    </div>
  </section>
);

const About = () => (
    <section id="about">
      <div className="container">
        <div className="about-content">
            <h2>Sobre Mim</h2>
            <p>
                Sou um desenvolvedor front-end apaixonado por criar interfaces que sejam não apenas visualmente atraentes, mas também intuitivas e eficientes. Minha jornada na programação é movida pela curiosidade e pelo desejo de construir soluções que realmente façam a diferença.
            </p>
            <p>
                Com experiência sólida no desenvolvimento de landing pages, websites institucionais e sistemas complexos, busco sempre as melhores práticas e as tecnologias mais adequadas para cada desafio.
            </p>
        </div>
        <div className="skills">
            <h3>Principais Habilidades</h3>
            <ul className="skills-list">
                <li className="skill-item">React.js</li>
                <li className="skill-item">TypeScript</li>
                <li className="skill-item">Next.js</li>
                <li className="skill-item">JavaScript (ES6+)</li>
                <li className="skill-item">HTML5 & CSS3</li>
                <li className="skill-item">Styled Components</li>
                <li className="skill-item">APIs</li>
                <li className="skill-item">Git & GitHub</li>
                <li className="skill-item">Design Responsivo</li>
                <li className="skill-item">Firebase</li>
                <li className="skill-item">UX/UI Design</li>
                <li className="skill-item">Banco de Dados</li>
            </ul>
        </div>
      </div>
    </section>
);

// FIX: Define interfaces for project data and component props to ensure type safety and fix type inference issues with the 'key' prop.
interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  imageText: string;
}

interface ProjectCardProps {
  project: Project;
  key?: number; // Add key prop to the interface
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <div className="project-card">
    <div className="project-image">{project.imageText}</div>
    <div className="project-content">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="project-tech">
        {project.tech.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
        Ver Projeto <i className="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    </div>
  </div>
);

const Projects = () => (
  <section id="projects">
    <div className="container">
      <h2>Projetos em Destaque</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
    <section id="contact">
        <div className="container">
            <h2>Vamos Conversar?</h2>
            <div className="contact-info">
                <p>
                    Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato através do meu WhatsApp ou redes sociais.
                </p>
                <a href="https://wa.me/5517997541174?text=Ol%C3%A1%2C%20Guilherme!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar." className="cta-button" target="_blank" rel="noopener noreferrer">
                  Chamar no WhatsApp
                </a>

                <div className="social-links">
                   <a href="https://www.linkedin.com/in/guilherme-silvestrini-782226233/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                   <a href="https://github.com/devsilvver" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                   <a href="mailto:contatosilvestrini@gmail.com" className="social-link" aria-label="Email"><i className="fas fa-envelope"></i></a>
                </div>
            </div>
        </div>
    </section>
);

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Guilherme Silvestrini. Todos os direitos reservados.</p>
  </footer>
);

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);