import TitlePrimary from '../Ui/Contents/TitlePrimary'
import { Diagnostic } from '../typescript/schemaDiagnostic'

type Props = {
    items : Diagnostic
    setModalDiagnostic : () => void
}

export default function ModalDiagnostic({items,setModalDiagnostic}: Props) {
  return (
   <div className='fixed top-0 left-0 bg-black bg-opacity-30 w-full h-screen flex flex-row justify-center items-center'>
        <div className='bg-yellow-400 w-[600px] p-4 rounded-lg'>
            <div className="w-full flex flex-row justify-between">
                <span className="px-4"></span>
                <TitlePrimary title='DIAGNOSTIC DU PATIENT'/>
                <button className=" text-end p-1 text-2xl  " onClick={setModalDiagnostic}><span className="bg-white rounded-md hover:bg-gray-100 px-2 text-red-500 font-semibold">x</span> </button>
            </div>
            <h1 className="w-full mb-4 font-bold text-center bg-white py-1 ">ID : {items.id} </h1>
            <h1 className="bg-white p-4">Diagnostic : {items.diagnostic?.map(u => {return <span className="text-gray-600 font-bold">{u},</span> }  ) } </h1>    
        </div>
    </div>

   
)
}