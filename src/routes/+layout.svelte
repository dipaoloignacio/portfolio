<script>
  import "../app.css";
  import { onMount } from "svelte";
  import { lang } from "$lib/stores/lang.js";

  let { children } = $props();

  let scrolled = $state(false);
  let menuOpen = $state(false);

  const navLinks = {
    es: [
      { href: "#sobre-mi", label: "sobre mí" },
      { href: "#habilidades", label: "habilidades" },
      { href: "#proyectos", label: "proyectos" },
      { href: "#contacto", label: "contacto" },
    ],
    en: [
      { href: "#sobre-mi", label: "about" },
      { href: "#habilidades", label: "skills" },
      { href: "#proyectos", label: "projects" },
      { href: "#contacto", label: "contact" },
    ],
  };

  function toggleLang() {
    lang.update((l) => (l === "es" ? "en" : "es"));
  }

  function closeMenu() {
    menuOpen = false;
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }

  onMount(() => {
    window.addEventListener("scroll", () => {
      scrolled = window.scrollY > 40;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  });
</script>

<header class:scrolled>
  <nav>
    <a href="/" class="logo">idp<span class="cursor">_</span></a>

    <ul class="nav-links" class:open={menuOpen}>
      {#each navLinks[$lang] as link}
        <li>
          <a href={link.href} onclick={closeMenu}>{link.label}</a>
        </li>
      {/each}
    </ul>

    <div class="nav-right">
      <button class="lang-btn" onclick={toggleLang}>
        {$lang === "es" ? "EN" : "ES"}
      </button>

      <button
        class="hamburger"
        class:active={menuOpen}
        onclick={() => {
          menuOpen = !menuOpen;
          if (menuOpen) {
            document.body.style.top = `-${window.scrollY}px`;
            document.body.style.position = "fixed";
            document.body.style.width = "100%";
          } else {
            closeMenu();
          }
        }}
        aria-label="menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</header>

<main>
  {@render children()}
</main>

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 20px 32px;
    transition:
      background 0.3s,
      border-color 0.3s;
    border-bottom: 1px solid transparent;
  }
  header.scrolled {
    background: rgba(8, 8, 16, 0.9);
    backdrop-filter: blur(12px);
    border-bottom-color: var(--border);
  }
  nav {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    font-family: var(--font-mono);
    font-size: 16px;
    color: var(--accent);
    letter-spacing: 0.05em;
  }
  .cursor {
    animation: blink 1s step-end infinite;
  }
  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  .nav-links {
    display: flex;
    gap: 32px;
    list-style: none;
  }
  .nav-links a {
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--text-secondary);
    letter-spacing: 0.1em;
    transition: color 0.2s;
    padding: 4px 0;
  }
  .nav-links a:hover {
    color: var(--text-primary);
  }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .lang-btn {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-secondary);
    background: transparent;
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 4px 10px;
    cursor: pointer;
    transition:
      color 0.2s,
      border-color 0.2s;
    letter-spacing: 0.1em;
  }
  .lang-btn:hover {
    color: var(--accent);
    border-color: var(--accent-border);
  }

  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    position: fixed;
    top: 16px;
    right: 20px;
    z-index: 300;
  }
  .hamburger span {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--text-secondary);
    transition:
      transform 0.3s,
      opacity 0.3s;
    transform-origin: center;
  }
  .hamburger.active span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }
  .hamburger.active span:nth-child(2) {
    opacity: 0;
    transform: scaleX(0);
  }
  .hamburger.active span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  main {
    min-height: 100vh;
  }

  @media (max-width: 768px) {
    header {
      padding: 16px 20px;
    }
    .hamburger {
      display: flex;
    }
    .nav-right .lang-btn {
      position: fixed;
      top: 20px;
      right: 64px;
      z-index: 300;
    }

    .nav-links {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(8, 8, 16, 0.98);
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 40px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s;
      z-index: 200;
    }
    .nav-links.open {
      opacity: 1;
      pointer-events: all;
    }
    .nav-links a {
      font-size: 20px;
    }
  }
</style>
