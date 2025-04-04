import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { QUICK_ACTIONS } from "@/constants";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const QuickActions = () => {
  return (
    <View style={styles.quickActionsContainer}>
      <Text style={styles.quickActionTitle}>Quick Actions</Text>
      <View style={styles.quickActionsGrid}>
        {QUICK_ACTIONS.map((action) => (
          <Link key={action.label} asChild href={action.route}>
            <TouchableOpacity style={styles.actionButton}>
              <LinearGradient
                style={styles.actionGradient}
                colors={action.gradient}
              >
                <View style={styles.actionContent}>
                  <View>
                    <Ionicons name={action.icon} size={24} color="white" />
                  </View>
                  <Text style={styles.actionLabel}>{action.label}</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </View>
  );
};

export default QuickActions;

const styles = StyleSheet.create({
  quickActionsContainer: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  quickActionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "1%",
    marginTop: 15,
  },
  actionButton: {
    width: (width - 52) / 2,
    height: 110,
    borderRadius: 16,
    overflow: "hidden",
  },
  actionGradient: {
    flex: 1,
    padding: 15,
  },
  actionContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  actionLabel: {
    fontSize: 14,
    color: "white",
    fontWeight: 600,
    marginTop: 8,
  },
  quickActionTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: "#a1a1a1",
    marginBottom: 5,
  },
});
