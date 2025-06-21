import axios from "axios"
import { Consultation } from "../typescript/schemaConsultation"

export const fetchConsultation  = async (page : number,limit : number , search : string , order : string ,sortBy : string ) => {
    const res = await axios.get("http://localhost:3000/api/consultations",
    {
        params : { page,limit,search,order,sortBy }
    }
    )
    return res.data
}

export const fetchConsultationFilter  = async (page : number,limit : number , search : string , order : string ,sortBy : string ) => {
    const res = await axios.get("http://localhost:3000/api/consultationsfilter",
    {
        params : { page,limit,search,order,sortBy }
    }
    )
    return res.data
}

export const AddConsultation  = async (newConsultation : Consultation) => {
    const res = await axios.post("http://localhost:3000/api/consultation",newConsultation)
    return res.data.data
}
export const EditConsultation  = async (newConsultation : Consultation , id : string) => {
    const res = await axios.put(`http://localhost:3000/api/consultation/${id}`,newConsultation)
    return res.data.data
}
export const fetchOneConsultation  = async ( id : string) => {
    const res = await axios.get(`http://localhost:3000/api/consultation/${id}`)
    return res.data.data
}
export const deleteOneConsultation  = async ( id : string) => {
    const res = await axios.delete(`http://localhost:3000/api/consultation/${id}`)
    return res.data.data
}