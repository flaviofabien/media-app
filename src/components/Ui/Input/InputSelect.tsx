import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
    register : UseFormRegisterReturn;
    error? : string;
    label : string,
    data : string[]
}
export default function InputSelect({ label,register,error,data}: Props) {
  return (
    <div className='w-full  flex justify-center flex-col p-1'>
         <label className=' font-semibold p-1' htmlFor={`${label}`}> {label} : </label> 
        <select id={`${label}`}  {...register}  className='bg-white h-11 rounded-lg pl-2'>
            {
            data?.map((option,i) =>  <option value={option} key={i}> {option} </option>)
            }
        </select>
        {error && <span className='text-xs text-red-500'>{error} </span> }
    </div>
  )
}