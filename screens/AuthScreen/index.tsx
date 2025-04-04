import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import * as LocalAuthentication from "expo-local-authentication";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants";

const width = Dimensions.get("window").width;

const AuthScreen = () => {
  const router = useRouter();
  const [hasBiometric, setHasBiometric] = useState(false);
  const [isAuthenticating, setIsisAuthenticating] = useState(false);
  const [error, setError] = useState<null | string>("");

  const checkBiometricsHandler = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    return hasHardware && isEnrolled;
  };

  const authenticateHandler = async () => {
    try {
      setIsisAuthenticating(true);
      setError(null);
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();
      const supportedTypes =
        await LocalAuthentication.supportedAuthenticationTypesAsync();
      // Handle biometric authentication errors
      if (supportedTypes.length === 0) {
        setError("No biometric authentication available on this device.");
        return;
      }
      const auth = await LocalAuthentication.authenticateAsync({
        promptMessage:
          hasHardware && isEnrolled ? "Use Face/Touch ID" : "Enter Your PIN",
        fallbackLabel: "Use PIN",
        cancelLabel: "Cancel",
        disableDeviceFallback: false,
      });

      if (auth.success) router.replace("/");
      else setError("Authentication failed try again");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchBiometricData = async () => {
      const bioData = await checkBiometricsHandler();
      setHasBiometric(bioData);
    };
    fetchBiometricData();
  }, []);
  return (
    <LinearGradient
      colors={[Colors.theme.linear.form, Colors.theme.linear.to]}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons name="medical" size={80} color="white" />
        </View>
        <Text style={styles.title}>MedRemind</Text>
        <Text style={styles.subtitle}>Your Personal Medical Reminder</Text>

        <View style={styles.card}>
          <Text style={styles.welcomeText}>Welcome back!</Text>
          <Text style={styles.instructionText}>
            {hasBiometric
              ? "use face ID/TouchID or pin to access your medications"
              : "Enter your pin to access your medication"}
          </Text>

          <TouchableOpacity
            style={[styles.button, isAuthenticating && styles.buttonDisabled]}
            onPress={authenticateHandler}
            disabled={isAuthenticating}
          >
            <Ionicons
              name={hasBiometric ? "finger-print-outline" : "keypad-outline"}
              size={24}
              color="white"
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>
              {isAuthenticating
                ? "Verifying..."
                : hasBiometric
                ? "Authenticate"
                : "Enter PIN "}
            </Text>
          </TouchableOpacity>

          {error && (
            <View style={styles.errorContainer}>
              <Ionicons
                name="alert-circle"
                size={20}
                color={Colors.theme.error}
              />
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    width: 120,
    height: 120,
    backgroundColor: "rgba(255, 255, 255, 0.2 )",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.2 )",
  },
  subtitle: {
    fontSize: 18,
    color: "rgba(255,255,255,0.8)  ",
    marginBottom: 40,
    textAlign: "center",
  },
  card: {
    borderRadius: 20,
    backgroundColor: "white",
    padding: 30,
    width: width - 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  instructionText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: Colors.theme.background,
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: 600,
  },
  errorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    padding: 10,
    backgroundColor: "#ffebee",
    borderRadius: 8,
  },
  errorText: {
    color: "#f44336",
    fontSize: 14,
    marginLeft: 8,
  },
});

export default AuthScreen;
