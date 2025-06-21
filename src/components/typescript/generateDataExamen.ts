import { Examen } from "./schemaExamen";

export const generateDefaultValuesExamen = (data?: Partial<Examen>) => ({
    idPatient : data?.idPatient || "",
    id : data?.id || "",
    idConsultation : data?.idConsultation || "",

    hematologie: data?.hematologie || {},
    bioChimie: data?.bioChimie || {},
    marqueursInflammation: data?.marqueursInflammation || {},
    bilanRenal: data?.bilanRenal || {},
    bilanHepatique: data?.bilanHepatique || {},
    liquidePonction: data?.liquidePonction || {},

    bacteriologie: data?.bacteriologie || {},
    crachats: data?.crachats || {},
    urines: data?.urines || {},
    lba: data?.lba || {},

    immunologie: data?.immunologie || {},
    cypotologie_anatomoPathologie: data?.cypotologie_anatomoPathologie || {},

    radiographies: data?.radiographies || {},
    radiographieRachis: data?.radiographieRachis || {},
    radiographieThorax: data?.radiographieThorax || {},

    scanner: data?.scanner || {},
    echographie: data?.echographie || {}
  });

