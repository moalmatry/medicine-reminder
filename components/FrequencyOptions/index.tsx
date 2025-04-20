import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FREQUENCIES } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { useAppDispatch } from "@/store/store";
import { updateForm } from "@/store/features/add-form/add-form-slice";

const { width } = Dimensions.get("window");

// interface Ionicons extends Ionicons

interface FrequencyOptionsProps {
  selectedFrequency: string;
  setSelectedFrequency: (frequency: string) => void;
}

const FrequencyOptions = ({
  selectedFrequency,
  setSelectedFrequency,
}: FrequencyOptionsProps) => {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.optionsGrid}>
      {FREQUENCIES.map((freq) => (
        <TouchableOpacity
          style={[
            styles.optionsCard,
            selectedFrequency === freq.label && styles.selectedOptionCard,
          ]}
          onPress={() => {
            setSelectedFrequency(freq.label);
            dispatch(updateForm({ frequency: freq.label }));
          }}
          key={freq.id}
        >
          <View style={styles.optionIcon}>
            <Ionicons
              name={freq.icon}
              size={24}
              style={[
                styles.icon,
                selectedFrequency === freq.label && styles.selectedIcon,
              ]}
              color={selectedFrequency === freq.label ? "white" : "#666"}
            />
            <Text
              style={[
                styles.optionLabel,
                selectedFrequency === freq.label && styles.selectedOptionLabel,
              ]}
            >
              {freq.label}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FrequencyOptions;

const styles = StyleSheet.create({
  optionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -5,
  },
  optionsCard: {
    width: (width - 60) / 2,
    height: 120,
    backgroundColor: "white",
    borderRadius: 16,
    padding: 15,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  icon: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 50,
  },
  selectedIcon: {
    backgroundColor: "#a5e3af86",
    padding: 10,
    borderRadius: 50,
  },
  selectedOptionCard: {
    backgroundColor: "#1a8e2d",
    borderColor: "#1a8e2d",
  },
  optionIcon: {
    justifyContent: "center",
    alignItems: "center",
  },

  optionLabel: {
    fontSize: 14,
    fontWeight: 600,
    color: "#333",
    textAlign: "center",
    marginTop: 10,
  },
  selectedOptionLabel: {
    color: "white",
  },
});
