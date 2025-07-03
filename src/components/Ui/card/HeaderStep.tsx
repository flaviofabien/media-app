import { BsDiagram2 } from 'react-icons/bs'
import { DiErlang } from 'react-icons/di'
import { GrTest } from 'react-icons/gr'
import { PiPerson } from 'react-icons/pi'
import { TbFileNeutral } from 'react-icons/tb'

type Props = {
    step : number
    widthCss : number
    setWidth : React.Dispatch<React.SetStateAction<number>>
}

export default function HeaderStep({step,widthCss,setWidth}: Props) {
    if (step === 1 ) {
        setWidth(0); 
    } else if (step === 2) {
        setWidth(25);
    } else if (step === 3) {
        setWidth(50);
    } else if (step === 4) {
        setWidth(75);
    } else if (step === 5) {
        setWidth(100);
    } else {
        setWidth(0)
    }
    
    return (
    <div className='mt-8 flex justify-between relative'>
        <div className='w-full flex justify-between z-10 rounded-full'>
            <span className={` scale-110 p-6 bg-color-base rounded-full`}>  <PiPerson className=' text-white rounded-full ' size={20}  /> </span>
            <span className={` ${widthCss >= 25 ? "bg-color-base text-white" : "bg-gray-200 text-gray-600"} p-6  rounded-full `}>
                        <BsDiagram2 className=' ' size={20}  /> 
            </span>
            <span className={` ${widthCss >= 50 ? "bg-color-base text-white" : "bg-gray-200 text-gray-600"} p-6  rounded-full `}>  <GrTest className=' ' size={20}  /> </span>
            <span className={` ${widthCss >= 75 ? "bg-color-base text-white" : "bg-gray-200 text-gray-600"} p-6  rounded-full `}>  <DiErlang className=' ' size={20}  /> </span>
            <span className={` ${widthCss >= 100 ? "bg-color-base text-white" : "bg-gray-200 text-gray-600"} p-6  rounded-full `}>  <TbFileNeutral className=' ' size={20}  /> </span>    
        </div>
        
        <div style={{width : `${widthCss}% `}} className={`absolute -z-10 bg-color-base py-2 h-4 rounded-full  translate-y-[25px]`}>
        </div>
        <div style={{width : `100%`}} className={`absolute bg-gray-200 py-2 h-4 rounded-full -z-20 translate-y-[25px]`}>
        </div>
    </div>
  )
}