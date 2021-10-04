<script lang="ts">
  import "twind/shim"
  import { tw } from "twind"
  import Copy from "copy-to-clipboard"
  import logo from "./assets/svelte.png"
  import Head from "./lib/Head.svelte"
  import Kofi from "./lib/Kofi.svelte"
  import Menu from "./lib/Menu.svelte"
  import Social from "./lib/Social.svelte"

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

  // Add new rules as functions (return false if not applicable)
  const rules = [
    function โ(str: string) {
      str = str.replace(/์$/, "")

      if (str.slice(-1).match(/[ะ-์]$/)) {
        return false
      }

      const chars = str.split("")

      return [chars.slice(0, -1).join(""), "โ", chars.slice(-1).join("")].join("")
    },

    function าคโร(str: string) {
      if (str.slice(-1) != "า") {
        return false
      }

      return str.replace(/า$/, "าคโร")
    },

    function าจโณ(str: string) {
      if (str.slice(-1) != "า") {
        return false
      }

      return str.replace(/า$/, "าจโณ")
    },

    function ามโย(str: string) {
      if (str.match(/[ก-ฮ]$/)) {
        return str + "ามโย"
      }
    },

    function าโร(str: string) {
      if (str.match(/[ก-ฮ]$/)) {
        return str + "าโร"
      }
    },

    function วํโส(str: string) {
      return str + "วํโส"
    },

    function ชโย(str: string) {
      return str + "ชโย"
    },

    function ธมฺโม(str: string) {
      return str + "ธมฺโม"
    },

    function ตโน(str: string) {
      return str + "ตโน"
    },

    function มโน(str: string) {
      return str + "มโน"
    },

    function โร(str: string) {
      return str + "โร"
    },

    function นนฺโท(str: string) {
      return str + "นนฺโท"
    },

    function ธมฺโม(str: string) {
      return str + "ธมฺโม"
    },

    function วณฺโณ(str: string) {
      return str + "วณฺโณ"
    },

    function สิโต(str: string) {
      return str + "สิโต"
    },
    
    function ตาลปุตฺโต(str: string) {
      return str + "ตาลปุตฺโต"
    },

    function วิชฺโช(str: string) {
      return str + "วิชฺโช"
    },
  ]

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
