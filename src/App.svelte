<script lang="ts">
  import "twind/shim"
  import { tw } from "twind"
  import logo from "./assets/svelte.png"
  import Head from "./lib/Head.svelte"
  import Kofi from "./lib/Kofi.svelte"
  import Menu from "./lib/Menu.svelte"
  import Social from "./lib/Social.svelte"

  const url = "https://porsor.vercel.app"
  const title = "PorSor Name Generator"

  const menuItems = [{ name: "Github", url: "https://github.com/narze/porsor" }]

  const description = "Build a single page app with Svelte, quickly."
  const imageUrl =
    "https://raw.githubusercontent.com/narze/timelapse/master/projects/porsor_home.png"
  const gtagId = null

  let output: string = ""
  let input = "ธนานนท์ ปฏิญญาศักดิกุล"

  function generate() {
    let [name, surname] = input.split(" ", 2)
    name = name.replace(/์$/, "")
    surname = surname.replace(/์$/, "")
    const surnameChars = surname.split("")
    const nameChars = name.split("")
    name = [nameChars.slice(0, -1).join(""), "โ", nameChars.slice(-1).join("")].join("")
    surname = [surnameChars.slice(0, -1).join(""), "โ", surnameChars.slice(-1).join("")].join("")
    output = [name, surname].join(" ")
  }
</script>

<Kofi name="narze" label="Support Me" />
<Menu items={menuItems} />
<Social {url} {title} />
<Head {title} {description} {url} {imageUrl} {gtagId} />

<main class="w-full h-screen flex flex-col gap-2 justify-center items-center">
  <h1 class="text-6xl text-green-400 flex flex-col">PorSor Name Generator</h1>
  <input type="text" class="border w-60 px-2 py-1 rounded" bind:value={input} />

  <button class="border w-60 px-2 py-1 rounded" on:click={generate}>Generate</button>

  <input
    type="text"
    class="border w-60 px-2 py-1 rounded"
    placeholder="ฉายาของคุณ"
    value={output}
  />

  <button class="border w-60 px-2 py-1 rounded" on:click={() => {}}>Copy</button>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
      "Open Sans", "Helvetica Neue", sans-serif;
  }
</style>
