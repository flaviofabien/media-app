import { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { BsEyeFill } from 'react-icons/bs';
import { FaEyeSlash } from 'react-icons/fa6';

type Props = {
    register : UseFormRegisterReturn;
    error? :  any ;
    type? : string
    label : string,
    max ?: boolean
    show ? : boolean
    css? : string
}
export default function Input({ label,type,register,error,max,show,css}: Props) {
  const a = new Date()
  const Day = a.getDate()  
  const Month = a.getMonth() 
  const Years = a.getFullYear() 
  let Maxim
  if(max){
    Maxim = `${Years}-${Month + 1}-${Day}`
  } 
  let [TypeRealy,setChange] = useState(type);
  return (
    <div className='w-full flex justify-center flex-col relative'>
        <label className=' p-1' htmlFor={`${label}`}> {label} : </label> 
        <input max={Maxim}  
          className={`placeholder:text-sm h-10 rounded-lg pl-2 w-full ${css ? "" : 'max-w-[400px]'} outline-none focus:border-color-base border-2 border-gray-200   ${error ? "border-2 border-red-400" : " mb-4"} `}
          placeholder={`Entrer votre ${label.toLowerCase()} `}
          id={`${label}`} 
          type={`${TypeRealy}`} 
          {...register}  />
        { show && <div className='absolute right-0 p-4 mt-4'>
                  { TypeRealy === "password" ? <FaEyeSlash onClick={() => setChange("text")  } /> : <BsEyeFill onClick={() => setChange("password")  } /> }
                </div>}  
        { error && <span className=' max-w-60 text-xs text-red-500'>{error} </span>  }

    </div>
  )
}