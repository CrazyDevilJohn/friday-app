import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./src/Navigators/Stack";
import "react-native-gesture-handler";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </View>
  );
}
