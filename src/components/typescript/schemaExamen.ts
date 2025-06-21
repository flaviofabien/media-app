import { z } from 'zod';
import { Consultation } from './schemaConsultation';
import { Patient } from './schema';

export const ExamenSchema = z.object({
  idPatient : z.string().optional(),
  idConsultation : z.string().optional(),
  id : z.string().optional(),

  /* Biologgie */
  hematologie: z.custom(),
  immunologie: z.custom(),
  cypotologie_anatomoPathologie: z.custom(),
  bioChimie: z.custom(),
  marqueursInflammation: z.custom(),
  bilanRenal: z.custom(),
  bilanHepatique: z.custom(),
  liquidePonction: z.custom(),
  bacteriologie: z.custom(),
  crachats: z.custom(),
  urines: z.custom(),
  lba: z.custom(),

 /* Imagerie */
  radiographies: z.custom(),
  radiographieThorax: z.custom(),
  radiographieRachis: z.custom(),
  scanner: z.custom(),

 /* Ecographie */
  echographie: z.custom(),
});


export type Examen = z.infer<typeof ExamenSchema >;

export const DefaultValueExamen = {
  hematologie : {
    nft : "",
    groupageAbo : "",
    rhesus : "",
  },
  bioChimie : {
    calcemieAlbumine : "",
    ionogramme : "" , 
    glycemieHbA1C : "",
    crp : "",
    vsh : "",
    procalcitonine : "",
    creatinine : "",
    uree : "",
    asat_alat : "",
    ggt : "",
    pal : "",
    bilirubine : ""
  },
  liquidePonction : {
    pleural : "",
    ascite : "" ,
    lcr : "",
    articulaire : ""
  } ,
  radiographies : {
    hanche : "",
    asp : "",
    main : "",
    pieds : "",
    genoux : "",
    jambe : "",
    fémur : "",
  },
  radiographieRachis : {
    cervical : "",
    dorsal : "",
    lombaire : "",
    sacrum : "",
  },
  radiographieThorax : {
    face : "",
    profil : "",
  },
  immunologie : {
    vih : "",
    hepatiteVirale : "",
    aspergillaire : "",
    bilharzienne : "",
    toxoplasmose : "",
  },
  bacteriologie : {
    hemoculture : "",
    liquideDePonction : "",
  },
  crachats : {
    ecbc : "",
    genexpertMtb_Rif : "",
    mycologie : "",
    culture : "",
  },
  urines : {
    bu : "",
    ecbu : "",
    genexpert : "",
  },
  lba : {
    ecbc : "",
    genexpert : "",
  },
  scanner : {
    thorax : "",
    thoracoAbdominoPelvien : "",
    cerebral : "",
    angioscanner : "",
    rachis : "",
  },
  cypotologie_anatomoPathologie : {
    liquideDePonction : "",
    biopsie : "",
  },
  echographie : {
    plevre : "",
    abdomen : "",
    Abdomino_pelvien : "",
    renale : "",
    prostate : "",
    voieUrinaire : "",
    cardiaque : "",
    dopplerVeineux : "",
    dopplerArtériel : "",
    tissuMous : "",
    seins : "",
  }

}


type ExamenWithPatientConsultation = Examen & {
  Patient: Patient; Consultation : Consultation
};

export type ExamenG = {
  data : ExamenWithPatientConsultation[]
  totalItems : number;
  totalPages : number;
}