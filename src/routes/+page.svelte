<script>
  import { lang } from "$lib/stores/lang.js";

  const nombre = "Ignacio Di Paolo";
  const githubUrl = "https://github.com/dipaoloignacio";
  const linkedinUrl = "https://linkedin.com/in/ignacio-di-paolo/";
  const email = "ignaciodiapolo1@gmail.com";

  const habilidades = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "SQL",
    "SvelteKit",
    "Socket.IO",
    "Git",
  ];

  const proyectos = [
    {
      titulo: { es: "Chat App", en: "Chat App" },
      descripcion: {
        es: "Aplicación de chat en tiempo real con rooms, autenticación y mensajes persistentes.",
        en: "Real-time chat application with rooms, authentication and persistent messages.",
      },
      tags: ["React", "Socket.IO", "Node.js", "Express"],
      github: "https://github.com/TU_USUARIO/chat-app",
      demo: "https://chat.aconcaguachat.online/",
    },
    {
      titulo: { es: "E-commerce", en: "E-commerce" },
      descripcion: {
        es: "E-commerce de librería desarrollado con React. Permite explorar el catálogo de libros, ver el detalle de cada producto y gestionar el carrito de compras.",
        en: "Bookstore e-commerce built with React. Users can browse the catalog, view product details and manage their shopping cart.",
      },
      tags: ["React", "Sass", "React Router", "Firebase"],
      github: "https://github.com/dipaoloignacio/tienda-Ignacio-Di-Paolo",
      demo: "https://legendary-blini-1434ae.netlify.app/?",
    },
    {
      titulo: { es: "Fundacion Liliana Bodoc", en: "Liliana Bodoc Foundation" },
      descripcion: {
        es: "Sitio web institucional para la Fundación Liliana Bodoc. Incluye secciones de eventos, noticias y contacto.",
        en: "Institutional website for the Liliana Bodoc Foundation. Includes events, news and contact sections.",
      },
      tags: ["React", "Sass"],
      github: "https://github.com/dipaoloignacio/liliana-bodoc",
      demo: "https://fundacionlilianabodoc.org.ar/",
    },
    {
      titulo: { es: "Compañía El alma en un hilo", en: "El alma en un hilo" },
      descripcion: {
        es: "Sitio web creado para la artista Rosana Lopez con varias secciones para acceder a toda la información que el cliente necesita.",
        en: "Website built for artist Rosana Lopez with multiple sections covering all the information the client requested.",
      },
      tags: ["React", "Sass"],
      github: "https://github.com/dipaoloignacio/roxyPage",
      demo: "https://elalmaenunhilo.com/",
    },
    {
      titulo: { es: "Veterinaria online", en: "Online Vet" },
      descripcion: {
        es: "Landing page creada para una veterinaria, hecho con SvelteKit y Tailwind.",
        en: "Landing page for a veterinary clinic built with SvelteKit and Tailwind.",
      },
      tags: ["SvelteKit", "Tailwind", "pnpm", "Flowbite"],
      github: "https://github.com/ComplexityDevo/nomade-ui",
      demo: "https://www.veterinarianomade.com/",
    },
    {
      titulo: { es: "Elecciones Políticas", en: "Political Elections" },
      descripcion: {
        es: "Aplicación en tiempo real que muestra resultados electorales en vivo usando WebSockets. Los votos se actualizan instantáneamente sin recargar la página.",
        en: "Real-time app that displays live election results using WebSockets. Votes update instantly without refreshing the page.",
      },
      tags: ["React", "Bun", "WebSockets", "TypeScript"],
      github: "https://github.com/dipaoloignacio/political-parties-frontend",
      demo: "https://political-parties-frontend.vercel.app/",
    },
  ];

  const t = {
    es: {
      disponible: "// DISPONIBLE PARA TRABAJAR",
      hola: "Hola, soy",
      descripcion:
        "Front-end developer especializado en React y en crear interfaces rápidas, accesibles y escalables. Siempre aprendiendo, siempre construyendo.",
      verProyectos: "Ver proyectos",
      contacto: "Contacto",
      sobreMiLabel: "// SOBRE MÍ",
      sobreMiTitulo: "¿Qué hago?\nFront-end",
      sobreMiP1: "Soy un desarrollador Junior especializado en React.",
      sobreMiP2:
        "Actualmente buscando mi primera experiencia profesional donde pueda seguir creciendo y aportar valor desde el día uno.",
      anios: "años practicando",
      proyectosLabel: "proyectos",
      tecnologias: "tecnologías",
      habilidadesLabel: "// HABILIDADES",
      habilidadesTitulo: "Mi stack técnico",
      proyectosSecLabel: "// PROYECTOS",
      proyectosTitulo: "Lo que construí",
      contactoLabel: "// CONTACTO",
      contactoTitulo: "¿Trabajamos juntos?",
      contactoDesc:
        "Estoy buscando mi primera experiencia profesional. Si tenés un proyecto interesante o una oportunidad, escribime.",
      hecho: "Hecho con SvelteKit por",
    },
    en: {
      disponible: "// AVAILABLE FOR WORK",
      hola: "Hi, I'm",
      descripcion:
        "Front-end developer specialized in React, building fast, accessible and scalable interfaces. Always learning, always building.",
      verProyectos: "View projects",
      contacto: "Contact",
      sobreMiLabel: "// ABOUT ME",
      sobreMiTitulo: "What I do?\nFront-end",
      sobreMiP1: "I'm a Junior developer specialized in React.",
      sobreMiP2:
        "Currently looking for my first professional experience where I can keep growing and add value from day one.",
      anios: "years practicing",
      proyectosLabel: "projects",
      tecnologias: "technologies",
      habilidadesLabel: "// SKILLS",
      habilidadesTitulo: "My tech stack",
      proyectosSecLabel: "// PROJECTS",
      proyectosTitulo: "What I built",
      contactoLabel: "// CONTACT",
      contactoTitulo: "Let's work together?",
      contactoDesc:
        "I'm looking for my first professional experience. If you have an interesting project or opportunity, reach out.",
      hecho: "Built with SvelteKit by",
    },
  };

  let i18n = $derived(t[$lang]);
