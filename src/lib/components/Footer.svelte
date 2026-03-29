<script>
  import { lang } from "$lib/stores/lang.js";
  import { t } from "$lib/i18n/translations.js";

  const nombre = "Ignacio Di Paolo";

  let i18n = $derived(t[$lang]);
</script>

<footer>
  <div class="container">
    <span class="footer-text">
      {i18n.hecho} <span class="accent">{nombre}</span>
    </span>
  </div>
</footer>

<style>
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
</style>