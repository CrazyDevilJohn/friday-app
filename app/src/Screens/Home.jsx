import { View, Text } from "react-native";
import React from "react";
import { Background, BigCard, Header, MetCard } from "../Components";
import data from "../Data";

const Home = () => {
  return (
    <View className="w-full h-full bg-white">
      {/* custom background */}
      <Background />
      {/* custom Header */}
      <Header />
      {/* Metireal card */}
      <MetCard data={data} />
      {/* placeholder  text */}
      <Text className="text-sm text-darkText ml-3 my-3">
        You also like this
      </Text>
      {/* Big card */}
      <BigCard data={data} />
    </View>
  );
};

export default Home;
