import axios from 'axios'

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          'Client-ID BreBMfVzqq2pCI7rdN3ozCgoTHNRcn8gB0yBzrIWKRs',
      },
})