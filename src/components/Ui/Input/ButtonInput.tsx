import { useState } from "react"
import {  UseFormRegisterReturn } from "react-hook-form"
type Props = {
    data : string[]
    label : string
    register : UseFormRegisterReturn[]
}
export default function ButtonInput({data,label , register}: Props) {
    const [showInput,setShowInput] = useState<{ [key: string]: boolean }>({ });
  return (
    <div>
        <h1 className=' mb-3'> {label} :  </h1>
        {
            data.map((u,index) => {
                const isShow = showInput[u] || false
                return(
                    <div className='h-10 flex justify-start items-start text-xs'>
                        <button onClick={() => setShowInput(prev => ({...prev, [u] : !isShow}) )} type='button' className='sm:w-48 w-28  sm:text-sm text-xs hover:bg-gray-100 bg-gray-200 lg:px-4 py-1 rounded-md mb-2  text-gray-600 text-start min-w-[200px]'>
                            {u}
                        </button>
                        {isShow   && <input 
                                            placeholder={`Saisir ${u === "Autre" ? "autre chose" : `${`son ${ u.toLowerCase()}`}  ` }`} 
                                            {...register[index]} 
                                            className='w-full placeholder:text-xs border-gray-200 border-[1px] rounded-md h-7 pl-2 outline-none ml-4 focus:border-2  focus:border-yellow-400' 
                                            type={`${register[index].name === "signeGeneraux.poids" || register[index].name === "signeGeneraux.taille"  ? "number" : "text" }`} /> }  
                        {
                            (isShow && (register[index].name === "signeGeneraux.poids" ))  && <span>/g</span>
                        }  
                        {
                            (isShow && (register[index].name === "signeGeneraux.taille" ))  && <span>/m</span>
                        }
                    </div>
                    
                )
            } )
        }
    </div>
  )
}