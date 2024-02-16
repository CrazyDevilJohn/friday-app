import { createStackNavigator } from "@react-navigation/stack";
import { Home, Login, Splash } from "../Screens";

const Navigator = createStackNavigator();
const Stack = () => {
  return (
    <Navigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Navigator.Screen name="Splash" component={Splash} />
      <Navigator.Screen name="Home" component={Home} />
      <Navigator.Screen name="Login" component={Login} />
    </Navigator.Navigator>
  );
};

export default Stack;
