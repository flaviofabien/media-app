import ContentsMultipleData from "../Ui/Contents/ContentsMultipleData"
import TitlePrimary from "../Ui/Contents/TitlePrimary"
import { Examen } from "../typescript/schemaExamen"
type Props = {
    items : Examen
    setModalExamen : () => void
}
export default function ModalExamen({items,setModalExamen}: Props) {
  return (
    <div className='fixed top-0 left-0 bg-black bg-opacity-30 w-full h-screen flex flex-row justify-center items-center'>
        <div className='p-2 gap-4 bg-yellow-400 lg:items-start rounded-lg  shadow-xl text-center  lg:flex-wrap lg:flex-col lg:flex   '>
                <div className="w-full flex flex-row justify-between">
                    <span className="px-4"></span>
                    <TitlePrimary title='EXAMINATION PARACLINIQUE DU PATIENT'/>
                    <button className=" text-end p-1 text-2xl  " onClick={setModalExamen}><span className="bg-white rounded-md hover:bg-gray-100 px-2 text-red-500 font-semibold">x</span> </button>

                </div>
                <div className=" px-2 rounded-xl w-full ">
                    <h1 className="w-full font-bold text-center bg-white py-2 rounded-lg">BIOLOGIE :</h1>
                    <div className="flex flex-row justify-between flex-wrap gap-5">
                        <div className=' rounded-lg  text-start mt-4 flex flex-col gap-4 '>
                            <ContentsMultipleData label='Hematologie' data={items.hematologie}  />
                            <ContentsMultipleData label='Immunologie' data={items.immunologie}  />
                            <ContentsMultipleData label='Cypotologie Anatomo-Pathologie' data={items.cypotologie_anatomoPathologie}  />   
                        </div>
                        <div className=' rounded-lg  text-start mt-4 flex flex-col gap-4'>
                            <ContentsMultipleData label='Bacteriologie' data={items.bacteriologie}  />
                            <ContentsMultipleData label='Crachats' data={items.crachats}  /> 
                            <ContentsMultipleData label='Urines' data={items.urines}  />      
                        </div>
                        <div className=' rounded-lg  text-start mt-4 flex flex-col gap-4'>
                            <ContentsMultipleData label='Biochimie' data={items.bioChimie}  /> 
                            <ContentsMultipleData label='Liquide Ponction' data={items.liquidePonction}  />
                        </div>
                    </div>
                </div>
               
                <div className=" flex flex-row justify-between flex-wrap gap-5">
                    <div className=" ml-2 rounded-xl">
                        <h1 className="w-full text-center bg-white px-4 py-2 font-semibold rounded-md">IMAGERIES  :</h1>
                        <div className="flex flex-row justify-between flex-wrap gap-5 ">
                            <div className='p-4 rounded-lg  text-start mt-4 '>
                                <div className="flex flex-col gap-4">
                                    <ContentsMultipleData label='Radiographies Thorax' data={items.radiographieThorax}  /> 
                                    <ContentsMultipleData label='Radiographies' data={items.radiographies}  /> 
                                    <ContentsMultipleData label='Radiographies Rachis' data={items.radiographieRachis}  /> 
                                    
                                </div>
                            </div>
                            <div className='p-4 rounded-lg  text-start mt-4 '>
                                <div className="flex flex-col gap-4">
                                    <ContentsMultipleData label='Scanner' data={items.scanner}  />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" ml-2 rounded-xl">
                        <h1 className="w-full text-center bg-white px-4 py-2 font-semibold rounded-md">ECHOGRAPHIE  :</h1>
                        <div className="flex flex-row justify-between flex-wrap gap-5 ">
                            <div className='p-4 rounded-lg  text-start mt-4 '>
                                <ContentsMultipleData label='Echographie' data={items.echographie}  />
                            </div>
                        </div>
                    </div>
                  
                    
                    <div className=" ml-2 rounded-xl">
                        <h1 className="w-full text-center bg-white px-4 py-2 font-semibold rounded-md">CYPOTOLOGI ANATOMO Pathologie  :</h1>
                        <div className="flex flex-row justify-between flex-wrap gap-5 ">
                            <div className='p-4 rounded-lg  text-start mt-4 '>
                                <ContentsMultipleData label='Echographie' data={items.cypotologie_anatomoPathologie}  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}