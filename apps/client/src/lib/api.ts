const BASE_URL = "http://localhost:8080/"

const api = {

  async getUserData(userId: string) {
    const response = await fetch(`${BASE_URL}users/${userId}`)
    if (response.ok) {
      return await response.json()
    }
  },

  async getWordsByUserId(userId: string) {
    const response = await fetch(`${BASE_URL}users/${userId}/words`)
    if (response.ok) {
      return await response.json()
    }
  },

  async patchSingleUserData(userId: string, key: string, data: string | number) {
    const response = await fetch(`${BASE_URL}users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({key, data})
    })
    if (response.ok) {
      return await response.json()
    }
  },

  async createWordsByTopic(userId: string, topic: string) {
    const response = await fetch(`${BASE_URL}users/${userId}/topic?topic=${topic}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    })
    if (response.ok) {
      return await response.json()
    }
  }
}

export default api