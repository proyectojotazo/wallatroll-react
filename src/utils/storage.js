export default {
  get: function (key) {
    const value = localStorage.getItem(key) || sessionStorage.getItem(key)
    if (!value) {
      return null
    }
    return JSON.parse(value)
  },

  set: (key, value, saveLocal) => {
    if (saveLocal) {
      localStorage.setItem(key, JSON.stringify(value))
    } else {
      sessionStorage.setItem(key, JSON.stringify(value))
    }
  },

  remove: key => {
    localStorage.removeItem(key)
    sessionStorage.removeItem(key)
  }
}
