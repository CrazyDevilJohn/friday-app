import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../Screens/Splash";
import Home from "../Screens/Home";

const Navigator = createStackNavigator();
const Stack = () => {
  return (
    <Navigator.Navigator>
      <Navigator.Screen name="Splash" component={Splash} />
      <Navigator.Screen name="Home" component={Home} />
    </Navigator.Navigator>
  );
};

export default Stack;
