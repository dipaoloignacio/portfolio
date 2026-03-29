<script>
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import { reveal } from "$lib/actions/reveal.js";

  let { children } = $props();
</script>

<Header />

<main>
  {@render children()}
</main>

<style>
  main {
    min-height: 100vh;
  }
</style>
