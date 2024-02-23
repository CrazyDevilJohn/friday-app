import { View, Text } from "react-native";
import React from "react";

const Background = () => {
  return (
    <View className="absolute inset-0 bg-white w-full h-full">
      <View className="w-300 h-300 absolute bg-primaryOrange rounded-full -top-24 -left-24 z-50" />
      <View className="w-[500px] h-[500px] absolute bg-white rounded-full -top-24 -left-24 z-40" />
      <View className="w-[800px] h-[800px] absolute bg-primaryOrange rounded-full -top-24 -left-24 z-30" />
      <View className="w-[1000px] h-[1000px] absolute bg-white rounded-full top-5 -left-16 z-20" />
      <View className="w-[1200px] h-[1200px] absolute bg-primaryOrange rounded-full top-15 -left-20 z-10" />
    </View>
  );
};

export default Background;
