import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { FREQUENCIES } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

// interface Ionicons extends Ionicons

interface FrequencyOptionsProps {
  selected: string;
  onFrequencySelect: (frequency: string) => void;
}

const FrequencyOptions = ({
  selected,
  onFrequencySelect,
}: FrequencyOptionsProps) => {
  return (
    <View style={styles.optionsGrid}>
      {FREQUENCIES.map((freq) => (
        <TouchableOpacity
          style={[
            styles.optionsCard,
            selected === freq.label && styles.selectedOptionCard,
          ]}
          key={freq.id}
        >
          <View
            style={[
              styles.optionIcon,
              selected === freq.label && styles.selectedOptionIcon,
            ]}
          >
            <Ionicons
              name={freq.icon}
              size={24}
              color={selected === freq.label ? "white" : "#666"}
            />
            <Text
              style={[
                styles.optionLabel,
                selected === freq.label && styles.selectedOptionLabel,
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
});
