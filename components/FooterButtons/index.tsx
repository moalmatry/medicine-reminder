import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

interface FooterProps {
  onSubmit: () => void | Promise<void>;
}

const FooterButtons = ({ onSubmit }: FooterProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const handleSubmit = async () => {
    setIsSubmitting(true);
    onSubmit();
    setIsSubmitting(false);
  };
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={[styles.saveButton, isSubmitting && styles.saveButtonDisabled]}
        onPress={handleSubmit}
      >
        <LinearGradient
          style={styles.saveButtonGradient}
          colors={["#1a8e2d", "#146922"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.saveButtonText}>
            Add Medication
            {isSubmitting ? "Adding..." : "Add Medication"}
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={isSubmitting}
        onPress={() => router.back()}
        style={styles.cancelButton}
      >
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterButtons;

const styles = StyleSheet.create({
  footer: {
    padding: 20,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0e0",
  },
  saveButton: {
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 12,
  },
  saveButtonDisabled: {
    opacity: 0.7,
  },
  saveButtonGradient: {
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: 700,
  },
  cancelButton: {
    paddingVertical: 15,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  cancelButtonText: {
    color: "#666",
    fontSize: 16,
    fontWeight: 600,
  },
});
