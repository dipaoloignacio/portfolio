<script>
  import { lang } from "$lib/stores/lang.js";
  import { t } from "$lib/i18n/translations.js";
  import { reveal } from "$lib/actions/reveal.js";
  import ParticleCanvas from "$lib/components/ParticleCanvas.svelte";

  const nombre = "Ignacio Di Paolo";
  const githubUrl = "https://github.com/dipaoloignacio";
  const linkedinUrl = "https://linkedin.com/in/ignacio-di-paolo/";

  let i18n = $derived(t[$lang]);
</script>

<section class="hero">
  <ParticleCanvas />
  <div class="hero-content">
    <div class="hero-tag reveal" use:reveal>{i18n.disponible}</div>
    <h1 class="reveal reveal-delay-1" use:reveal>
      {i18n.hola}<br />
      <span class="accent">{nombre}</span>
    </h1>
    <p class="hero-desc reveal reveal-delay-2" use:reveal>{i18n.descripcion}</p>
    <div class="hero-btns reveal reveal-delay-3" use:reveal>
      <a href="#proyectos" class="btn-primary">{i18n.verProyectos}</a>
      <a href="#contacto" class="btn-secondary">{i18n.contacto}</a>
    </div>
    <div class="hero-scroll reveal reveal-delay-4" use:reveal>
      <span class="scroll-line"></span>
      <span class="scroll-text">scroll</span>
    </div>
  </div>
  <div class="hero-grid"></div>
</section>

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
</style>
