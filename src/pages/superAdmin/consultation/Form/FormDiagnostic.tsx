import Input from "../../../../components/Ui/Input/Input";
import InputCheckBox from "../../../../components/Ui/Input/InputCheckBox";
import { PropsForm } from "./FormConsultation";
import { diagnostic } from "./dataDiagnostic/data";

export default function FormDiagnostic({register , errors }: PropsForm) {
  return (
    <div >
        <div className="sm:flex sm:flex-row sm:justify-between gap-5 mt-8">
            <div className="w-full border-r-2 border-b mt-4">
                <InputCheckBox 
                data={diagnostic} 
                label="Diagnostic" 
                register={register("diagnostic",{
                    required : "Diagnostic est requise"      
                })} 
                error={errors.diagnostic?.message} />
            </div>
            <div className="w-full border-r-2 border-b mt-4">
                <InputCheckBox 
                    data={["Diurétique" ,"Antihistaminique","Drainage","IPP" ,"Oxygène" ,"VNI" , "Vitaminothérapie","Antituberculeux"]} 
                    register={register("traitement",{
                        required : "Traitement est requise"      
                    })} 
                    error={errors.traitement?.message} 
                    label="Traitements" />
            </div>
        </div>
        <div className="sm:flex sm:flex-row sm:justify-between gap-5">
            <div className="w-full border-r-2 border-b mt-4">
                <Input  
                    register={register("evolution",{
                        required : "Evolution est requis"
                    })} 
                    error={errors.evolution?.message} 
                    label="Evolution" />
            </div>
            <div className="w-full border-r-2 border-b mt-4">
                <InputCheckBox 
                    data={["SORTIE NORMALE","SORTIE AVEC DECHARGE(contre avis médical)","EVADE", "DECEDE" ,"TRANSFERT"]}  
                    register={register("sortie",{
                        required : "Sortie est requis"
                    })} 
                    error={errors.sortie?.message} label="Sortie" />     
            </div>
        </div>
    </div>
  )
}