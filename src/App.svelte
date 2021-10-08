<script lang="ts">
  import "twind/shim"
  import { tw } from "twind"
  import Copy from "copy-to-clipboard"
  import logo from "./assets/svelte.png"
  import Head from "./lib/Head.svelte"
  import Kofi from "./lib/Kofi.svelte"
  import Menu from "./lib/Menu.svelte"
  import Social from "./lib/Social.svelte"
  import { rules } from "./rules";

  const url = "https://porsor.vercel.app"
  const title = "ชื่อ พส ของคุณ"

  const menuItems = [{ name: "Github", url: "https://github.com/narze/porsor" }]

  const description = "Build a single page app with Svelte, quickly."
  const imageUrl =
    "https://raw.githubusercontent.com/narze/timelapse/master/projects/porsor_home.png"
  const gtagId = null

  let output: string = ""
  let input = "สมชาย มนูญชัย"
  let copied: boolean

  function generate() {
    let [name, surname] = input.split(" ", 2)

    output = [random(name), random(surname)].join(" ")
  }

  function random(name: string) {
    if (!name) {
      return ""
    }

    const generated = rules[Math.floor(Math.random() * rules.length)](name)

    if (generated) {
      return generated
    }

    return random(name)
  }

  function copyOutput() {
    Copy(output)

    copied = true

    setTimeout(() => {
      copied = false
    }, 2000)
  }
</script>

<Kofi name="narze" label="Support Me" />
<Menu items={menuItems} />
<Social {url} {title} />
<Head {title} {description} {url} {imageUrl} {gtagId} />

<main class="w-full h-screen flex flex-col gap-2 justify-center items-center">
  <h1 class="text-6xl text-green-400 flex flex-col">{title}</h1>
  <input type="text" class="border w-60 px-2 py-1 rounded" bind:value={input} />

  <button class="border w-60 px-2 py-1 rounded" on:click={generate}>Generate</button>

  <input
    type="text"
    class="border w-60 px-2 py-1 rounded"
    placeholder="ฉายาของคุณ"
    value={output}
  />

  <button class="border w-60 px-2 py-1 rounded" on:click={copyOutput}>Copy</button>

  {#if copied}
    <p>Copied!</p>
  {/if}
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
      "Open Sans", "Helvetica Neue", sans-serif;
  }
</style>
