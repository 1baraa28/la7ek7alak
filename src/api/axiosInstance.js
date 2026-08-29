import axios from 'axios'

const axiosInstance = axios.create({
  // تم تغيير الرابط الاحتياطي ليرتبط بسيرفر Railway بدلاً من localhost
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://la7ek-7alak-production.up.railway.app/api',
})

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default axiosInstance