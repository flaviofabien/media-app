
import { Diagnostic } from "./schemaDiagnostic";

export const generateDefaultValuesDiagnostic = (data?: Partial<Diagnostic>) => ({
    diagnostic: data?.diagnostic || "",
  });

