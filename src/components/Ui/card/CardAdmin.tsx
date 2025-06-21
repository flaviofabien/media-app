import { PatientG } from '../../typescript/schema'
import { ConsultationG } from '../../typescript/schemaConsultation'
import { TraitementG } from '../../typescript/schemaTraitement'

type Props = {
    icons : JSX.Element,
    data : PatientG | ConsultationG | TraitementG
    from : string
    label : string
}

export default function CardAdmin({icons,data,from,label}: Props) {
    
  return (
            <div className={`flex flex-row ${from}  px-1 py-1 rounded-lg `}>
                <span className=" font-bold text-white m-2"> {icons} </span>
                <div className="flex flex-col p-2">
                    <span className="text-base font-bold text-white "> {data?.length} </span>
                    <span className="text-white text-base "> Nombres de {label}</span>
                </div>
            </div>
  )
}