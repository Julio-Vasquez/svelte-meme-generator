<script lang="ts">
  import { onMount } from 'svelte'

  export let username = ''
  let memeUrl: string = ''
  let loading: boolean = false

  async function generateMeme() {
    loading = true
    memeUrl = ''
    const res = await fetch('https://meme-api.com/gimme')
    const data = await res.json()
    memeUrl = data.url
    loading = false
  }

  onMount(() => {
    generateMeme()
  })
</script>

<div class="container">
  <div>
    {#if loading}
      <p>Cargando meme...</p>
    {:else if memeUrl}
      <img src={memeUrl} alt="meme" class="logo" />
    {/if}
  </div>
  <h1>👋 ¡Hola, {username}!</h1>
  <div>
    <p class="subtext">Esta app genera un meme random solo para ti 😎</p>
  </div>

  <button on:click={generateMeme}>Generar meme random</button>
</div>

<style>
  .logo {
    height: 400px;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
