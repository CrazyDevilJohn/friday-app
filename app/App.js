import React, { useEffect, useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar, View } from "react-native";
import { Provider } from "react-redux";
import { BottomTabs, Drawer, Stack } from "./src/Navigators";
import { store } from "./src/store";

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
    <Provider store={store}>
      <Drawer>
        <NavigationContainer>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Screens setRoute={setRoute} />
            <Stack />
            {route !== "Splash" && <BottomTabs activeScreen={route} />}
          </GestureHandlerRootView>
        </NavigationContainer>
      </Drawer>
    </Provider>
  );
};
export default App;
