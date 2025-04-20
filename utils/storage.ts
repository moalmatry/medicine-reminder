import { DOSE_HISTORY_KEY, MEDICATION_KEY } from "@/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DosageHistory, Medications } from "./types";

const getMedication = async () => {
  try {
    const data = await AsyncStorage.getItem(MEDICATION_KEY);
    return data ? ([JSON.parse(data)] as Medications[]) : [];
  } catch (error) {
    console.log("getMedication", error);
  }
};

const addMedication = async (medication: Medications) => {
  try {
    const medications = await getMedication();
    console.log("****************");
    console.log(medications);
    console.log("****************");
    medications?.push(medication);
    await AsyncStorage.setItem(MEDICATION_KEY, JSON.stringify(medication));
  } catch (error) {
    console.log("AddMedication", error);
    return [];
  }
};

const getDoseHistory = async () => {
  try {
    const data = await AsyncStorage.getItem(DOSE_HISTORY_KEY);
    return data ? (JSON.parse(data) as DosageHistory[]) : [];
  } catch (error) {
    console.log("Getting dosage history", error);
    return [];
  }
};

const getTodaysDoses = async () => {
  try {
    const history = await getDoseHistory();
    const today = new Date().toDateString();
    return history.filter(
      (does) => new Date(does.timestamp).toDateString() === today
    );
  } catch (error) {
    console.log("getTodaysDoses", error);
    return [];
  }
};

const recordDose = async (
  medicationId: string,
  taken: boolean,
  timestamp: string
) => {
  try {
    const history = await getDoseHistory();
    const newDose = {
      id: Math.random().toString(36).substr(2, 9),
      medicationId,
      timestamp,
      taken,
    };
    history.push(newDose);
    await AsyncStorage.setItem(DOSE_HISTORY_KEY, JSON.stringify(history));
  } catch (error) {
    console.log("recordDose", error);
    throw error;
  }
};

const clearAllData = async () => {
  try {
    await AsyncStorage.multiRemove([MEDICATION_KEY, DOSE_HISTORY_KEY]);
  } catch (error) {
    console.log("clearing error", error);
  }
};

export default {
  getMedication,
  clearAllData,
  recordDose,
  getTodaysDoses,
  addMedication,
};
