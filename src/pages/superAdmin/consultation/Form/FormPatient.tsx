import { useForm } from 'react-hook-form'
import TitleText from '../../../../components/Ui/TitleText'
import Input from '../../../../components/Ui/Input/Input'
import InputRadio from '../../../../components/Ui/Input/InputRadio'
import FormConsultation from './FormConsultation'
import ButtonContinueRetour from '../../../../components/Ui/Button/ButtonContinueRetour'
import FormExamen from './FormExamen'
import FormDiagnostic from './FormDiagnostic'
import FormFinal from './FormFinal'
import { useMutation, useQueryClient } from 'react-query'
import { AddPatient } from '../../../../api/Patient'
import { useNavigate } from 'react-router-dom'

type Props = {
  step : number
  setStep :  React.Dispatch<React.SetStateAction<number>>
  setAllData : React.Dispatch<React.SetStateAction<any>>
  allData : any
}

export default function FormPatient({step,setStep,allData,setAllData}: Props) {
    const {register,handleSubmit,formState:{errors}} = useForm()
    const navigate = useNavigate()

    const queryClient = useQueryClient(); 
    const mutation = useMutation(
      (allData : any) => AddPatient(allData), {
        onSuccess() {
          queryClient.invalidateQueries("patients")
          navigate("/consultation");
        },
        onError() {
          console.log("Error");
        }
      }
    )

    const Submit = (data : any) => {
        setStep(step + 1);
        setAllData({...data}); 
        if(step === 5) {
          mutation.mutate(allData)
        }
    }

    return (
    <form onSubmit={handleSubmit(Submit)} className="">
      {
        step === 1 &&  <div>
        <TitleText label="Profils de patient"  />
        <div className="sm:flex sm:flex-row gap-10">
          <Input  
            register={register("nom",{
              required : "Nom est requise"
            })} 
            error={errors.nom?.message} 
            type="text" 
            label="Nom" />
          <Input  
            register={register("prenom",{
              required : "Prenom est requise"
            })} 
            error={errors.prenom?.message} 
            type="text" 
            label="Prenom" /> 
          <Input  
            register={register("profession",{
              required : "profession est requise"
            })} 
            error={errors.profession?.message} 
            type="text" 
            label="Profession" />
        </div>
        <div className="sm:flex sm:flex-row gap-10">
          <Input  
            register={register("adresse",{
              required : "addresse est requise"
            })} 
            error={errors.adresse?.message} 
            type="text" 
            label="Adresse" />
          <Input  
            register={register("email")}  
            type="text" 
            label="Email (Facultatif)" />
          <Input  
            register={register("telephone")}  
            type="number" 
            label="Telephone (Facultatif) " />
        </div>
        <div className="sm:flex sm:flex-row gap-10">
          <Input 
            max={true} 
            register={register("dateNaissance",{
              required : "Date est requise"
            })} 
            error={errors.dateNaissance?.message} 
            type="date" 
            label="Date de Naissance" />
          <InputRadio 
            label="Genre" 
            register={register("genre",{
              required : "Choissiser un sex"
            })} 
            error={errors.genre?.message} 
            label1="Maxulin" label2="Feminin"/>
        </div>
      </div>
      }
      
      { step === 2 && <FormConsultation errors={errors}  register={register} />} 
      { step === 3 && <FormExamen  register={register} />} 
      { step === 4 && <FormDiagnostic errors={errors}  register={register} />} 
      { step === 5 && <FormFinal data={allData} />} 
      <div className='my-8 h-[2px] bg-color-base'>

      </div>
      <ButtonContinueRetour step={step} setStep={setStep} />
    </form>
 )
}