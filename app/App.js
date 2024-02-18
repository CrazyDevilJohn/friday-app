import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./src/Navigators/Stack";
import "react-native-gesture-handler";
import { StatusBar } from "react-native";

export default function App() {
  useEffect(() => {
    StatusBar.setBackgroundColor("#00000000");
    StatusBar.setTranslucent(true);
  }, []);
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}
