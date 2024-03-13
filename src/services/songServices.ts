import { useAuthStore } from '@/stores/auth'
import axios, { type AxiosResponse } from 'axios'

export default {
  async getToken() {
    const authStore = useAuthStore()
    try {
      const response: AxiosResponse<any> = await axios.post(
        'https://accounts.spotify.com/api/token',
        {
          grant_type: 'client_credentials',
          client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID || '',
          client_secret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET || ''
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      )
      authStore.setToken(response.data.access_token)
    } catch (error) {
      console.error('Error:', error)
      throw error
    }
  },
  async getMusicInfo(songId: string) {
    const authStore = useAuthStore()
    axios
      .get(`https://api.spotify.com/v1/tracks/${songId}`, {
        headers: {
          Authorization: `Bearer ${authStore.getToken}`
        }
      })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }
}
