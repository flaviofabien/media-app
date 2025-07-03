import { MdOutlineDateRange } from "react-icons/md"

type Props = {
    dateConsultation?: string,
    refereAutoRefere?: string,
    motif?: string[],
    signePhysique?:string,
    k ?: string
    historique : string
    isExpanded ?: boolean
    setExpandedItems  : React.Dispatch<React.SetStateAction<{
      [key: string]: boolean;
  }>>
}
export default function ContentsConsultation1({ k,dateConsultation,refereAutoRefere,motif,signePhysique,historique,isExpanded,setExpandedItems}: Props) {
  return (
    <>
     <h1 className="inline-block font-bold text-start w-full text-sm bg-white p-2 mb-4"> ID : {k} </h1>
    <div key={k} className="bg-white p-4 rounded-lg w-full flex flex-row flex-wrap gap-5">
      <div>
            <h1 className=' text-gray-600 text-start'> Date de Consultation : <span className='font-semibold text-gray'> <MdOutlineDateRange color='gray' className='inline-block'/>  {dateConsultation}</span> </h1>
            <h1 className=' text-gray-600 text-start'> Référence : <span className='font-black text-semibold'> {refereAutoRefere} </span></h1>
            <h1 className='w-60  text-gray-600 text-start'> Les motifs d'hospitalisation ou consultation : {motif?.map((r : string) => {
                return(<span key={r} className='font-black text-semibold'>  {r} ,</span>)
            }   )} 
            </h1>    
            <h1 className=' text-gray-600 text-start'> Signe physique : <span className='font-semibold'> {signePhysique}</span>  </h1>
      </div>
      <div className="w-[500px]">

        <h1 className=' text-semibold text-gray-600 text-start'> Historique : <span className={`font-normal  text-sm text-gray-600  line-clamp-1 ${isExpanded ? "line-clamp-none" : "line-clamp-1"}`}>{historique} </span>  <span className='bg-black p-1 text-white rounded-md font-light cursor-pointer hover:bg-gray-700' onClick={() => setExpandedItems(prev => ({ ...prev, [k!]: !isExpanded }))}> {isExpanded ?"... Voir Moins" : "... Voir Plus"} </span>    </h1>
      </div>  
    </div>
    </>
  )
}