import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useAppSelector } from "@/store/store";

const Calender = () => {
  const form = useAppSelector((state) => state.addForm);

  return (
    <>
      <TouchableOpacity>
        <View>
          <Ionicons name="calendar" size={20} color="#1a8e2d" />
        </View>
        <Text>Starts {}</Text>
      </TouchableOpacity>
      <DateTimePicker mode="date" value={form.startDate} />
      <DateTimePicker
        mode="time"
        value={(() => {
          const [hours, minutes] = form.times[0].split(":").map(Number);
          const date = new Date();
          date.setHours(hours);
          date.setMinutes(minutes);
          return date;
        })()}
      />
    </>
  );
};

export default Calender;

const styles = StyleSheet.create({});
