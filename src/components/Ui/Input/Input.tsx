import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
    register : UseFormRegisterReturn;
    error? : string;
    type? : string
    label : string,
    max ?: boolean
}
export default function Input({ label,type,register,error,max}: Props) {
  const a = new Date()
  const Day = a.getDate()  
  const Month = a.getMonth() 
  const Years = a.getFullYear() 
  let Maxim
  if(max){
    Maxim = `${Years}-${Month + 1}-${Day}`
  } 
  return (
    <div className='w-full  flex justify-center flex-col p-1'>
         <label className=' font-semibold p-1' htmlFor={`${label}`}> {label} : </label> 
        <input max={Maxim}  className={` h-10 rounded-lg pl-2 w-full outline-none focus:border-4 border-yellow-400  ${error ? "border-4 border-red-400" : " mb-4"} `} id={`${label}`} type={`${type}`} {...register}  />
        { error && <span className=' text-xs text-red-500'>{error} </span>  }
    </div>
  )
}