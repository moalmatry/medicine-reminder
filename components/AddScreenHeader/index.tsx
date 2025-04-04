import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const AddScreenHeader = () => {
  return (
    <View>
      <TouchableOpacity>
        <Ionicons name="chevron-back" size={28} color="#1a8e2d" />
      </TouchableOpacity>
      <Text>New Medication</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default AddScreenHeader;
