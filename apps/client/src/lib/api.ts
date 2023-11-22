const BASE_URL = "http://localhost:8080/"

const api = {

  async getUserData(userId: string) {
    const response = await fetch(`${BASE_URL}users/${userId}`)
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