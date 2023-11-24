import axios from 'axios'
function getURL() {
  if (window.location.host.includes('192.168.18.22:5173')) {
    return 'http://localhost:8000'
  } else {
    return 'https://make-your-burger-back.vercel.app/'
  }
}

const baseURL = getURL()

var api = axios.create({
  baseURL
})

export default api
