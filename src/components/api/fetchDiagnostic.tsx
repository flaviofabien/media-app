import axios from "axios"
import { Diagnostic } from "../typescript/schemaDiagnostic"

export const fetchDiagnostic  = async (page : number,limit : number , search : string , order : string ,sortBy : string ) => {
    const res = await axios.get("http://localhost:3000/api/diagnostic",
    {
        params : { page,limit,search,order,sortBy }
    })
    return res.data
}
export const fetchDiagnosticFilter  = async (page : number,limit : number , search : string , order : string ,sortBy : string ) => {
    const res = await axios.get("http://localhost:3000/api/diagnosticfilter",
    {
        params : { page,limit,search,order,sortBy }
    })
    return res.data
}
export const AddDiagnostic  = async (newDiagnostic : Diagnostic) => {
    const res = await axios.post("http://localhost:3000/api/diagnostic",newDiagnostic)
    return res.data
}
export const EditDiagnostic  = async (newDiagnostic : Diagnostic , id : string) => {
    const res = await axios.put(`http://localhost:3000/api/diagnostic/${id}`,newDiagnostic)
    return res.data
}
export const fetchOneDiagnostic  = async ( id : string) => {
    const res = await axios.get(`http://localhost:3000/api/diagnostic/${id}`)
    return res.data.data
}
export const deleteOneDiagnostic  = async ( id : string) => {
    const res = await axios.delete(`http://localhost:3000/api/diagnostic/${id}`)
    return res.data
}