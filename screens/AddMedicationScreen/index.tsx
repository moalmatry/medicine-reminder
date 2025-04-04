import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Switch,
  Dimensions,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import AddScreenHeader from "@/components/AddScreenHeader";
import { ScrollView } from "react-native";
import BasicInfo from "@/components/BasicInfo";

const AddMedicationScreen = () => {
  return (
    <View>
      <LinearGradient
        colors={["#1a8e2d", "#146922"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      <View>
        <AddScreenHeader />

        {/* NOTE: ScrollView */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {/* Basic information */}
            <BasicInfo />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AddMedicationScreen;

const styles = StyleSheet.create({});
