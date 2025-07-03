import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
    register : UseFormRegisterReturn;
    error? : any;
    label : string,
    data : string[]
}
export default function InputSelect({ label,register,error,data}: Props) {
  return (
    <div className='flex flex-col'>
         <label className=' block ' htmlFor={`${label}`}> {label} : </label> 
        <select id={`${label}`} className='pl-2 mt-2 py-2 rounded-lg bg-white block w-60' {...register}  >
            {
            data?.map((option,i) =>  <option className=' ' value={option} key={i}> {option} </option>)
            }
        </select>
        {error && <span className='text-xs text-red-500'>{error} </span> }
    </div>
  )
}