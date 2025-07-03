import { FieldValues,  UseFormRegister } from "react-hook-form"
import ButtonInput from "../../../../components/Ui/Input/ButtonInput"
import Input from "../../../../components/Ui/Input/Input"
import InputRadio from "../../../../components/Ui/Input/InputRadio"
import InputTextarea from "../../../../components/Ui/Input/InputTextarea"
import TitleText from "../../../../components/Ui/TitleText"
import { dataAntecedant, dataAntecedantValue, dataFamilieux, dataSigneGeneraux, dataSigneGenerauxValue } from "./dataConsultation/data/data"
import InputCheckBox from "../../../../components/Ui/Input/InputCheckBox"

export type PropsForm = {
  register :UseFormRegister<FieldValues> 
  errors? :any
}

export default function FormConsultation({ register , errors }: PropsForm) {
  
  return (
    <div>
       <div  className=''>
          <TitleText label='Examination Clinique'/>
         <div className='flex gap-5 items-start '>
              <div className='w-full border-r-2 h-full pr-4'>
                <InputRadio 
                  label1='Externe' label2='Interne'  label="Patient" 
                  register={register("interneExterne", {
                    required : "Patient est requise"
                  })} 
                  error={errors.interneExterne?.message} />
                <Input 
                  type='date' 
                  label="Date de Consultation" 
                  register={register("dateConsultation", {
                    required : "Date Consultation est requise"
                  })} 
                  error={errors.dateConsultation?.message} />
                <InputRadio 
                  label1='Référé' 
                  label2='Auto-référé'  
                  label="Référé/Auto-référé" 
                  register={register("refereAutoRefere",{
                    required : "reference est requis"
                  })} 
                  error={errors.refereAutoRefere?.message} />
                <InputCheckBox 
                  data={["Dyspnée","Toux","Douleur thoracique","Hémoptysie","Altération de l’état général"]}  
                  label="Motif d'Hospitalisation" 
                  register={register("motif",{
                    required : "motif est requise"  
                  })} 
                  error={errors.motif?.message} />
                <InputTextarea  
                  label="Historique de la maladie" 
                  register={register("historique",{
                    required : "Historique est requis"
                  })} 
                  error={errors.historique?.message} />
              </div>
              <div className='w-full border-r-2 h-full'>
                <ButtonInput 
                  label="Antecedant personnels" 
                  data={dataAntecedant} 
                  register={dataAntecedantValue.map(u => register(`antecedentsPersonels.${u}`))}  />
                <ButtonInput 
                  label="Antecedant Familiaux" 
                  data={dataFamilieux} 
                  register={dataFamilieux.map(u => register(`antecedentsFamiliaux.${u}`))}  />
              </div>
              <div className='w-full'> 
                <ButtonInput 
                  label="Signe Generaux" 
                  data={dataSigneGeneraux} 
                  register={dataSigneGenerauxValue.map(u => register(`signeGeneraux.${u}`))}  />
                <Input 
                  label='Signe Physique' 
                  register={register("signePhysique", {
                    required : "signe Physique est requise"
                  })} 
                  error={errors.signePhysique?.message} />
              
              </div>
          </div>
        </div>
    </div>
  )
}