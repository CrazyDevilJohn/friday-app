import { View, Text, Image } from "react-native";
import React from "react";
import { LOGINBG } from "../../assets";

const Login = () => {
  return (
    <View className="w-full h-full">
      <Image source={LOGINBG} className="w-full h-full object-cover" />
      <View className="w-full h-full justify-center items-center">
        <View></View>
      </View>
    </View>
  );
};

export default Login;
