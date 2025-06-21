import axios from "axios"
import { Traitement} from "../typescript/schemaTraitement"

export const fetchTraitement  = async (page : number,limit : number , search : string , order : string ,sortBy : string ) => {
    const res = await axios.get("http://localhost:3000/api/traitement",
    {
        params : { page,limit,search,order,sortBy }
    })
    return res.data
}

export const AddTraitement  = async (newTraitement : Traitement) => {
    const res = await axios.post("http://localhost:3000/api/traitement",newTraitement)
    return res.data
}
export const EditTraitement  = async (newTraitement : Traitement , id : string) => {
    const res = await axios.put(`http://localhost:3000/api/traitement/${id}`,newTraitement)
    return res.data
}
export const fetchOneTraitement  = async ( id : string) => {
    const res = await axios.get(`http://localhost:3000/api/traitement/${id}`)
    return res.data
}
export const deleteOneTraitement  = async ( id : string) => {
    const res = await axios.delete(`http://localhost:3000/api/traitement/${id}`)
    return res.data
}