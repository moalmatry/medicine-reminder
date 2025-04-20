import { DURATIONS } from "@/constants";
import { updateForm } from "@/store/features/add-form/add-form-slice";
import { useAppDispatch } from "@/store/store";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export interface DurationsOptionsProps {
  selectedDuration: string;
  setSelectedDuration: React.Dispatch<React.SetStateAction<string>>;
}

const DurationsOptions = ({
  selectedDuration,
  setSelectedDuration,
}: DurationsOptionsProps) => {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.optionsGrid}>
      {DURATIONS.map((dur) => (
        <TouchableOpacity
          style={[
            styles.optionsCard,
            selectedDuration === dur.label && styles.selectedOptionCard,
          ]}
          key={dur.id}
          onPress={() => {
            setSelectedDuration(dur.label);
            dispatch(updateForm({ duration: dur.label }));
          }}
        >
          <Text
            style={[
              styles.durationNumber,
              selectedDuration === dur.label && styles.selectedDurationNumber,
            ]}
          >
            {dur.value > 0 ? dur.value : "♾️"}
          </Text>
          <Text
            style={
              (styles.optionLabel,
              selectedDuration === dur.label && styles.selectedOptionLabel)
            }
          >
            {dur.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DurationsOptions;

const styles = StyleSheet.create({
  optionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -5,
  },
  optionsCard: {
    width: (width - 60) / 2,
    backgroundColor: "white",
    borderRadius: 16,
    padding: 15,
    margin: 5,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  selectedOptionCard: {
    backgroundColor: "#1a8e2d",
    borderColor: "#1a8e2d",
  },
  optionIcon: {
    width: 100,
    height: 60,
    borderRadius: 25,
    // backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  selectedOptionIcon: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  optionLabel: {
    fontSize: 14,
    fontWeight: 600,
    color: "#333",
    textAlign: "center",
  },
  selectedOptionLabel: {
    color: "white",
  },
  durationNumber: {
    fontSize: 24,
    fontWeight: 700,
    color: "#1a8e2d",
    marginBottom: 5,
  },
  selectedDurationNumber: {
    color: "white",
  },
});
