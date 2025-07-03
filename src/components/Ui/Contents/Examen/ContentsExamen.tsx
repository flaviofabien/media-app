import ContentsMultipleData from "../ContentsMultipleData"
import { ShowBiologie } from "./showType"
type Props = {
    items : any
}

export default function ContentsExamen({items}: Props) {
    const ArrayBiologie = ShowBiologie([items.hematologie,items.immunologie,items.bacteriologie
    ,items.crachats,items.urines,items.bioChimie,items.liquidePonction
    ]);
    const IMAGERIES = ShowBiologie([items.radiographieThorax,items.radiographies,items.radiographieRachis,items.scanner]);

    const ECHOGRAPHIE = ShowBiologie([items.echographie]);
    const CYPOTOLOGI = ShowBiologie([items.cypotologie_anatomoPathologie]);
    
  return (
    <>
{
         (ArrayBiologie.length !== 0 && IMAGERIES.length !== 0 || ECHOGRAPHIE.length !== 0 || CYPOTOLOGI.length !== 0) &&  <div className='mt-4 border-2 p-4'>
                {
                    ArrayBiologie.length > 0 &&  <div className="">
                    <h1 className="mt-4">BIOLOGIE : </h1>
                    <div className="flex flex-row justify-between flex-wrap gap-5">
                        <ContentsMultipleData label='Hematologie' data={items.hematologie}  />
                        <ContentsMultipleData label='Immunologie' data={items.immunologie}  />
                        <ContentsMultipleData label='Bacteriologie' data={items.bacteriologie}  />
                        <ContentsMultipleData label='Crachats' data={items.crachats}  /> 
                        <ContentsMultipleData label='Urines' data={items.urines}  />      
                        <ContentsMultipleData label='Biochimie' data={items.bioChimie}  /> 
                        <ContentsMultipleData label='Liquide Ponction' data={items.liquidePonction}  />
                    </div>
                </div>
                }
               
               {
                IMAGERIES.length > 0 && 
                <div className=" ">
                    <h1 className="mt-4">IMAGERIES  :</h1>
                    <div className="flex flex-row justify-between flex-wrap gap-5">
                        <ContentsMultipleData label='Radiographies Thorax' data={items.radiographieThorax}  /> 
                        <ContentsMultipleData label='Radiographies' data={items.radiographies}  /> 
                        <ContentsMultipleData label='Radiographies Rachis' data={items.radiographieRachis}  /> 
                        <ContentsMultipleData label='Scanner' data={items.scanner}  />
                    </div>
                </div>
               }

               {
                ECHOGRAPHIE.length > 0 && 
                <div className="">
                    <h1 className="mt-4">ECHOGRAPHIE  :</h1>
                    <div className="">
                        <ContentsMultipleData label='Echographie' data={items.echographie}  />
                    </div>
                </div>
               }
                    
                
                {
                    CYPOTOLOGI.length > 0 && 
                    <div className="">
                        <h1 className="mt-4">CYPOTOLOGI ANATOMO Pathologie  :</h1>
                        <div className="">
                            <ContentsMultipleData label='Echographie' data={items.cypotologie_anatomoPathologie}  />
                        </div>
                    </div>
                }
            </div>
    }
    </>
    
           
  )
}