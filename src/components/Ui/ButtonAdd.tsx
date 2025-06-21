import { IoPersonAdd } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Button({label,chemin}: {label : string,chemin:string}) {
  const navigate = useNavigate()
  return (
    <div className="sm:flex sm:justify-center lg:justify-start"  onClick={() =>  navigate(`${chemin}`)}>
         <div className="sm:w-[400px] sm:h-[60px] mt-4 shadow-lg cursor-pointer hover:bg-yellow-300 hover:text-black font-bold group bg-yellow-400 text-center mx-4  rounded-lg py-4"><IoPersonAdd size={30} className="inline-block group-hover:scale-[1.2] "/> {label} </div>
    </div>

 )
}