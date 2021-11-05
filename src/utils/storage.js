export default {
  get: function (key) {
    const value = localStorage.getItem(key)
    if (!value) {
      return null
    }
    return JSON.parse(value)
  },

  remove: function (key) {
    localStorage.removeItem(key)
  },

  set: function (key, value, saveLocal) {
    this.remove(key)

    if (saveLocal) {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }
}
