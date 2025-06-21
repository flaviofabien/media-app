import { useQuery } from "react-query";
import CardAdmin from "../../components/Ui/card/CardAdmin";
import Menu from "../../components/menu/Menu";
import { fetchPatient } from "../../components/api/fetchPatient";
import { MdOutlineMan2 } from "react-icons/md";
import { fetchConsultation } from "../../components/api/fetchConsultation";
import { fetchTraitement } from "../../components/api/fetchTraitement";
export default function Accueil() {
  const {data : patients} = useQuery("patients" ,() => fetchPatient(1,5,"","",""))
  const {data : consultations} = useQuery("consultations" ,() => fetchConsultation(1,5,"","",""))
  const {data : traitement} = useQuery("traitement" ,() => fetchTraitement(1,5,"","",""))

  return (
    <div className='lg:flex lg:flex-row text-'>
      <Menu />
      <div className="h-32 flex flex-row justify-between w-full flex-wrap p-4">
        <CardAdmin  data={patients?.data} from="bg-red-500" icons={<MdOutlineMan2 size={40} />} label=" Patients"/>
        <CardAdmin  data={consultations?.data} from="bg-yellow-400" icons={<MdOutlineMan2 size={40} />} label="Consultations"/>
        <CardAdmin  data={traitement?.data} from="bg-cyan-500" icons={<MdOutlineMan2 size={40} />} label=" Traitements" />
      </div>
    </div>    
  )
}