</script>

<!-- HERO -->
<section class="hero">
  <div class="hero-content">
    <div class="hero-tag reveal">{i18n.disponible}</div>
    <h1 class="reveal reveal-delay-1">
      {i18n.hola}<br />
      <span class="accent">{nombre}</span>
    </h1>
    <p class="hero-desc reveal reveal-delay-2">{i18n.descripcion}</p>
    <div class="hero-btns reveal reveal-delay-3">
      <a href="#proyectos" class="btn-primary">{i18n.verProyectos}</a>
      <a href="#contacto" class="btn-secondary">{i18n.contacto}</a>
    </div>
    <div class="hero-scroll reveal reveal-delay-4">
      <span class="scroll-line"></span>
      <span class="scroll-text">scroll</span>
    </div>
  </div>
  <div class="hero-grid"></div>
</section>

<!-- SOBRE MÍ -->
<section id="sobre-mi" class="section">
  <div class="container">
    <div class="section-label reveal">{i18n.sobreMiLabel}</div>
    <div class="sobre-grid">
      <div class="sobre-text reveal reveal-delay-1">
        <h2>{i18n.sobreMiTitulo}</h2>
        <p>{i18n.sobreMiP1}</p>
        <p>{i18n.sobreMiP2}</p>
      </div>
      <div class="sobre-stats reveal reveal-delay-2">
        <div class="stat">
          <span class="stat-num">2+</span>
          <span class="stat-label">{i18n.anios}</span>
        </div>
        <div class="stat">
          <span class="stat-num">{proyectos.length}+</span>
          <span class="stat-label">{i18n.proyectosLabel}</span>
        </div>
        <div class="stat">
          <span class="stat-num">9</span>
          <span class="stat-label">{i18n.tecnologias}</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- HABILIDADES -->
