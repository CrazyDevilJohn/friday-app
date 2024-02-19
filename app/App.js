import React, { useEffect, useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Stack from "./src/Navigators/Stack";
import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { BottomTabs } from "./src/Navigators";

const Screens = ({ setRoute }) => {
  const navigation = useNavigation();
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("state", () => {
      const route = navigation.getCurrentRoute().name;
      setRoute(route);
    });
    return unsubscribe;
  }, [navigation]);
  return;
};

const App = () => {
  const [route, setRoute] = useState(null);
  useEffect(() => {
    StatusBar.setBackgroundColor("#00000000");
    StatusBar.setTranslucent(true);
  }, []);
  return (
    <NavigationContainer>
      <Screens setRoute={setRoute} />
      <Stack />
      {route !== "Splash" && <BottomTabs activeScreen={route} />}
    </NavigationContainer>
  );
};

export default App;
