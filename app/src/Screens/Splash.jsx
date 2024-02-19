import { View, Text } from "react-native";
import React, { useEffect } from "react";

const Splash = (props) => {
  const {
    navigation: { replace },
  } = props;

  useEffect(() => {
    setTimeout(() => {
      replace("Home");
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
