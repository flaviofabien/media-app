import { string, z } from 'zod';
import { Examen } from './schemaExamen';
import { Patient } from './schema';
import { Consultation } from './schemaConsultation';

export const DiagnosticSchema = z.object({
  idPatient : z.string().optional(),
  id : z.string().optional(),
  idConsultation : string().optional(),
  idExamen : string().optional(),
  diagnostic: z.preprocess((val) => {
    if (val === null) return [];
    if (!Array.isArray(val)) return []; 
    return val;
  }, z.array(z.string()))
    .refine(val => val.length > 0, {
      message: "Diagnostic est requis 🔺",
    }),
});

export type Diagnostic = z.infer<typeof DiagnosticSchema>;

export const defaultValuDiagnostic = {
  diagnostic : []
}

type ExamenWithPatientConsultation = Diagnostic & {
  Patient: Patient; Consultation : Consultation ; Examen : Examen
};

export type DiagnosticG = {
  data : ExamenWithPatientConsultation[]
  totalItems : number;
  totalPages : number;
}

type TraitementFussion = Diagnostic & {
  Patient: Patient; Consultation : Consultation ; Examen : Examen ; Diagnostic : Diagnostic
}; 

 export type DiagnosticOnlyG = {
  data : TraitementFussion
  totalItems : number;
  totalPages : number;
}