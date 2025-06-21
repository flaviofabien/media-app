import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
    register : UseFormRegisterReturn;
    error? : string;
    label : string,
}
export default function InputTextarea({ label,register,error}: Props) {
  return (
    <div className='w-full  flex justify-center flex-col p-1'>
         <label className=' font-semibold p-1' htmlFor={`${label}`}> {label} : </label> 
        <textarea className= {` h-28 rounded-lg pl-2 w-full outline-none focus:border-4 border-yellow-400 ${error ? "" : "mb-4"} `}  id={`${label}`}  {...register}  />
        {error && <span className='text-xs text-red-500'>{error} </span> }
    </div>
  )
}