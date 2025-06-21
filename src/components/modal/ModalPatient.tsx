import ContentPatient1 from "../Ui/Contents/Patients/ContentPatient1"
import ContentPatient2 from "../Ui/Contents/Patients/ContentPatient2"
import TitlePrimary from "../Ui/Contents/TitlePrimary"
import { Patient } from "../typescript/schema"
type Props = {
    patient : Patient
    setModalPatient : () => void
}
export default function ModalPatient({patient,setModalPatient}: Props) {
    const age = new Date().getFullYear() - new Date(patient?.dateNaissance!).getFullYear() 
  return (
    <div className='fixed top-0 left-0 bg-black bg-opacity-30 w-full h-screen flex flex-row justify-center items-center'>
        <div className='bg-yellow-400 rounded-lg text-start'>
            <button className="w-full text-end p-1 text-2xl  " onClick={setModalPatient}><span className="bg-white rounded-md hover:bg-gray-100 px-2 text-red-500 font-semibold">x</span> </button>
            <TitlePrimary title='IDENTITE DU PATIENT'/>
            <ContentPatient1 age={age} email={patient.email} id={patient.id} prenom={patient.prenom} nom={patient.nom}  />
            <ContentPatient2 adresse={patient.adresse} genre={patient.genre} profession={patient.profession} telephone={patient.telephone} />
        </div>
    </div>
  )
}