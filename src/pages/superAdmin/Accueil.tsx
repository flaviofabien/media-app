import { FaUser } from "react-icons/fa6";
import ClickTable from "../../components/Ui/card/ClickTable";
import Menu from "../../components/menu/Menu";
import HeaderBarAdmin from "../../components/header/Header";

export default function Accueil() {
  return (
    <div className='flex flex-row gap-5'>
      <Menu />
      <div className="w-full mt-8">
          <HeaderBarAdmin />
          <div className=" flex lg:flex-row flex-col items-center mt-8 gap-10 ">
              <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 px-1 py-4 rounded-2xl flex flex-row">
                  <span className="text-3xl font-bold text-white m-2"><FaUser style={{ display: "inline-block", fontSize: 40, color: "white" }} />  </span>
                  <div className="flex flex-col p-2">
                      <span className="text-xl font-bold text-white ">20</span>
                      <span className="text-white "> Nombres de Clients</span>
                  </div>
              </div>       
              <div className="w-full bg-gradient-to-r from-orange-500 to-red-500 px-1 py-4 rounded-2xl flex flex-row">
                  <span className="text-3xl font-bold text-white m-2"><FaUser style={{ display: "inline-block", fontSize: 40, color: "white" }} />  </span>
                  <div className="flex flex-col p-2">
                      <span className="text-xl font-bold text-white ">20</span>
                      <span className="text-white "> Nombres de Clients</span>
                  </div>
              </div>       
              <div className="w-full bg-gradient-to-r from-purple-500 to-fuchsia-500 px-1 py-4 rounded-2xl flex flex-row">
                  <span className="text-3xl font-bold text-white m-2"><FaUser style={{ display: "inline-block", fontSize: 40, color: "white" }} />  </span>
                  <div className="flex flex-col p-2">
                      <span className="text-xl font-bold text-white ">20</span>
                      <span className="text-white "> Nombres de Clients</span>
                  </div>
              </div>       
              <div className="w-full bg-gradient-to-r from-green-500 to-emerald-500 px-1 py-4 rounded-2xl flex flex-row">
                  <span className="text-3xl font-bold text-white m-2"><FaUser style={{ display: "inline-block", fontSize: 40, color: "white" }} />  </span>
                  <div className="flex flex-col p-2">
                      <span className="text-xl font-bold text-white ">20</span>
                      <span className="text-white "> Nombres de Clients</span>
                  </div>
              </div>       
          </div>
          
          {/* <CardState  /> */}
          <div className="flex mt-8 gap-8">
              <ClickTable />
              {/* <SourceMediumChart /> */}
          </div>
      </div>
    </div>    
  )
}