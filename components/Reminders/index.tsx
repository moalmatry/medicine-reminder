import { StyleSheet, Switch, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Reminders = () => {
  return (
    <View>
      <View>
        <View>
          <View>
            <Ionicons name="notifications" color="#1a8e2d" />
          </View>
          <View>
            <Text>Reminders</Text>
            <Text>Get notified when its time to take your medications</Text>
          </View>
          <Switch
            trackColor={{ false: "#ddd", true: "#1a8e2d" }}
            thumbColor="white"
          />
          {/* 0`3:16 */}
        </View>
      </View>
    </View>
  );
};

export default Reminders;

const styles = StyleSheet.create({});