<section id="habilidades" class="section section-alt">
  <div class="container">
    <div class="section-label reveal">{i18n.habilidadesLabel}</div>
    <h2 class="section-title reveal reveal-delay-1">
      {i18n.habilidadesTitulo}
    </h2>
    <div class="skills-pills">
      {#each habilidades as skill, i}
        <span class="skill-pill reveal" style="transition-delay: {i * 0.05}s"
          >{skill}</span
        >
      {/each}
    </div>
  </div>
</section>

<!-- PROYECTOS -->
<section id="proyectos" class="section">
  <div class="container">
    <div class="section-label reveal">{i18n.proyectosSecLabel}</div>
    <h2 class="section-title reveal reveal-delay-1">{i18n.proyectosTitulo}</h2>
    <div class="projects-grid">
      {#each proyectos as proyecto, i}
        <div class="project-card reveal" style="transition-delay: {i * 0.1}s">
          <div class="project-number">0{i + 1}</div>
          <h3 class="project-title">{proyecto.titulo[$lang]}</h3>
          <p class="project-desc">{proyecto.descripcion[$lang]}</p>
          <div class="project-tags">
            {#each proyecto.tags as tag}
              <span class="tag">{tag}</span>
            {/each}
          </div>
          <div class="project-links">
            {#if proyecto.github}
              <a
                href={proyecto.github}
                target="_blank"
                rel="noopener"
                class="project-link"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  ><path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                  /></svg
                >
                GitHub
              </a>
            {/if}
            {#if proyecto.demo}
              <a
                href={proyecto.demo}
                target="_blank"
                rel="noopener"
                class="project-link project-link-demo"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  ><path
                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                  /><polyline points="15 3 21 3 21 9" /><line
                    x1="10"
                    y1="14"
                    x2="21"
                    y2="3"
                  /></svg
                >
                Demo
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CONTACTO -->
<section id="contacto" class="section section-contact">
  <div class="container">
    <div class="contact-inner reveal">
      <div class="section-label">{i18n.contactoLabel}</div>
      <h2 class="contact-title">{i18n.contactoTitulo}</h2>
      <p class="contact-desc">{i18n.contactoDesc}</p>
      <p class="btn-primary contact-btn">{email}</p>
      <div class="social-links">
        <a href={githubUrl} target="_blank" rel="noopener" class="social-link"
          >GitHub</a
        >
        <span class="social-sep">/</span>
        <a href={linkedinUrl} target="_blank" rel="noopener" class="social-link"
          >LinkedIn</a
        >
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="container">
    <span class="footer-text"
      >{i18n.hecho} <span class="accent">{nombre}</span></span
    >
  </div>
</footer>

<style>
  /* ── HERO ── */
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding: 120px 32px 80px;
  }
  .hero-grid {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(var(--border) 1px, transparent 1px),
      linear-gradient(90deg, var(--border) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(
      ellipse 80% 80% at 50% 50%,
      black 20%,
      transparent 100%
    );
    pointer-events: none;
  }
  .hero-content {
    position: relative;
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
  }
  .hero-tag {
    font-family: var(--font-mono);
    font-size: 15px;
    color: var(--accent);
    letter-spacing: 0.15em;
    margin-bottom: 20px;
  }
  .hero-content h1 {
    font-family: "Outfit", monospace;
    font-size: clamp(40px, 7vw, 80px);
    font-weight: 300;
    line-height: 1.2;
    padding-bottom: 0.1em;
    overflow: visible;
    color: var(--text-primary);
    margin-bottom: 24px;
  }
  .accent {
    color: var(--accent);
    font-weight: 500;
  }
  .hero-desc {
    font-size: 16px;
    color: var(--text-secondary);
    max-width: 520px;
    line-height: 1.8;
    margin-bottom: 40px;
  }
  .hero-btns {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 64px;
  }
  .btn-primary {
    background: var(--accent);
    color: #fff;
    padding: 12px 28px;
    border-radius: 6px;
    font-size: 13px;
    font-family: var(--font-mono);
    transition:
      opacity 0.2s,
      transform 0.2s;
    display: inline-block;
  }
  .btn-primary:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }
  .btn-secondary {
    background: transparent;
    color: var(--text-secondary);
    border: 1px solid var(--border-hover);
    padding: 12px 28px;
    border-radius: 6px;
    font-size: 13px;
    font-family: var(--font-mono);
    transition:
      border-color 0.2s,
      color 0.2s,
      transform 0.2s;
    display: inline-block;
  }
  .btn-secondary:hover {
    border-color: var(--accent-border);
    color: var(--text-primary);
    transform: translateY(-1px);
  }
  .hero-scroll {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .scroll-line {
    display: block;
    width: 40px;
    height: 1px;
    background: var(--text-muted);
  }
  .scroll-text {
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    letter-spacing: 0.15em;
  }

  /* ── SECTIONS ── */
  .section {
    padding: 100px 32px;
  }
  .section-alt {
    background: var(--bg-card);
  }
  .container {
    max-width: 1100px;
    margin: 0 auto;
  }
  .section-label {
    font-family: var(--font-mono);
    font-size: 15px;
    color: var(--accent);
    letter-spacing: 0.2em;
    margin-bottom: 24px;
  }
  .section-title {
    font-size: clamp(28px, 4vw, 42px);
    font-weight: 300;
    margin-bottom: 48px;
    color: var(--text-primary);
  }

  /* ── SOBRE MÍ ── */
  .sobre-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: start;
  }
  .sobre-text h2 {
    font-size: clamp(28px, 3vw, 38px);
    font-weight: 300;
    margin-bottom: 20px;
    line-height: 1.2;
    white-space: pre-line;
  }
  .sobre-text p {
    color: var(--text-secondary);
    font-size: 15px;
    line-height: 1.8;
    margin-bottom: 16px;
  }
  .sobre-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
  .stat {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .stat-num {
    font-size: 36px;
    font-weight: 500;
    color: var(--accent);
    font-family: var(--font-mono);
  }
  .stat-label {
    font-size: 12px;
    color: var(--text-secondary);
    font-family: var(--font-mono);
  }

  /* ── SKILLS ── */
  .skills-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  .skill-pill {
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--text-primary);
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 10px 20px;
    transition:
      border-color 0.2s,
      color 0.2s;
    cursor: default;
  }
  .skill-pill:hover {
    border-color: var(--accent-border);
    color: var(--accent);
  }

  /* ── PROYECTOS ── */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
  }
  .project-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 28px;
    transition:
      border-color 0.2s,
      transform 0.2s;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .project-card:hover {
    border-color: var(--accent-border);
    transform: translateY(-3px);
  }
  .project-number {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--accent);
    opacity: 0.6;
  }
  .project-title {
    font-size: 18px;
    font-weight: 500;
    color: var(--text-primary);
  }
  .project-desc {
    font-size: 13px;
    color: var(--text-secondary);
    line-height: 1.7;
    flex: 1;
  }
  .project-tags {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
  .tag {
    font-size: 10px;
    font-family: var(--font-mono);
    color: var(--accent);
    background: var(--accent-dim);
    border: 1px solid var(--accent-border);
    padding: 3px 10px;
    border-radius: 4px;
  }
  .project-links {
    display: flex;
    gap: 12px;
    margin-top: 4px;
  }
  .project-link {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    font-family: var(--font-mono);
    color: var(--text-secondary);
    transition: color 0.2s;
  }
  .project-link:hover {
    color: var(--text-primary);
  }
  .project-link-demo {
    color: var(--accent);
  }
  .project-link-demo:hover {
    color: var(--text-primary);
  }

  /* ── CONTACTO ── */
  .section-contact {
    text-align: center;
    padding: 120px 32px;
  }
  .contact-inner {
    max-width: 560px;
    margin: 0 auto;
  }
  .contact-title {
    font-size: clamp(32px, 5vw, 52px);
    font-weight: 300;
    margin-bottom: 16px;
  }
  .contact-desc {
    font-size: 15px;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 40px;
  }
  .contact-btn {
    font-size: 16px;
  }
  .social-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 28px;
  }
  .social-link {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--text-secondary);
    transition: color 0.2s;
  }
  .social-link:hover {
    color: var(--accent);
  }
  .social-sep {
    color: var(--text-muted);
    font-size: 12px;
  }

  /* ── FOOTER ── */
  footer {
    padding: 24px 32px;
    border-top: 1px solid var(--border);
    text-align: center;
  }
  .footer-text {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 768px) {
    .hero {
      padding: 100px 20px 60px;
    }
    .section {
      padding: 64px 20px;
    }
    .sobre-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    .sobre-stats {
      grid-template-columns: 1fr 1fr;
    }
    .projects-grid {
      grid-template-columns: 1fr;
    }
    .section-contact {
      padding: 80px 20px;
    }
  }
</style>
