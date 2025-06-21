import React, { MouseEventHandler } from 'react'
import { Consultation } from '../typescript/schemaConsultation'
import TitlePrimary from '../Ui/Contents/TitlePrimary'
import ContentsMultipleData from '../Ui/Contents/ContentsMultipleData'

type Props = {
    consultation : Consultation
    setModalConsultation :MouseEventHandler<HTMLButtonElement>
    setExpandedItems : React.Dispatch<React.SetStateAction<{
        [key: string]: boolean;
    }>>
    isExpanded : boolean
}

export default function ModalConsultation({consultation,setModalConsultation}: Props) {
  return (
    <div className='fixed top-0 left-0 bg-black bg-opacity-30 w-full h-screen flex flex-row justify-center items-center'>
                    <div className=' max-w-[900px] lg:items-start rounded-lg  shadow-xl text-center    bg-yellow-400   '>
                        <div className='w-full  flex-row flex justify-between items-center px-2 flex-wrap rounded-t-xl'>
                            <span className='px-4'></span>
                            <TitlePrimary title='EXAMINATION CLINIQUE DU PATIENT'/>
                            <button className=" text-end p-1 text-2xl  " onClick={setModalConsultation}><span className="bg-white rounded-md hover:bg-gray-100 px-2 text-red-500 font-semibold">x</span> </button>
                        </div>
                        <div className=' p-4 2xl:flex-row 2xl:flex 2xl:gap-5 lg:w-full  '>
                            <ContentsMultipleData label='Signe Generaux' data={consultation.signeGeneraux}  />
                            <ContentsMultipleData label='Antecedents Personels' data={consultation.antecedentsPersonels}/>
                            <ContentsMultipleData label='Antecedents Familiaux ' data={consultation.antecedentsFamiliaux}/>
                        </div>
                    </div>
    </div>
  )
}