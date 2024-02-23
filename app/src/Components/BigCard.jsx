import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
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

const BigCard = ({ feeds, user }) => {
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
      {feeds?.map((item, index) => {
        return (
          <Card
            item={item}
            index={index}
            key={index}
            currentIndex={currentIndex}
            animatedValue={animatedValue}
            prevIndex={prevIndex}
            user={user}
            feeds={feeds}
          />
        );
      })}
    </View>
  );
};

const Card = ({
  item,
  index,
  prevIndex,
  animatedValue,
  currentIndex,
  user,
  feeds,
}) => {
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
            if (currentIndex.value === feeds.length - 1) return;
            animatedValue.value = withTiming((currentIndex.value += 1));
            prevIndex.value = currentIndex.value;
          }
        }}
      >
        <Animated.View
          style={[
            {
              width: ITEM_WIDTH,
              height: ITEM_HEIGHT,
              borderRadius: 14,
              position: "absolute",
              zIndex: feeds.length - index,
              overflow: "hidden",
            },
            animatedStyle,
          ]}
        >
          <Image
            source={{ uri: item.src }}
            style={{
              width: ITEM_WIDTH,
              height: ITEM_HEIGHT,
              resizeMode: "cover",
              borderRadius: 14,
            }}
          />
          <View className="absolute p-2 w-full pb-3 bottom-0 left-0">
            <View
              style={{
                position: "absolute",
                width: ITEM_WIDTH,
                height: 112,
                backgroundColor: "#0009",
              }}
            />
            <Text className="text-xl capitalize text-white ">
              {"> "} {item?.title}
            </Text>
            <View className="flex-row mt-3 justify-start items-center ">
              <Image
                source={{ uri: user?.photoURL }}
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: "cover",
                  borderRadius: 30,
                }}
              />
              <View className=" ml-3">
                <Text className="text-3xl capitalize text-white">
                  {user?.displayName}
                </Text>
                <Text className="text-sm  text-white opacity-70">
                  2 Day ago
                </Text>
              </View>
            </View>
          </View>
        </Animated.View>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};

export default BigCard;
