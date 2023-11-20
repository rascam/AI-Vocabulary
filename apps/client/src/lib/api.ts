const BASE_URL = "http://localhost:8080/"

const api = {

  async getUserData(userId: string) {
    const response = await fetch(`${BASE_URL}users/${userId}`)
    if (response.ok) {
      return await response.json()
    }
  },

  async createCardsByTopic(userId: string, topic: string) {
    const response = await fetch(`${BASE_URL}users/${userId}?topic=${topic}`, {
      method: "POST"
    })
    if (response.ok) {
      return await response.json()
    }
  }

}

export default api