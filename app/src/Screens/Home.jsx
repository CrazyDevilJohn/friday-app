import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Background, BigCard, Header, MetCard } from "../Components";
import feeds from "../Data";
import { connector } from "../store";

const Home = (props) => {
  const { user } = props;
  return (
    <View className="w-full h-full bg-white">
      {/* custom background */}
      <Background />
      {/* custom Header */}
      <Header props={props} />
      {/* Metireal card */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingBottom: 80,
        }}
        showsVerticalScrollIndicator={false}
      >
        <MetCard feeds={feeds} user={user} />
        {/* placeholder  text */}
        <Text className="text-sm text-darkText ml-3 my-3">
          You also like this
        </Text>
        {/* Big card */}
        <BigCard feeds={feeds} user={user} />
      </ScrollView>
    </View>
  );
};

export default connector(Home);
