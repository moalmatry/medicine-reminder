import { updateForm } from "@/store/features/add-form/add-form-slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Calender from "../Calender";
import DurationsOptions from "../DurationsOptions";
import FrequencyOptions from "../FrequencyOptions";
import { updateInputError } from "@/store/features/input-error/input-error-slice";
import TextInput from "../ui/TextInput";

const BasicInfo = () => {
  const [selectedFrequency, setSelectedFrequency] = useState("");
  const form = useAppSelector((state) => state.addForm);
  const inputError = useAppSelector((state) => state.inputError);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.section}>
      <TextInput
        name="name"
        error={inputError}
        placeholder="Medication Name"
        placeholderTextColor="#999"
        value={form.name}
        onChangeText={(text) => {
          dispatch(updateForm({ name: text }));
        }}
      />

      <TextInput
        name="dosage"
        error={inputError}
        placeholder="Dosage (500mg)"
        placeholderTextColor="#999"
        value={form.dosage}
        onChangeText={(text) => {
          dispatch(updateForm({ dosage: text }));
        }}
      />
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>How often?</Text>
        {inputError.frequency && (
          <Text style={styles.errorText}>{inputError.frequency}</Text>
        )}
        {/* render frequency options */}
        <FrequencyOptions
          onFrequencySelect={() => selectedFrequency}
          selected={selectedFrequency}
        />
        <Text style={styles.sectionTitle}>For how long?</Text>
        {inputError.duration && (
          <Text style={styles.errorText}>{inputError.duration}</Text>
        )}

        {/* render durations options */}
        {/* NOTE: 03:43 styling option grid */}
        <DurationsOptions />

        {/* Calender */}
        <Calender />
      </View>
    </View>
  );
};

export default BasicInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
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
