import { z } from "zod";

// TODO: we need to configure react-hook-form with zod and add it to all forms 04:11
export const addMedicationSchema = z.object({
  medicationName: z
    .string({ message: "Medication name is required" })
    .min(3)
    .trim(),
  dosage: z.string({ message: "dosage name is required" }).min(3).trim(),
  notes: z.string().max(30).min(3).trim().optional(),
});

export type AddMedicationInput = z.infer<typeof addMedicationSchema>;
