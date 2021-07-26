
import axios from 'axios';

const api=axios.create({
    baseURL:' http://localhost:8888/notebooks'
})

export default api;