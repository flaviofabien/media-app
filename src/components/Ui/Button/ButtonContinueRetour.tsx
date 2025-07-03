import React from 'react'

type Props = {
    step : number
    setStep : React.Dispatch<React.SetStateAction<number>>
}

export default function ButtonContinueRetour({step,setStep}: Props) {
    
  return (
    <div className='flex gap-5'>
        {
            step !== 1 && <>
                <button onClick={() => setStep(step - 1)} type='button' className='rounded-lg cursor-pointer hover:bg-gray-300 bg-gray-200 text-gray-500 px-8 py-2'>Retour</button>
                <div className='border-[0.5px] border-color-base h-10'></div>
            </> 
        }
        <button type='submit' className='rounded-lg bg-color-base text-white px-8 py-2' >Continue</button>
    </div>
  )
}

