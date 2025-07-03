import { useState } from "react"
import HeaderStep from "../../../components/Ui/card/HeaderStep"
import HeaderBarAdmin from "../../../components/header/Header"
import Menu from "../../../components/menu/Menu"
import FormPatient from "./Form/FormPatient"

type Props = {}

export default function AjouterConsultation({}: Props) {
  const [step,setStep] = useState(1);
  const [widthCss , setWidth] = useState(0) ;
  const  [allData,setAllData] = useState();

  return (
    <div className="w-full flex justify-between">
        <Menu />
        <div className="w-full p-8">
            <HeaderBarAdmin />
            <div>
                <HeaderStep step={step} widthCss={widthCss} setWidth={setWidth} />
                <FormPatient step={step} setStep={setStep} setAllData={setAllData} allData={allData} />
            </div>
        </div>
    </div>
  )
}