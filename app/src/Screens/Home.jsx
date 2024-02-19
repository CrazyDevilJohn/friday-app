import { View, Text } from "react-native";
import React from "react";
import { Background, Header, MetCard } from "../Components";

const Home = () => {
  return (
    <View className="w-full h-full bg-white">
      <Background />
      <Header />
      <MetCard />
    </View>
  );
};

export default Home;
