import axios from "axios"
import { IP } from "./Ip"

export const getAllUsers  = async () => {
    const res = await axios.get(IP+"/users")
    return res.data
}