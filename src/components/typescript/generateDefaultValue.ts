import { Patient } from "./schema";

export const generateDefaultValues = (data?: Partial<Patient>) => ({
    nom: data?.nom || "",
    prenom: data?.prenom || "",
    profession: data?.profession || "",
    genre: data?.genre || "",
    dateNaissance: data?.dateNaissance || "",
    adresse: data?.adresse || "",
    email: data?.email || undefined,
    telephone: data?.telephone || undefined,
  });

