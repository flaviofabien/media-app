import axios from "axios"
import { IP } from "./Ip"

export const RegisterUser  = async (newPatient : any) => {
    const res = await axios.post(IP+"/register",newPatient)
    return res.data
}

export const LoginUser  = async (newPatient : any) => {
    const res = await axios.post(IP+"/login",newPatient)
    return res.data
}
