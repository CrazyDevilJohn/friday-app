import { BlurView } from "expo-blur";
import React from "react";
import { View, Text, Dimensions, FlatList, Image } from "react-native";

const { width, height } = Dimensions.get("screen");

const CARD_WIDTH = width * 0.72;
const CARD_HEIGHT = 180;

const MetCard = ({ data }) => {
  return (
    <View className="w-full mt-3" style={{ height: CARD_HEIGHT }}>
      <FlatList
        data={data}
        keyExtractor={(_, i) => i.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 20}
        renderItem={({ item, index }) => {
          return (
            <View
              className="mx-3 rounded-xl overflow-hidden"
              style={{
                height: CARD_HEIGHT,
                width: CARD_WIDTH,
              }}
            >
              <Image
                source={{ uri: item.src }}
                className="w-full h-full object-cover rounded-xl"
              />
              <View className="absolute w-full h-14  bottom-0">
                <BlurView
                  tint="dark"
                  intensity={20}
                  className="absolute w-full h-full"
                />
                <View />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MetCard;
