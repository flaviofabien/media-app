import { z } from 'zod';
import { Patient } from './schema';

export const ConsultationSchema = z.object({
  idPatient : z.string().optional(),
  id : z.string().optional(),
  refereAutoRefere: z.preprocess((val) => val === null ? "" : val, z.string())
    .refine(val => val !== "", {
      message: "Référence est requise 🔺",
    }),
    motif: z.preprocess((val) => {
      if (val === null) return [];
      if (!Array.isArray(val)) return []; 
      return val;
    }, z.array(z.string()))
      .refine(val => val.length > 0, {
        message: "Motif d'hospitalisation est requis 🔺",
      }),
  interneExterne: z.preprocess((val) => val === null ? "" : val, z.string())
    .refine(val => val !== "", {
      message: "Patient est requis 🔺",
    }),
  historique: z.string().min(1, "Historique est requise 🔺"),
  antecedentsPersonels: z.custom(),
  antecedentsFamiliaux: z.custom(),
  dateConsultation: z.string().min(1, "Date de Consultation est requise  🔺"),
  signeGeneraux: z.custom(),
  signePhysique: z.string().min(1, "Signe physique est requise 🔺"),
});

export type Consultation = z.infer<typeof ConsultationSchema>;

type ConsultationWithPatient = Consultation & {
  Patient: Patient;
};

export type ConsultationG = {
  data : ConsultationWithPatient[]
  totalItems : number;
  totalPages : number;
}

