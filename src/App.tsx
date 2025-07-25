import './App.css'

function App() {
  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo">DR</div>
          <ul className="nav-links">
            <li><a href="#about">Acerca de mí</a></li>
            <li><a href="#experience">Experiencia</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#apps">Apps</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Daniel Rodriguez</h1>
          <p className="hero-subtitle">Desarrollador Full Stack & Creador de Soluciones Digitales</p>
          <p className="hero-description">
            Apasionado por crear experiencias digitales excepcionales y resolver problemas complejos a través del código.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">Ver Proyectos</a>
            <a href="#contact" className="btn btn-secondary">Contactar</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <h2 className="section-title">Acerca de mí</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Soy un desarrollador apasionado con experiencia en crear aplicaciones web modernas y soluciones innovadoras. 
                Me especializo en tecnologías como React, Node.js, y desarrollo móvil.
              </p>
              <p>
                Mi enfoque se centra en escribir código limpio, crear interfaces intuitivas y entregar productos que realmente 
                impacten positivamente a los usuarios.
              </p>
            </div>
            <div className="skills">
              <h3>Tecnologías</h3>
              <div className="skills-grid">
                <span className="skill">React</span>
                <span className="skill">TypeScript</span>
                <span className="skill">Node.js</span>
                <span className="skill">Python</span>
                <span className="skill">MongoDB</span>
                <span className="skill">PostgreSQL</span>
                <span className="skill">AWS</span>
                <span className="skill">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience">
        <div className="container">
          <h2 className="section-title">Experiencia</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2023 - Presente</div>
              <div className="timeline-content">
                <h3>Senior Full Stack Developer</h3>
                <p className="company">Tech Solutions Inc.</p>
                <p>Desarrollo de aplicaciones web escalables y liderazgo de equipo técnico. Implementación de arquitecturas modernas y mejores prácticas.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2021 - 2023</div>
              <div className="timeline-content">
                <h3>Frontend Developer</h3>
                <p className="company">Digital Agency</p>
                <p>Creación de interfaces de usuario responsivas y optimización de rendimiento. Colaboración estrecha con equipos de diseño y UX.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2020 - 2021</div>
              <div className="timeline-content">
                <h3>Junior Developer</h3>
                <p className="company">StartUp Innovadora</p>
                <p>Desarrollo de funcionalidades web y móviles. Aprendizaje acelerado en entornos ágiles y tecnologías emergentes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="section-title">Proyectos Destacados</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">🚀</div>
              </div>
              <div className="project-content">
                <h3>E-Commerce Platform</h3>
                <p>Plataforma completa de comercio electrónico con panel de administración, pasarela de pagos y gestión de inventario.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn btn-small">Ver Demo</a>
                  <a href="#" className="btn btn-small btn-outline">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">📱</div>
              </div>
              <div className="project-content">
                <h3>Task Management App</h3>
                <p>Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones push y sincronización offline.</p>
                <div className="project-tech">
                  <span>React Native</span>
                  <span>Firebase</span>
                  <span>TypeScript</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn btn-small">Ver Demo</a>
                  <a href="#" className="btn btn-small btn-outline">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">🎨</div>
              </div>
              <div className="project-content">
                <h3>Design System</h3>
                <p>Sistema de diseño completo con componentes reutilizables, documentación interactiva y herramientas de desarrollo.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Storybook</span>
                  <span>Sass</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn btn-small">Ver Demo</a>
                  <a href="#" className="btn btn-small btn-outline">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="section apps">
        <div className="container">
          <h2 className="section-title">Mis Apps</h2>
          <div className="apps-grid">
            <div className="app-card">
              <div className="app-icon">📊</div>
              <h3>Analytics Dashboard</h3>
              <p>Dashboard interactivo para visualización de datos y métricas en tiempo real.</p>
              <div className="app-badges">
                <span className="badge">Web App</span>
                <span className="badge">React</span>
              </div>
            </div>

            <div className="app-card">
              <div className="app-icon">🎵</div>
              <h3>Music Player</h3>
              <p>Reproductor de música con playlists personalizadas y recomendaciones inteligentes.</p>
              <div className="app-badges">
                <span className="badge">Mobile</span>
                <span className="badge">React Native</span>
              </div>
            </div>

            <div className="app-card">
              <div className="app-icon">💰</div>
              <h3>Expense Tracker</h3>
              <p>Aplicación para seguimiento de gastos personales con categorización automática.</p>
              <div className="app-badges">
                <span className="badge">PWA</span>
                <span className="badge">Vue.js</span>
              </div>
            </div>

            <div className="app-card">
              <div className="app-icon">🌤️</div>
              <h3>Weather App</h3>
              <p>Aplicación del clima con pronósticos detallados y alertas meteorológicas.</p>
              <div className="app-badges">
                <span className="badge">Mobile</span>
                <span className="badge">Flutter</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">Contacto</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>¡Hablemos!</h3>
              <p>Estoy siempre interesado en nuevos proyectos y oportunidades de colaboración.</p>
              <div className="contact-links">
                <a href="mailto:daniel@example.com" className="contact-link">
                  <span>📧</span>
                  daniel@example.com
                </a>
                <a href="https://linkedin.com/in/danielrodriguez" className="contact-link">
                  <span>💼</span>
                  LinkedIn
                </a>
                <a href="https://github.com/danielrodriguez" className="contact-link">
                  <span>🐙</span>
                  GitHub
                </a>
                <a href="https://twitter.com/danielrodriguez" className="contact-link">
                  <span>🐦</span>
                  Twitter
        </a>
      </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Tu nombre" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Tu email" required />
                </div>
                <div className="form-group">
                  <textarea rows={5} placeholder="Tu mensaje" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Daniel Rodriguez. Todos los derechos reservados.</p>
        </div>
      </footer>
      </div>
  )
}

export default App
