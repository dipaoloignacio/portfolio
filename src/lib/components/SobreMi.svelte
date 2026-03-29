<script>
  import { lang } from "$lib/stores/lang.js";
  import { t } from "$lib/i18n/translations.js";
  import { proyectos } from "$lib/data/proyectos.js";
  import { reveal } from "$lib/actions/reveal.js";

  let i18n = $derived(t[$lang]);
</script>

<section id="sobre-mi" class="section">
  <div class="container">
    <div class="section-label reveal" use:reveal>{i18n.sobreMiLabel}</div>
    <div class="sobre-grid">
      <div class="sobre-text reveal reveal-delay-1" use:reveal>
        <h2>{i18n.sobreMiTitulo}</h2>
        <p>{i18n.sobreMiP1}</p>
        <p>{i18n.sobreMiP2}</p>
      </div>
      <div class="sobre-stats reveal reveal-delay-2" use:reveal>
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

<style>
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

  @media (max-width: 768px) {
    .sobre-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    .sobre-stats {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
