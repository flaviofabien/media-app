import ContentPatient1 from '../../../../components/Ui/Contents/Patients/ContentPatient1'
import ContentPatient2 from '../../../../components/Ui/Contents/Patients/ContentPatient2'
import ContentsConsultation1All from '../../../../components/Ui/Contents/Consulations$/ContentsConsultationAll'
import ContentsMultipleData from '../../../../components/Ui/Contents/ContentsMultipleData'
import ContentsExamen from '../../../../components/Ui/Contents/Examen/ContentsExamen'
import { ShowBiologie } from '../../../../components/Ui/Contents/Examen/showType'

type Props = {
    data : any
}

export default function FormFinal({data }: Props) {
    const signeGeneraux = ShowBiologie([data.signeGeneraux]);
    const antecedentsPersonels = ShowBiologie([data.antecedentsPersonels]);
    const antecedentsFamiliaux = ShowBiologie([data.antecedentsFamiliaux]);

    return (
        <div>
        <div id="pdf-content" className="w-[1500px]">
         <div className="mt-8">
             <div className="w-full">
                <div className=' p-4 border-2 '>
                    <ContentPatient1 nom={data.nom} prenom={data.prenom}  age={data.dateNaissance}  />
                    <ContentPatient2 patient={data.patient} email={data.email} adresse={data.adresse} genre={data.genre} profession={data.profession} telephone={data.telephone} />               
                </div>
                 <ContentsConsultation1All   historique={data.historique!} dateConsultation={data.dateConsultation} refereAutoRefere={data.refereAutoRefere} motif={data.motif} signePhysique={data.signePhysique} />   
             </div>
             {
                (signeGeneraux.length !== 0 && antecedentsPersonels.length !== 0 || antecedentsFamiliaux.length !== 0 ) && 
             <div className='flex-row flex gap-5 w-full py-4 border-2 justify-between mt-4'>
                  <ContentsMultipleData label='Signe Generaux' data={data.signeGeneraux}  />
                  <ContentsMultipleData label='Antecedents Personels' data={data.antecedentsPersonels}/>
                  <ContentsMultipleData label='Antecedents Familiaux ' data={data.antecedentsFamiliaux}/>
             </div>     
             }
         </div>
         <ContentsExamen items={data} /> 
         <div className="flex flex-row justify-between">
           <div className="w-full">
               <div className="mt-4 bg-white w-full ">
                   <div className='border-2 border-gray-200 p-4 mt-4' > <h1 className='font-bold text-start text-gray-600'>Les diagnostic </h1 > <span className=" text-gray-600">{data.diagnostic.map((u: any)  => { return(<p className=''> - {u}</p>)  }  )}</span>  </div>
                   <div className='border-2 border-gray-200 p-4 mt-4' > <h1 className='font-bold text-start text-gray-600'>Les traitements </h1 > <span className=" text-gray-600">{data.traitement.map( (u : any) => { return(<p className=''> - {u}</p>)  }  )}</span>  </div>
                   <div className='border-2 border-gray-200 p-4 mt-4' > <h1 className='font-bold text-start text-gray-600'>Sortie </h1 > <span className=" text-gray-600">{data.sortie.map((u : any) => { return(<p className=''> - {u}</p>)  }  )}</span>  </div>
                    <div className="w-full my-4 p-4 mt-4 border-2"><h1> <span>Evaluation : </span> <span className="font-semibold text-gray-600">{data.evaluation}  </span>  </h1></div>
               </div>
           </div>
         </div>
       </div>
   </div>
  )
}