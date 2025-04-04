import {
  StyleSheet,
  Text,
  View,
  Modal as RnModal,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface NotificationModalProps {
  visible: boolean;
}

const NotificationModal = ({ visible }: NotificationModalProps) => {
  return (
    <RnModal transparent={visible} visible={visible} animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Notifications</Text>
          <TouchableOpacity style={styles.closeButton}>
            <Ionicons name="close" size={24} color="#333 " />
          </TouchableOpacity>
        </View>
        {[].map((notification, index) => (
          <View style={styles.notificationItem} key={index}>
            <View style={styles.notificationIcon}>
              <Ionicons name="medical" size={24} />
            </View>
            <View>
              <Text>Medication Name</Text>
              <Text>Medication Dosage</Text>
              <Text>Medication Time</Text>
            </View>
          </View>
        ))}
      </View>
    </RnModal>
  );
};
const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: "80%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  closeButton: {
    padding: 5,
  },
  notificationItem: {
    flexDirection: "row",
    padding: 15,
    borderRadius: 12,
    backgroundColor: "#f5f5f5f5",
    marginBottom: 10,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E8f5E9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 600,
    color: "#333",
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  notificationTime: {
    fontSize: 12,
    color: "#999",
  },
});

export default NotificationModal;
