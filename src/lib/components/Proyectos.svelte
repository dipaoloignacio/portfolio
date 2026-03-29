<script>
  import { lang } from "$lib/stores/lang.js";
  import { t } from "$lib/i18n/translations.js";
  import { proyectos } from "$lib/data/proyectos.js";
  import { reveal } from "$lib/actions/reveal.js";

  let i18n = $derived(t[$lang]);
</script>

<section id="proyectos" class="section">
  <div class="container">
    <div class="section-label reveal" use:reveal>{i18n.proyectosSecLabel}</div>
    <h2 class="section-title reveal reveal-delay-1" use:reveal>
      {i18n.proyectosTitulo}
    </h2>
    <div class="projects-grid">
      {#each proyectos as proyecto, i}
        <div
          class="project-card reveal"
          style="transition-delay: {i * 0.1}s"
          use:reveal
        >
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
                >
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                  />
                </svg>
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
                >
                  <path
                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                  />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Demo
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
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
</style>
