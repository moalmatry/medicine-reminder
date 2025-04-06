import AddScreenHeader from "@/components/AddScreenHeader";
import BasicInfo from "@/components/BasicInfo";
import Notes from "@/components/Notes";
import Reminders from "@/components/Reminders";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const AddMedicationScreen = () => {
  // TODO: Replace with react-hook-form

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
          <BasicInfo />

          {/* Reminders */}
          <Reminders />
          {/* Refill track */}

          {/* notes */}
          <Notes />
        </ScrollView>

        <TouchableOpacity>
          <LinearGradient
            colors={["#1a8e2d", "#146922"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text>Add Medication</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Cancel</Text>
        </TouchableOpacity>
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
