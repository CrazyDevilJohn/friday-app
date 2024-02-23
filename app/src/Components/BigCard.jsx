import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import data from "../Data";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  Directions,
  FlingGestureHandler,
  State,
} from "react-native-gesture-handler";

const { width, height } = Dimensions.get("screen");

const ITEM_WIDTH = width * 0.73;
const ITEM_HEIGHT = ITEM_WIDTH * 1.5;
const VISIBLE_ITEMS = 5;

const BigCard = ({ data }) => {
  const animatedValue = useSharedValue(0);
  const currentIndex = useSharedValue(0);
  const prevIndex = useSharedValue(0);
  return (
    <View
      style={{
        width,
        height: ITEM_HEIGHT + 30,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data?.map((item, index) => {
        return (
          <Card
            item={item}
            index={index}
            key={index}
            currentIndex={currentIndex}
            animatedValue={animatedValue}
            prevIndex={prevIndex}
          />
        );
      })}
    </View>
  );
};

const Card = ({ item, index, prevIndex, animatedValue, currentIndex }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [index - 1, index, index + 1];
    const translateX = interpolate(
      animatedValue.value,
      inputRange,
      [30, 0, -30]
    );
    const scale = interpolate(animatedValue.value, inputRange, [0.9, 1, 1.1]);
    const opacity = interpolate(animatedValue.value, inputRange, [
      1 - 1 / VISIBLE_ITEMS,
      1,
      0,
    ]);

    return {
      transform: [{ translateX }, { scale }],
      opacity,
    };
  });
  return (
    <FlingGestureHandler
      key={"RIGHT"}
      direction={Directions.RIGHT}
      onHandlerStateChange={(ev) => {
        if (ev.nativeEvent.state === State.END) {
          if (currentIndex.value === 0) return;
          animatedValue.value = withTiming((currentIndex.value -= 1));
          prevIndex.value = currentIndex.value - 1;
        }
      }}
    >
      <FlingGestureHandler
        key={"LEFT"}
        direction={Directions.LEFT}
        onHandlerStateChange={(ev) => {
          if (ev.nativeEvent.state === State.END) {
            if (currentIndex.value === data.length - 1) return;
            animatedValue.value = withTiming((currentIndex.value += 1));
            prevIndex.value = currentIndex.value;
          }
        }}
      >
        <Animated.Image
          source={{ uri: item.src }}
          style={[
            {
              width: ITEM_WIDTH,
              height: ITEM_HEIGHT,
              resizeMode: "cover",
              borderRadius: 14,
              position: "absolute",
              zIndex: data.length - index,
            },
            animatedStyle,
          ]}
        />
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};

export default BigCard;
