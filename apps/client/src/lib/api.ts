const BASE_URL = "http://localhost:8080/"

const api = {

  async getUserData(userId: string) {
    const response = await fetch(`${BASE_URL}users/${userId}`)
    if (response.ok) {
      return await response.json()
    }
  }

  
}

export default api