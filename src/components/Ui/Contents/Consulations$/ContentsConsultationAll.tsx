type Props = {
    dateConsultation?: string,
    refereAutoRefere?: string,
    motif?: string[],
    signePhysique?:string,
    historique : string

}
export default function ContentsConsultation1All({ dateConsultation,refereAutoRefere,motif,signePhysique,historique}: Props) {
  return (
      <div className="w-full mt-4 p-4 border-2">
        <div className='  w-full '>
          <div>Date : <b> {dateConsultation} </b></div> 
         
        </div>
        <div className=' border-gray-200 '> <h3 className=" inline-block">Les motifs d'hospitalisation ou consultation : </h3>  
          <span>
            {motif?.map((r : string) => {
                return(<span key={r} className='font-light'> - {r} </span>)
              })} 
          </span>
        </div>    
        <p className="my-4"> <b>Histoire de la maladie : </b> {historique}</p>
        <div> Reference : {refereAutoRefere}</div> 
        <div> Signe Physique : {signePhysique}</div> 
      </div>
  )
}