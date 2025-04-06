import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Notes = () => {
  return (
    <View>
      <View>
        <TextInput
          placeholder="Add notes about your medication"
          placeholderTextColor="#999"
        />
      </View>
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({});
