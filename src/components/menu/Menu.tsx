import { Link, useLocation } from "react-router-dom";
import { MdOutlineMan2 } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import Logotechnova  from "../../assets/TechnovaLogo.png";
import StyleMenu from "./StyleMenu";

export default function Menu() {
  const { pathname } = useLocation()
  const MenuWindows = [
    {
        key : 1,
        path : "/",
        label : "Tableaux de Bord",
        icons : <MdSpaceDashboard size={20} className="mx-2 inline-block" />
    },
    {
        key : 2,
        path : "/patient",
        label : "patient",
        icons : <MdOutlineMan2 size={20} className="mx-2 inline-block" />
    },
    {
        key : 3,
        path : "/consultation",
        label : "Examen Clinique",
        icons : <FaUserDoctor size={20} className="mx-2 inline-block" />
    },
]
  return (
    <>
      <div className="bg-color-base h-screen  sticky left-0 top-0">
        <div className="w-60">
          <div className="py-8 p-4">
            <img className="object-cover" src={Logotechnova} alt="Logotechnova" />
          </div>
          <div className="flex flex-col gap-2 mt-8 pl-4">
            {
              MenuWindows.map((items) =>{
                const isActive = pathname === items.path;
                return(
                  <Link key={items.key} to={`${items.path}`} className={`z-10 p-3 relative ${isActive ? "bg-white text-black rounded-s-full" : "  text-white  hover:bg-opacity-80 "} `} >
                    <span> {items.icons} </span> {items.label} 
                    {isActive && ( <StyleMenu />)}
                  </Link>
                )
              })
            } 
          </div>
        </div>
      </div>
    
    </>
    
  )
}