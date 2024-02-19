import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { Home, Login, Signup, Splash } from "../Screens";

const Navigator = createStackNavigator();
const Stack = () => {
  return (
    <Navigator.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Navigator.Screen name="Splash" component={Splash} />
      <Navigator.Screen name="Home" component={Home} />
      <Navigator.Screen name="Login" component={Login} />
      <Navigator.Screen name="Signup" component={Signup} />
    </Navigator.Navigator>
  );
};

export default Stack;
