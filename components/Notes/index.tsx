import { updateForm } from "@/store/features/add-form/add-form-slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Notes = () => {
  const form = useAppSelector((state) => state.addForm);
  const dispatch = useAppDispatch();
  return (
    <View style={styles.section}>
      <View style={styles.textAreaContainer}>
        <TextInput
          style={styles.textArea}
          placeholder="Add notes about your medication"
          placeholderTextColor="#999"
          value={form.notes}
          multiline
          onChangeText={(text) => {
            dispatch(updateForm({ notes: text }));
          }}
        />
      </View>
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({
  section: {
    marginBottom: 25,
  },
  textAreaContainer: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  textArea: {
    height: 100,
    padding: 15,
    fontSize: 16,
    color: "#333",
  },
});
