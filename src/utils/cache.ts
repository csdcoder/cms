class LocalCache {
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(...key: string[]) {
    if (key.length === 1) {
      const value = window.localStorage.getItem(key[0])
      if (value) { return JSON.parse(value) }
    } else {
      const res: string[] = []
      key.forEach((item) => {
        const value = window.localStorage.getItem(item)
        if (value) { res.push(JSON.parse(value)) }
      })
      return res
    }
  }

  deleteCache(...key: string[]) {
    key.forEach((item) => {
      window.localStorage.removeItem(item)
    })
  }

  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()