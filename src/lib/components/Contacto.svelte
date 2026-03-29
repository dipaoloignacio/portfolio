<script>
  import { lang } from "$lib/stores/lang.js";
  import { t } from "$lib/i18n/translations.js";
  import { reveal } from "$lib/actions/reveal.js";

  const email = "dipaoloignacio1@gmail.com";
  const githubUrl = "https://github.com/dipaoloignacio";
  const linkedinUrl = "https://linkedin.com/in/ignacio-di-paolo/";

  let i18n = $derived(t[$lang]);

  let copied = $state(false);

  function copyEmail() {
    navigator.clipboard.writeText(email);
    copied = true;
    setTimeout(() => (copied = false), 2000);
  }
</script>

<section id="contacto" class="section section-contact">
  <div class="container">
    <div class="contact-inner reveal" use:reveal>
      <div class="section-label">{i18n.contactoLabel}</div>
      <h2 class="contact-title">{i18n.contactoTitulo}</h2>
      <p class="contact-desc">{i18n.contactoDesc}</p>
      <button class="btn-primary contact-btn" onclick={copyEmail}>
        {copied ? "✓ copiado!" : email}
      </button>
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

<style>
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
    cursor: pointer;
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
</style>
