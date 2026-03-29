<script>
  import { lang } from "$lib/stores/lang.js";
  import { t } from "$lib/i18n/translations.js";
  import { habilidades } from "$lib/data/habilidades.js";
  import { reveal } from "$lib/actions/reveal.js";

  let i18n = $derived(t[$lang]);
</script>

<section id="habilidades" class="section section-alt">
  <div class="container">
    <div class="section-label reveal" use:reveal>{i18n.habilidadesLabel}</div>
    <h2 class="section-title reveal reveal-delay-1" use:reveal>
      {i18n.habilidadesTitulo}
    </h2>
    <div class="skills-pills">
      {#each habilidades as skill, i}
        <span class="skill-pill reveal" style="transition-delay: {i * 0.05}s" use:reveal>
          {skill}
        </span>
      {/each}
    </div>
  </div>
</section>
<style>
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
</style>
