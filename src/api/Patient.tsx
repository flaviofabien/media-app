import axios from "axios"
import { IP } from "./Ip"

export const AddPatient  = async (newPatient : any) => {
    const res = await axios.post(IP+"/patient",newPatient)
    return res.data
}

export const getAllPatient  = async () => {
    const res = await axios.get(IP+"/patient")
    return res.data
}