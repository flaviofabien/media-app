import axios from "axios"
import { Examen } from "../typescript/schemaExamen"

export const fetchExamen  = async (
    page : number,limit : number , search : string , order : string ,sortBy : string 
    ) => {
    const res = await axios.get("http://localhost:3000/api/examen",
    {
        params : { page,limit,search,order,sortBy }
    })
    return res.data
}

export const fetchExamenFilter  = async (page : number,limit : number , search : string , order : string ,sortBy : string ) => {
    const res = await axios.get("http://localhost:3000/api/examenfilter",
    {
        params : { page,limit,search,order,sortBy }
    }
    )
    return res.data
}


export const AddExamen  = async (newExamen : Examen) => {
    const res = await axios.post("http://localhost:3000/api/examen",newExamen)
    return res.data.data
}
export const EditExamen  = async (newExamen : Examen , id : string) => {
    const res = await axios.put(`http://localhost:3000/api/examen/${id}`,newExamen)
    return res.data.data
}
export const fetchOneExamen  = async ( id : string) => {
    const res = await axios.get(`http://localhost:3000/api/examen/${id}`)
    return res.data.data
}
export const deleteOneExamen  = async ( id : string) => {
    const res = await axios.delete(`http://localhost:3000/api/examen/${id}`)
    return res.data.data
}