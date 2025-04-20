import { StyleSheet, Switch, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { updateForm } from "@/store/features/add-form/add-form-slice";

const Reminders = () => {
  const form = useAppSelector((store) => store.addForm);
  const dispatch = useAppDispatch();
  return (
    <View style={styles.section}>
      <View style={styles.card}>
        <View style={styles.switchRow}>
          <View style={styles.switchLabelContainer}>
            <View style={styles.iconContainer}>
              <Ionicons name="notifications" color="#1a8e2d" />
            </View>
            <View>
              <Text style={styles.switchLabel}>Reminders</Text>
              <Text style={styles.switchSubLabel}>
                Get notified when its time to take your medications
              </Text>
            </View>
          </View>
          <Switch
            value={form.reminderEnabled}
            trackColor={{ false: "#ddd", true: "#1a8e2d" }}
            thumbColor="white"
            onValueChange={(value) => {
              dispatch(updateForm({ reminderEnabled: value }));
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Reminders;

const styles = StyleSheet.create({
  section: {
    marginBottom: 25,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#e0e0e0e0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  switchLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  switchLabel: {
    fontSize: 16,
    fontWeight: 600,
    color: "#333",
  },
  switchSubLabel: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },
});
