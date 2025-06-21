import { Consultation } from "./schemaConsultation";
export const generateDefaultValuesConsultation = (data?: Partial<Consultation>) => ({
    id: data?.id || "",
    motif: data?.motif || [''],
    idPatient: data?.idPatient || "",
    refereAutoRefere: data?.refereAutoRefere || "",
    historique: data?.historique || "",
    antecedentsPersonels: data?.antecedentsPersonels || "",
    antecedentsFamiliaux: data?.antecedentsFamiliaux || "",
    dateConsultation: data?.dateConsultation || "",
    signeGeneraux : data?.signeGeneraux || "" ,
    signePhysique : data?.signePhysique || ""
  });

export const defaultValue = {
  interneExterne : "",
  antecedentsPersonels : {
    medicaux : "",
    chirurgicaux : "",
    gynecoObstetriques : "",
    modeDeVie : "",
    habitudesToxiques : '',
    allergies : "",
    autre : ""
  },
  antecedentsFamiliaux : {
    asme : "",
    diabete : "",
    cancer : "",
    tension : "",
    cardiopatie : "",
    autre : ""

  },
  signeGeneraux : {
    tensionArtérielle : "",
    frequenceCardiaque : "",
    fréquenceRespiratoire : "",
    temperature : "",
    spo2 : "",
    poids : 0,
    taille : 0,
    autre : ""
  } 
}