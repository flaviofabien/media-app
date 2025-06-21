import { MdDeleteSweep } from 'react-icons/md'
import { TbEditOff } from 'react-icons/tb'
type Props = {
    navigationPage : () => void,
    setModal : () => void
}
export default function ButtonEditDelete({navigationPage,setModal}: Props) {
  return (
    <div className="mt-4 mx-2 flex justify-between ">
        <div className="bg-white p-2 rounded-lg shadow-lg hover:bg-gray-100 cursor-pointer" onClick={navigationPage }>
            <TbEditOff size={30}  className="text-black inline-block cursor-pointer  "/> <span className="inline-block">Modifier</span> 
        </div>
        <div className="p-2 bg-red-500 bg-opacity-10 rounded-lg shadow-lg hover:bg-red-600 hover:bg-opacity-15 cursor-pointer" onClick={setModal}>
            <MdDeleteSweep size={30}   className="text-red-500 cursor-pointer   inline-block "/> <span className="text-red-500 inline-block"> Suprimer</span>
        </div>  
    </div>
  )
}