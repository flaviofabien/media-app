import { IPLocal } from "../../api/Ip";
import { useContextUser } from "../../stateGlobal/ContextGlobal";


function HeaderBarAdmin() {
  const {user} = useContextUser();

  return (
    <header className=" flex justify-between items-center p-4 bg-black text-white rounded-lg shadow-md">
      <div className="flex items-center space-x-2">
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z"/>
        </svg>
        <span className="text-lg font-semibold"> {user.user.prenom} </span>
      </div>

      <div className="flex items-center space-x-3">
        <span className="text-sm font-medium"> {user.user.nom} </span>
        <img
          src={IPLocal + user.user.img}
          alt="User Avatar"
          className="w-8 h-8 rounded-full border-2 border-white"
        />
      </div>
    </header>
  );
}

export default HeaderBarAdmin;