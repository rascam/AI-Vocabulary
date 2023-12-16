import {UserCreation} from "../lib/types"
import { BASE_URL } from "../data/const"



const api = {

  async loginUser(email: string, password: string) {
    const response = await fetch(`${BASE_URL}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password})
    })
    if (response.ok) {
      
      const { userId } = await response.json()
      return userId
    }
  },

  async createUser(newUser: UserCreation) {
    const response = await fetch(`${BASE_URL}users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser)
    })
    if (response.ok) {
      const userId = await response.json()
      return userId
    }
  },

  async getUserData(userId: string | undefined) {
    if (!userId) {
      return undefined
    }
    const response = await fetch(`${BASE_URL}users/${userId}`)
    if (response.ok) {
      return await response.json()
    }
  },

  async getWordsByUserId(userId: string | undefined) {
    if (!userId) {
      return undefined
    }
    const response = await fetch(`${BASE_URL}users/${userId}/words`)
    if (response.ok) {
      return await response.json()
    }
  },

  async patchUserProperty(userId: string, key: string, value: string | number | boolean) {

    const response = await fetch(`${BASE_URL}users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({key, value})
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
  },

  async createSingleWordByTerm(userId: string, term: string) {
    const response = await fetch(`${BASE_URL}users/${userId}/term?term=${term}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    })
    if (response.ok) {
      return await response.json()
    }
  },


  async patchWordProperty(wordId: number, key: string, value: string | number) {
    const response = await fetch(`${BASE_URL}words/${wordId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({key, value})
    })
  
    if (response.ok) {
      return await response.json()
    }
  },
}

export default api