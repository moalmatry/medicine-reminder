import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TodayMedication = () => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Today&apos;s Schedule</Text>
        <Link href="/calender" asChild>
          <TouchableOpacity>
            <Text style={styles.seeAllButton}>See All</Text>
          </TouchableOpacity>
        </Link>
      </View>
      {/* TODO: Make this a component */}
      {true ? (
        <View style={styles.emptyState}>
          <Ionicons name="medical-outline" size={48} color="#ccc" />
          <Text style={styles.emptyStateText}>
            No medication scheduled for today
          </Text>
          <Link href="/medication/add">
            <TouchableOpacity style={styles.addMedicationButton}>
              <Text style={styles.addMedicationButtonText}>Add Medication</Text>
            </TouchableOpacity>
          </Link>
        </View>
      ) : (
        // TODO: Make this a component
        [].map((medication, index) => {
          // const taken =

          return (
            <View style={styles.doseCard} key={index}>
              <View
                style={[
                  styles.doseBadge,
                  {
                    // backgroundColor: taken? "#ccc" : "#fff",
                  },
                ]}
              >
                <Ionicons name="medical" size={24} />
              </View>
              <View style={styles.doesInfo}>
                <Text style={styles.medicineName}>name</Text>
                <Text style={styles.dosageInfo}>dosage</Text>
              </View>
              <View style={styles.doesTime}>
                <Ionicons name="time-outline" size={16} color="#ccc" />
                <Text style={styles.timeText}>time</Text>
              </View>
              {false ? (
                <TouchableOpacity style={styles.takeDoesButton}>
                  <Ionicons
                    name="checkmark-circle-outline"
                    size={24}
                    color="#ccc"
                  />
                  <Text style={styles.takeDoseText}>Taken</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.takeDoesButton}>
                  <Ionicons name="time-outline" size={16} color="#ccc" />
                  <Text style={styles.takeDoesButton}>Take</Text>
                </TouchableOpacity>
              )}
            </View>
          );
        })
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 5,
  },
  seeAllButton: {
    color: "#2E7D32",
    fontWeight: 600,
  },
  emptyState: {
    alignItems: "center",
    padding: 30,
    backgroundColor: "white",
    borderRadius: 16,
    marginTop: 10,
  },
  emptyStateText: {
    fontSize: 16,
    color: "#666",
    marginTop: 10,
    marginBottom: 20,
  },
  addMedicationButton: {
    backgroundColor: "#1a8e2d",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  addMedicationButtonText: {
    color: "white",
    fontWeight: 600,
  },
  doseCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  doseBadge: {
    width: 20,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  doesInfo: {
    flex: 1,
    justifyContent: "space-between",
  },
  dosageInfo: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },

  medicineName: {
    fontSize: 16,
    fontWeight: 600,
    color: "#333",
    marginBottom: 4,
  },
  doseInfo: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  doesTime: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeText: {
    marginLeft: 5,
    color: "#666",
    fontSize: 14,
  },
  takeDoesButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginLeft: 10,
  },
  takeDoseText: {
    color: "white",
    fontWeight: 600,
    fontSize: 14,
  },
});

export default TodayMedication;
