import { z } from 'zod';
import { Examen } from './schemaExamen';
import { Consultation } from './schemaConsultation';
import { Patient } from './schema';
import { Diagnostic } from './schemaDiagnostic';

export const SchemaTraitement = z.object({
  id : z.string().optional(),
  idExamen : z.string().optional(),
  idConsultation : z.string().optional(),
  idPatient : z.string().optional(),
  idDiagnostic : z.string().optional(),
  traitement : z.string().array(),
  evaluation : z.string(),
  sortie : z.string().array()
});

export type Traitement = z.infer<typeof SchemaTraitement>;

type ExamenWithPatientConsultationExamen = Traitement & {
  Patient: Patient; 
  Consultation : Consultation;
  Examen : Examen;
  Diagnostic : Diagnostic
};

export type TraitementG = {
  data : ExamenWithPatientConsultationExamen[]
  totalItems : number;
  totalPages : number;
}

type TraitementFussion = Traitement & {
  Patient: Patient; Consultation : Consultation ; Examen : Examen ; Diagnostic : Diagnostic
}; 

 export type TraitementOnlyG = {
  data : TraitementFussion
  totalItems : number;
  totalPages : number;
}