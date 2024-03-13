// auth.ts

import { defineStore } from 'pinia'

interface AuthState {
  token: string | null
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: (): AuthState => ({
    token: null
  }),
  getters: {
    getToken: (state) => state.token
  },
  actions: {
    setToken(token: string | null) {
      this.token = token
    },
    clearToken() {
      this.token = null
    }
  }
})
