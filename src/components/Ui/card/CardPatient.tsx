import { BsFillTelephoneFill, BsPersonCircle} from "react-icons/bs"
import Img from "../../../assets/RectangleCard.png"
import { FaMapMarkerAlt } from "react-icons/fa"
import { MdCardTravel } from "react-icons/md"
import { PiGenderIntersexBold } from "react-icons/pi"

type Props = {
    data : any
}

export default function CardPatient({data}: Props) {
  return (
    <div key={data.id} className="w-80 relative shadow-2xl rounded-3xl">
        <div className="absolute mt-8 pl-8 text-sm">
            <h1 className="font-bold">{data.nom} {data.prenom} </h1>
            <p className="text-gray-600"> {data.email} </p>
        </div>
        <img className="rounded-3xl" src={Img} alt="" />
        <span className="inline-block p-4 rounded-full border-8 border-color-base shadow-2xl absolute top-40 left-10 bg-white">
            <BsPersonCircle size={120} className="text-black" />
        </span>
        <div>
        <div>
         
          {
              data.age &&  <p className="text-gray-600 font-bold text-sm">{data.age} ans</p> 
          }
          <ul className=" px-8 pb-8 text-start flex justify-between">
            <div>
                <li><FaMapMarkerAlt className="inline-block text-color-base " size={20}/> : {data.adresse} </li>
                <li> <MdCardTravel className="inline-block text-color-base " size={20}/> : {data.profession} </li>
            </div> 
            <div>
                <li><PiGenderIntersexBold className="inline-block text-color-base " size={20} /> : {data.genre}  </li> 
                <li> {data.telephone ?  <BsFillTelephoneFill className="inline-block text-color-base " size={20} />  : "" } : {data.telephone} </li>
            </div> 
            </ul>
      </div>
        </div>
    </div>
  )
}