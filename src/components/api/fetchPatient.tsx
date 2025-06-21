import axios from "axios"
import { Patient } from "../typescript/schema"

export const fetchPatient  = async (page : number | undefined,limit : number |undefined , search : string | undefined , order : string | undefined ,sortBy : string | undefined ) => {
    const res = await axios.get(`http://localhost:3000/api/patients`,
        {
            params : { page,limit,search,order,sortBy }
        }
    )
    return res.data
}
export const fetchPatientFilter  = async (page : number,limit : number , search : string , order : string ,sortBy : string ) => {
    const res = await axios.get(`http://localhost:3000/api/patientsfilter`,
        {
            params : { page,limit,search,order,sortBy }
        }
    )
    return res.data
}

export const AddPatient  = async (newPatient : Patient) => {
    const res = await axios.post("http://localhost:3000/api/patient",newPatient)
    return res.data.data
}
export const EditPatient  = async (newPatient : Patient , id : string) => {
    const res = await axios.put(`http://localhost:3000/api/patient/${id}`,newPatient)
    return res.data.data
}
export const fetchOnePatient  = async ( id : string) => {
    const res = await axios.get(`http://localhost:3000/api/patient/${id}`)
    return res.data.data
}
export const deleteOnePatient  = async ( id : string) => {
    const res = await axios.delete(`http://localhost:3000/api/patient/${id}`)
    return res.data.data
}