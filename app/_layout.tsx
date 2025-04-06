import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import ReduxProvider from "@/providers/redux-provider";

const RootLayout = () => {
  return (
    <ReduxProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#fff" },
          animation: "slide_from_right",
          // header: () => null,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="home" />
        <Stack.Screen name="medications/add" />
      </Stack>
    </ReduxProvider>
  );
};

export default RootLayout;
