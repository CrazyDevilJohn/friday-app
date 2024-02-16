import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./src/Navigators/Stack";
import "react-native-gesture-handler";
import { StatusBar, View } from "react-native";

export default function App() {
  useEffect(() => {
    StatusBar.setBackgroundColor("#ffffff00");
    StatusBar.setTranslucent(true);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </View>
  );
}
