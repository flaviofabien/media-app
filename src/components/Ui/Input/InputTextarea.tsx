import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
    register : UseFormRegisterReturn;
    error? : any;
    label : string,
}
export default function InputTextarea({ label,register,error}: Props) {
  return (
    <div className='w-full  flex justify-center flex-col '>
         <label className=' ' htmlFor={`${label}`}> {label} : </label> 
        <textarea className= {` h-28 rounded-lg pl-2 w-full max-w-[400px] outline-none  border-color-base border-2 ${error ? "" : "mb-4"} `}  id={`${label}`}  {...register}  />
        {error && <span className='text-xs text-red-500'>{error} </span> }
    </div>
  )
}