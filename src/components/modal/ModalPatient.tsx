
import TitlePrimary from "../Ui/Contents/TitlePrimary"
import { Patient } from "../typescript/schema"
type Props = {
    patient : Patient
    setModalPatient : () => void
}
export default function ModalPatient({setModalPatient}: Props) {
  return (
    <div className='fixed top-0 left-0 bg-black bg-opacity-30 w-full h-screen flex flex-row justify-center items-center'>
        <div className='bg-yellow-400 rounded-lg text-start'>
            <button className="w-full text-end p-1 text-2xl  " onClick={setModalPatient}><span className="bg-white rounded-md hover:bg-gray-100 px-2 text-red-500 font-semibold">x</span> </button>
            <TitlePrimary title='IDENTITE DU PATIENT'/>
      </div>
    </div>
  )
}