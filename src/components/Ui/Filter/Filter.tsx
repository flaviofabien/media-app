import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { BiSolidArrowFromTop, BiSolidArrowToTop } from "react-icons/bi";
import { Params } from "../../typescript/params";

type Props = {
    paramsPatient : Params
    setParamsPatient : React.Dispatch<React.SetStateAction<{
        limit: number;
        page: number;
        sortBy: string;
        order: string;
        search: string;
    }>>
    data : any
}

export default function Filter( {  paramsPatient, setParamsPatient, data} : Props ) {
    const [ValueSearch,setValueSearch]  = useState("")
    const toggleOrder = () => {
        const newOrder = paramsPatient.order === "asc" ? "desc" : "asc";
        setParamsPatient((prev)=> ({...prev ,order : newOrder  })  )
    }
    const handleSearch = () => {
        setParamsPatient((prev)=> ({...prev ,Page : 1  ,search : ValueSearch} )  )
    }

    return (
        <div className='my-2 mx-4 sm:justify-center sm:flex '>
            <div className="lg:flex-row lg:flex lg:justify-between lg:w-full">
                <div className='sm:w-[300px] lg:mt-6 group'>
                    <div className="flex flex-row">
                        <div className="flex flex-row">
                            <span className="border-y-4 border-l-4 rounded-l-lg px-2  group-focus-within:text-yellow-400 group-focus-within:border-yellow-400 text-gray-300 flex flex-row items-center">
                                <HiSearch className="inline-block  " size={30}/>
                            </span>
                            <input  onChange={(e) => setValueSearch(e.target.value)} placeholder='Recherche passion' type="text" className='border-y-4 border-r-4 h-12 outline-none focus:bg-yellow-100 focus:border-yellow-400 pl-2 ' />
                        </div>
                        <button onClick={handleSearch } className="inline-block bg-yellow-400 rounded-r-lg px-4 hover:bg-yellow-300">Recherche</button>
                    </div>       
                </div>
                <div className='sm:w-[300px] flex flex-row justify-between'>
                    <div className="w-full">
                        <label htmlFor="">Trier Par :</label>
                        <select className='w-full bg-yellow-400 h-12 pl-2 ' onChange={(e) =>   setParamsPatient(  (prec) => ({...prec,  sortBy : e.target.value })   )}>
                            {
                                data.map((items : any) => {
                                    return(
                                        <option key={items.value} value={items.value}> {items.label} </option>
                                    )
                                } )
                            }
                        </select>
                    </div>
                    
                    <div className='sm:w-20 bg-white h-12 flex flex-col'>
                        <span className="py-2 "></span>
                        <button
                            className='bg-yellow-400 px-4 py-2 m-2'
                            onClick={toggleOrder}
                        >
                            {paramsPatient.order === "desc" ? <BiSolidArrowToTop size={32}/> : <BiSolidArrowFromTop size={32}/>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
  )
}