import { View, Text, StatusBar, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { LOGO } from "../../assets";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      if (isLogin) {
        navigation.navigate("Home");
      } else {
        navigation.navigate("Login");
      }
    }, 3000);
  }, []);

  return (
    <View className="w-full h-full bg-[#3A9DD4] justify-center items-center flex-col">
      <Image source={LOGO} className="w-full" />
      <Text className="text-xl text-white font-semibold -mt-1">PICS POST</Text>
    </View>
  );
};

export default Splash;
