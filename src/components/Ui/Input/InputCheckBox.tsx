import { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
    register : UseFormRegisterReturn;
    error? : string;
    label : string,
    data : string[],
    none ?: string
}
export default function InputCheckBox({ label,register,error,data,none}: Props) {
    const [showInput, setShowInput] = useState(false);
    const [autherData,setAutherData] = useState("")

    const HandleClick = (auter : string) => {
        data[data.length] = auter
        setShowInput(false)
    }

   
  return (
    <div className='w-full  flex flex-col'>
            <label className=' p-1'> {label} : </label>
            <div className={`${error ? "":"mb-4" } `}>
                    {
                        data?.map((option) => (
                            <>
                            <div key={option} className='inline-block mr-4 '>
                                <label className=' font-light' htmlFor={`${option}`}> {option} : </label> 
                                <input id={`${label}`} {...register}  type='checkbox' className='h-4 w-6' value={option}   /> 
                            </div>
                            </>
                        ) ) 
                    } 
                    <button onClick={() => setShowInput(!showInput)} type='button' className={`${none}  bg-yellow-400 px-4 rounded-md hover:bg-yellow-300 group`}>... autre (a saisir )</button>
                    {showInput && ( <div> <input value={autherData} onChange={(e) =>
                        {
                            setAutherData(e.target.value)
                        } } type="text" className='inline-block mt-2 p-1 border rounded-md' />


                        
                         <button type='button' onClick={() => HandleClick(autherData)  } className={`px-4 bg-yellow-400 hover:bg-yellow-300 ml-2 rounded-md py-1 `}>ok</button> </div>
                    )}
                        
            </div>
            
        {error && <span className='text-xs text-red-500'>{error} </span> }
    </div>
  )
}