import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { updateForm } from "@/store/features/add-form/add-form-slice";

export interface CalenderProps {
  showDatePicker: boolean;
  setShowDatePicker: React.Dispatch<React.SetStateAction<boolean>>;
  showTimePicker: boolean;
  setShowTimePicker: React.Dispatch<React.SetStateAction<boolean>>;
}

const Calender = ({
  showDatePicker,
  showTimePicker,
  setShowDatePicker,
  setShowTimePicker,
}: CalenderProps) => {
  const form = useAppSelector((state) => state.addForm);
  const dispatch = useAppDispatch();

  return (
    <>
      <TouchableOpacity
        style={styles.dateButton}
        onPress={() => setShowDatePicker(true)}
      >
        <View style={styles.dateIconContainer}>
          <Ionicons name="calendar" size={20} color="#1a8e2d" />
        </View>
        <Text style={styles.dateButtonText}>
          Starts {new Date(form.startDate).toLocaleDateString()}
        </Text>
        <Ionicons name="chevron-forward" size={20} color="#666" />
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          mode="date"
          value={new Date(form.startDate)}
          onChange={(e, date) => {
            setShowDatePicker(false);
            if (date) dispatch(updateForm({ startDate: date.getTime() }));
          }}
        />
      )}
      {form.frequency && form.frequency !== "as needed" && (
        <>
          <View style={styles.timeContainer}>
            <Text style={styles.timesTitle}>Medication Time</Text>
          </View>
          {form.times.map((time, index) => (
            <TouchableOpacity
              style={styles.timeButton}
              onPress={() => setShowTimePicker(true)}
              key={index}
            >
              <View style={styles.timeIconContainer}>
                <Ionicons name="time-outline" size={20} color="#1a8e2d" />
              </View>
              <Text style={styles.timeButtonText}>{time}</Text>
              <Ionicons name="chevron-forward" size={20} color={"#666"} />
            </TouchableOpacity>
          ))}
        </>
      )}
      <TouchableOpacity
        style={styles.dateButton}
        onPress={() => setShowTimePicker(true)}
      >
        <View style={styles.dateIconContainer}>
          <Ionicons name="time" size={20} color="#1a8e2d" />
        </View>
        <Text style={styles.dateButtonText}>Starts {form.times}</Text>
        <Ionicons name="chevron-forward" size={20} color="#666" />
      </TouchableOpacity>
      {showTimePicker && (
        <DateTimePicker
          mode="time"
          value={(() => {
            const [hours, minutes] = form.times[0].split(":").map(Number);
            const date = new Date();
            date.setHours(hours);
            date.setMinutes(minutes);
            return date;
          })()}
          onChange={(e, date) => {
            setShowTimePicker(false);
            if (date) {
              const newTime = date.toLocaleTimeString("default", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              });

              dispatch(
                updateForm({
                  times: form.times.map((t, i) => (i === 0 ? newTime : t)),
                })
              );
            }
          }}
        />
      )}
    </>
  );
};

export default Calender;

const styles = StyleSheet.create({
  dateButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 15,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  dateIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  dateButtonText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  timeContainer: {
    marginTop: 20,
  },
  timesTitle: {
    fontSize: 16,
    fontWeight: 600,
    color: "#333",
    marginBottom: 10,
  },
  timeButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  timeIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  timeButtonText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
});
