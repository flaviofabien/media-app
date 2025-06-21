import { z } from 'zod';

export const patientSchema = z.object({
  id : z.string().optional(),
  nom: z.string().min(1, "Nom est requise 🔺"),
  prenom: z.string().min(1, "Prénom est requis 🔺"),
  profession: z.string().min(1, "Pofession est requise 🔺"),
  adresse: z.string().min(1, "Adresse est requise 🔺"),
  age:z.number().optional(),
  email: z.custom(),
  telephone: z.custom(),
  dateNaissance: z.string().min(1, "Date de Naissance est requise  est requise 🔺"),
  genre: z.preprocess((val) => {
    if (val === null) {
      return "Erreur"; // ou vous pouvez lever une erreur personnalisée ici
    }
    return val;
  }, z.string()).refine(val => val !== "", {
    message: "Selectionner un sexe 🔺",
  })
});

export type Patient = z.infer<typeof patientSchema>;

export type PatientG = {
  data : Patient[],
  totalItems : number,
  totalPages : number,
}