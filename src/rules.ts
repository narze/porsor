// Add new rules as functions (return false if not applicable)
export const rules: Array<(data: string) => string | boolean> = [
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
