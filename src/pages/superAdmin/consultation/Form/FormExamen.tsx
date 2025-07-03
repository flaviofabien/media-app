import { useState } from 'react'
import ButtonInput from '../../../../components/Ui/Input/ButtonInput'
import TitleText from '../../../../components/Ui/TitleText'
import { bacteriologie, bacteriologieValue, bioChimie, bioChimieValue, crachats, crachatsValue, cypotologie_anatomoPathologie, cypotologie_anatomoPathologieValue, echographie, echographieValue, hematologie, hematologieValue, immunologie, immunologieValue, lba, lbaValue, liquidePonction, liquidePonctionValue, radiographieRachis, radiographieThorax, radiographieThoraxValue, radiographies, radiographiesValue, scanner, scannerValue, urines, urinesValue } from './dataExamen/data/data'
import { PropsForm } from './FormConsultation'
  
export default function FormExamen({ register  }: PropsForm) {
  const  [ examen ,setExamen] = useState({biologie : false,imagerie : false,echographie :false,cypotologie : false})
    
  return (
    <div >

        <TitleText label=' Examinen Paraclinique'/>
          <div className='lg:flex lg:flex-row'>
            <div className='w-full flex sm:justify-center flex-col sm:flex-row'>
              <button onClick={() =>  setExamen({cypotologie : false, imagerie : false,echographie : false ,biologie :!examen.biologie  })} type='button' className='text-base py-1 px-4 rounded-xl bg-color-base h-12 hover:bg-yellow-500 m-2'>Biologgie</button>
              <button onClick={() =>  setExamen({biologie : false, imagerie : false,echographie : false ,cypotologie :!examen.cypotologie  })} type='button' className='text-base py-1 px-4 rounded-xl bg-color-base h-12 hover:bg-yellow-500 m-2'>Cypotologie</button>
              <button onClick={() => setExamen({cypotologie : false, echographie : false ,biologie : false, imagerie :!examen.imagerie  })} type='button' className='text-base py-1 px-4 rounded-xl bg-color-base h-12 hover:bg-yellow-500 m-2'>Imagerie</button>
              <button onClick={() => setExamen({cypotologie : false,imagerie : false, biologie : false , echographie :!examen.echographie  }) } type='button' className='text-base py-1 px-4 rounded-xl bg-color-base h-12 hover:bg-yellow-500 m-2'>Echographie</button>
            </div>
          </div>
          <div className={`  ${examen.biologie ? "flex " : "hidden"}`}>      
            <div className='w-full'>
              <h1 className='w-full text-center font-bold  text-xl bg-white p-4'>BIOLOGIE  </h1>
              <div className='sm:flex sm:flex-row sm:justify-evenly xl:justify-between sm:flex-wrap'>
                <div className='sm:min-w-[450px] '>
                  <ButtonInput data={hematologie} label="HEMATOLOGIE" register={hematologieValue.map((value) =>  register(`hematologie.${value}`)) } />
                  <ButtonInput data={immunologie} label="IMMUNOLOGIE - Sérologgie" register={immunologieValue.map((value) =>  register(`immunologie.${value}`)) }  />
                </div>
                <div className='sm:min-w-[450px] '>
                    <ButtonInput data={bioChimie} label="BIOCHIMIE" register={bioChimieValue.map((value) =>  register(`bioChimie.${value}`)) }   />
                    <ButtonInput data={liquidePonction} label="Liquide de ponction"  register={liquidePonctionValue.map((value) =>  register(`liquidePonction.${value}`)) }/>
                   
                </div>
                <div className='sm:min-w-[450px] '>
                    <ButtonInput data={bacteriologie} label="BACTERIOLOGIE" register={bacteriologieValue.map((value) =>  register(`bacteriologie.${value}`)) }/>
                    <ButtonInput data={crachats} label="Crachats"  register={crachatsValue.map((value) =>  register(`crachats.${value}`)) } />
                    <ButtonInput data={urines} label="Urines" register={urinesValue.map((value) =>  register(`urines.${value}`)) } />
                    <ButtonInput data={lba} label="LBA"  register={lbaValue.map((value) =>  register(`urines.${value}`)) }  />
                </div>
              </div>
            </div>
          </div>
          <div className={`  ${examen.cypotologie ? "flex " : "hidden"}`}>
            <div className='w-full'>
              <h1 className='w-full text-center font-bold  text-xl bg-white p-4'>CYPOTOLOGI ANATOMO Pathologie </h1>
              <ButtonInput data={cypotologie_anatomoPathologie} label="CYTOLOGIE ET ANATOMO-PATHOLOGIE" register={cypotologie_anatomoPathologieValue.map((value) =>  register(`cypotologie_anatomoPathologie.${value}`)) }   />
            </div>
          </div>
          <div className={`  ${ examen.imagerie? "flex " : "hidden "}`}>
            <div className='w-full'>
                <h1 className='text-center font-bold text-xl bg-white p-4 '> IMAGERIES  </h1>
                <div className='lg:flex-row lg:justify-between lg:flex w-full '>
                  <div className='sm:min-w-[450px] '>
                        <ButtonInput data={radiographieThorax} label="Radiographie thorax" register={radiographieThoraxValue.map((value) =>  register(`radiographieThorax.${value}`)) } />
                        <ButtonInput data={radiographies} label="RADIOGRAPHIES" register={radiographiesValue.map((value) =>  register(`radiographies.${value}`)) } />
                        <ButtonInput data={radiographieRachis} label="Radiographie Rachis" register={radiographieRachis.map((value) =>  register(`radiographieRachis.${value}`)) } />
                  </div>
                  <div className='sm:min-w-[450px] '>
                    <ButtonInput data={scanner} label="SCANNER"  register={scannerValue.map((value) =>  register(`scanner.${value}`)) }/>
                  </div>      
                </div>
            </div> 
          </div>

          <div className={`  ${examen.echographie ? "" : "hidden "} `}>
              <h1 className='text-center font-bold text-xl bg-white p-4 '> ECHOGRAPHIE  </h1>
              <ButtonInput  data={echographie} label="ECHOGRAPHIE" register={echographieValue.map((value) =>  register(`echographie.${value}`)) } /> 
          </div>
    </div>
  )
}