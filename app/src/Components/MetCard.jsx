import { BlurView } from "expo-blur";
import React from "react";
import { View, Text, Dimensions, FlatList, Image } from "react-native";

const { width, height } = Dimensions.get("screen");

const ITEM_WIDTH = width * 0.72;
const ITEM_HEIGHT = 180;

const MetCard = ({ feeds, user }) => {
  return (
    <View className="w-full mt-3" style={{ height: ITEM_HEIGHT }}>
      <FlatList
        data={feeds}
        keyExtractor={(_, i) => i.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH + 24}
        renderItem={({ item, index }) => {
          return (
            <View
              className="mx-3 rounded-xl overflow-hidden"
              style={{
                height: ITEM_HEIGHT,
                width: ITEM_WIDTH,
              }}
            >
              <Image
                source={{ uri: item.src }}
                className="w-full h-full object-cover rounded-xl"
              />
              <View className="absolute w-full h-14  bottom-0 flex-row mt-3 justify-start items-center">
                <View className="absolute w-full h-full bg-black opacity-70" />

                <Image
                  source={{ uri: user?.photoURL }}
                  style={{
                    width: 40,
                    height: 40,
                    resizeMode: "cover",
                    borderRadius: 30,
                    marginHorizontal: 10,
                  }}
                />
                <Text className="text-xl capitalize text-white">
                  {user?.displayName}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MetCard;
