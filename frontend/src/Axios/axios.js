import axios from "axios"
const instance = axios.create({
    baseURL:"http://3.26.47.239:8088/api"
})
export default instance