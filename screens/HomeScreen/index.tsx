import CircularProgress from "@/components/CircularProgress";
import NotificationModal from "@/components/NotificationModal";
import QuickActions from "@/components/QuickActions";
import TodayMedication from "@/components/TodayMedication";
import { Colors } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const HomeScreen = () => {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <LinearGradient
          style={styles.header}
          colors={[
            Colors.theme.secondLinear.form,
            Colors.theme.secondLinear.to,
          ]}
        >
          <View style={styles.headerContent}>
            {/* NOTE: Notification */}
            <View style={styles.headerTop}>
              <View style={{ flex: 1 }}>
                <Text style={styles.greeting}>Daily Progress</Text>
              </View>
              <TouchableOpacity style={styles.notificationButton}>
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="white"
                />
                {
                  <View style={styles.notificationBadge}>
                    <Text style={styles.notificationCount}>3</Text>
                  </View>
                }
              </TouchableOpacity>
            </View>
            <CircularProgress progress={1} totalDoses={10} completeDoses={5} />
          </View>
        </LinearGradient>
        <View style={styles.content}>
          <QuickActions />
        </View>
        {/* NOTE: Today Medication  */}
        <TodayMedication />

        {/* NOTE: Notification Modal */}
        <NotificationModal visible={false} />
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    paddingTop: 50,
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContent: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 600,
    color: "white",
    opacity: 0.9,
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  notificationButton: {
    position: "relative",
    padding: 8,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 12,
    marginLeft: 8,
  },
  notificationBadge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#ff5225",
    borderRadius: 10,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
    borderWidth: 2,
    borderColor: "#146922",
    minWidth: 20,
  },
  notificationCount: {
    fontSize: 11,
    color: "white",
    fontWeight: "bold",
  },
});

export default HomeScreen;
