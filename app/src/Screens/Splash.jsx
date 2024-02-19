import { View, Text, StatusBar, Image } from "react-native";
import React, { useEffect, useState } from "react";
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
    <View className="w-full h-full bg-white justify-center items-center">
      <View className="w-300 h-300 bg-primaryOrange absolute rounded-full -top-24 -left-24" />
      <View className="w-300 h-300 bg-primaryOrange absolute rounded-full -bottom-20 -right-14" />
      <View>
        <Text className="text-6xl text-center font-semibold text-primaryOrange">
          Pix Post
        </Text>
        <Text className="text-xl text-center font-medium text-darkText">
          By Friday
        </Text>
      </View>
    </View>
  );
};

export default Splash;
