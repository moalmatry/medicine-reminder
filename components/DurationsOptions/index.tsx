import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { DURATIONS } from "@/constants";
import { Ionicons } from "@expo/vector-icons";

const DurationsOptions = () => {
  return (
    <View>
      {DURATIONS.map((dur) => (
        <TouchableOpacity key={dur.id}>
          <View>
            <Text>{dur.value > 0 ? dur.value : "♾️"}</Text>
            <Text>{dur.label}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DurationsOptions;

const styles = StyleSheet.create({});
