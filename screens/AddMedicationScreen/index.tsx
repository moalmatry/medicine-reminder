import AddScreenHeader from "@/components/AddScreenHeader";
import BasicInfo from "@/components/BasicInfo";
import FooterButtons from "@/components/FooterButtons";
import Notes from "@/components/Notes";
import Reminders from "@/components/Reminders";
import { useAppSelector } from "@/store/store";
import { addMedication, getRandomColor } from "@/utils";
import { scheduleMedicationReminder } from "@/utils/notifications";
import {
  AddMedicationInput,
  addMedicationSchema,
} from "@/validators/addMedication.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";

import { Alert, Platform, ScrollView, StyleSheet, View } from "react-native";

const AddMedicationScreen = () => {
  const router = useRouter();
  const form = useAppSelector((state) => state.addForm);
  const {
    control,
    handleSubmit,

    formState: { errors },
  } = useForm<AddMedicationInput>({
    resolver: zodResolver(addMedicationSchema),
  });
  const handleSave = async (values: AddMedicationInput) => {
    try {
      // if (isLoading) return;
      const randomColor = getRandomColor();
      const medicationData = {
        id: Math.random().toString(36).substr(2, 9),
        ...form,
        name: values.medicationName,
        dosage: values.dosage,
        notes: values.notes,
        currentSupply: form.currentSupply ? Number(form.currentSupply) : 0,
        totalSupply: form.currentSupply ? Number(form.currentSupply) : 0,
        refillAt: form.refillAt ? Number(form.refillAt) : 0,
        startDate: new Date(form.startDate).toISOString(),
        color: randomColor,
      };

      // console.log(medicationData);
      // console.log(form);

      await addMedication(medicationData);

      // Schedule reminders if enabled
      if (medicationData.reminderEnabled) {
        await scheduleMedicationReminder(medicationData);
      }

      Alert.alert(
        "Success",
        "Medication added successfully",
        [
          {
            text: "OK",
            // onPress: () => router.back(),
          },
        ],
        { cancelable: false }
      );
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      console.error("Save error:");
      Alert.alert(
        "Error",
        "Failed to save medication. Please try again.",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#1a8e2d", "#146922"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerGradient}
      />
      <View style={styles.content}>
        <AddScreenHeader />

        {/* NOTE: ScrollView */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
          contentContainerStyle={styles.formContentContainer}
        >
          {/* Basic information */}
          <BasicInfo control={control} errors={errors} />

          {/* Reminders */}
          <Reminders />
          {/* Refill track */}

          {/* notes */}
          <Notes />
        </ScrollView>
        <FooterButtons onSubmit={handleSubmit(handleSave)} />
      </View>
    </View>
  );
};

export default AddMedicationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  headerGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: Platform.OS === "ios" ? 140 : 120,
  },
  content: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 50 : 30,
  },
  scrollView: {
    flex: 1,
  },
  formContentContainer: {
    padding: 20,
  },
});
