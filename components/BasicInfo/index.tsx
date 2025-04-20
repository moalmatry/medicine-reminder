import { useAppDispatch, useAppSelector } from "@/store/store";
import { AddMedicationInput } from "@/validators/addMedication.schema";
import React, { useState } from "react";
import { Control, FieldErrors } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import Calender from "../Calender";
import DurationsOptions from "../DurationsOptions";
import FrequencyOptions from "../FrequencyOptions";
import TextInput from "../ui/TextInput";
interface BasicInfoProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<AddMedicationInput, any, AddMedicationInput>;
  errors: FieldErrors<AddMedicationInput>;
}

const BasicInfo = ({ control, errors }: BasicInfoProps) => {
  const [selectedFrequency, setSelectedFrequency] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const form = useAppSelector((state) => state.addForm);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.section}>
      <View style={styles.inputsContainer}>
        <TextInput
          name="medicationName"
          error={errors.medicationName?.message}
          control={control}
          placeholder="Medication Name"
          placeholderTextColor="#999"
          value={form.name}
        />

        <TextInput
          name="dosage"
          control={control}
          placeholder="Dosage (500mg)"
          placeholderTextColor="#999"
          value={form.dosage}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>How often?</Text>
        {/* {inputError.frequency && (
          <Text style={styles.errorText}>{inputError.frequency}</Text>
        )} */}
        {/* render frequency options */}
        <FrequencyOptions
          setSelectedFrequency={setSelectedFrequency}
          selectedFrequency={selectedFrequency}
        />
        <Text style={styles.sectionTitle}>For how long?</Text>
        {/* {errors.duration && (
          <Text style={styles.errorText}>{inputError.duration}</Text>
        )} */}

        {/* render durations options */}
        <DurationsOptions
          setSelectedDuration={setSelectedDuration}
          selectedDuration={selectedDuration}
        />

        {/* Calender */}
        <Calender
          setShowTimePicker={setShowTimePicker}
          showTimePicker={showTimePicker}
          showDatePicker={showDatePicker}
          setShowDatePicker={setShowDatePicker}
        />
      </View>
    </View>
  );
};

export default BasicInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#f8f9fa",
  },
  inputsContainer: {
    gap: 6,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: "#1a1a1a",
    marginBottom: 15,
    marginTop: 10,
  },
  errorText: {
    color: "#FF5252",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 12,
  },
});
