import axios from "axios"
const instance = axios.create({
    baseURL:"http://3.107.52.207:8088/api"
})
export default instance