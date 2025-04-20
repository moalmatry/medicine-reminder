import { RANDOM_COLORS } from "@/constants";
import StorageFn from "./storage";

const {
  getMedication,
  clearAllData,
  recordDose,
  getTodaysDoses,
  addMedication,
} = StorageFn;
// NOTE: General functions
export const getRandomColor = () => {
  return RANDOM_COLORS[Math.floor(Math.random() * RANDOM_COLORS.length)];
};

// NOTE: Notification functions

// NOTE: Storage functions
export {
  getMedication,
  clearAllData,
  recordDose,
  getTodaysDoses,
  addMedication,
};
