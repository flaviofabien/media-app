import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
    register : UseFormRegisterReturn;
    error? : string;
    label1 : string;
    label2 : string;
    label? : string;
}

export default function InputRadio({ label,label1,label2,register,error}: Props) {
  return (
    <div className='  p-1 sm:flex-col w-full'>
        <h1 className=' font-semibold '> {label} : </h1>
        <div className='flex flex-row'>
          <div>
              <label className=' font-semibold ' htmlFor={`${label1}`}> {label1} : </label> 
              <input className=' rounded-lg pl-2 w-8 h-5 my-1 bg-black' id={`${label1}`} type="radio" {...register} value={label1} />
          </div>
          <div>
              <label className=' font-semibold ' htmlFor={`${label2}`}> {label2} : </label> 
              <input className=' rounded-lg pl-2 w-8 h-5 my-1 bg-black' id={`${label2}`} type="radio" {...register} value={label2} />
          </div>
        </div>
        {error && <span className='text-xs text-red-500'>{error} </span> }
    </div>
  )
}