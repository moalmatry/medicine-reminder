import * as Notifications from "expo-notifications";
import { Platform } from "react-native";
import { Medications } from "./types";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldShowAlert: true,
    shouldSetBadge: true,
  }),
});

export const registerForPushNotificationsAsync = async () => {
  let token: string | null = null;

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== "granted") {
    return null;
  }

  try {
    const response = await Notifications.getExpoPushTokenAsync();
    token = response.data;

    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#1a8e2d",
      });
    }

    return token;
  } catch (error) {
    console.error("Error getting push token:", error);
    return null;
  }
};

export const scheduleMedicationReminder = async (medication: Medications) => {
  if (!medication.reminderEnabled) return;

  try {
    for (const time of medication.times) {
      const [hours, minutes] = time.split(":").map(Number);
      const today = new Date();
      today.setHours(hours, minutes, 0, 0);
      if (today < new Date()) {
        today.setDate(today.getDate() + 1);
      }
      const identifier = await Notifications.scheduleNotificationAsync({
        content: {
          title: "Medication Reminder",
          body: `Time to take ${medication.name} (${medication.dosage})`,
          data: { medicationId: medication.id },
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.CALENDAR,
          hour: hours,
          minute: minutes,
          repeats: true,
        },
      });
      return identifier;
    }
  } catch (error) {
    console.log("scheduleMedicationReminder", error);
    return undefined;
  }
};

export const cancelMedicationReminders = async (medicationId: string) => {
  try {
    const scheduleNotifications =
      await Notifications.getAllScheduledNotificationsAsync();
    for (const notifications of scheduleNotifications) {
      const data = notifications.content.data as {
        medicationId?: string;
      } | null;
      if (data?.medicationId === medicationId) {
        await Notifications.cancelScheduledNotificationAsync(
          notifications.identifier
        );
      }
    }
  } catch (error) {
    console.log("Error canceling medication reminders", error);
  }
};

export const updateMedicationReminders = async (medication: Medications) => {
  try {
    await cancelMedicationReminders(medication.id);
    await scheduleMedicationReminder(medication);
  } catch (error) {
    console.log("Error updating medication", error);
  }
};
