import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { connector } from "../store";

const { width, height } = Dimensions.get("screen");
const DRAWER_WIDTH = width / 1.5;

const drawerList = [
  {
    title: "All post",
    icon: () => (
      <MaterialCommunityIcons name="collage" size={24} color="black" />
    ),
    onPress: () => {},
  },
  {
    title: "create a post",
    icon: () => (
      <MaterialIcons name="add-photo-alternate" size={24} color="black" />
    ),
    onPress: () => {},
  },
  {
    title: "faverites",
    icon: () => <MaterialIcons name="favorite" size={24} color="black" />,
    onPress: () => {},
  },
  {
    title: "follwers",
    icon: () => <FontAwesome name="user-plus" size={24} color="black" />,
    onPress: () => {},
  },
];

const Drawer = ({ children, isDrawerOpen, setIsDrawerOpen, user }) => {
  const translateX = useSharedValue(0);
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    if (isDrawerOpen) {
      translateX.value = withTiming(DRAWER_WIDTH + 20);
      scale.value = withTiming(0.88);
    } else {
      translateX.value = withTiming(0);
      scale.value = withTiming(1);
    }
    return {
      transform: [{ scale: scale.value }, { translateX: translateX.value }],
    };
  });
  return (
    <View style={{ flex: 1, backgroundColor: "#0d192e", flexDirection: "row" }}>
      <View
        style={{
          width: DRAWER_WIDTH,
          overflow: "hidden",
          borderTopRightRadius: 20,
        }}
      >
        <View
          style={{
            width: DRAWER_WIDTH,
            height: 150,
            backgroundColor: "#333",
            paddingTop: StatusBar.currentHeight + 15,
            paddingHorizontal: 10,
            borderTopRightRadius: 20,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingBottom: 10,
          }}
        >
          <Image
            source={{ uri: user?.coverImage }}
            style={{
              position: "absolute",
              width: DRAWER_WIDTH,
              height: 150,
              resizeMode: "cover",
            }}
          />
          <View
            style={{
              position: "absolute",
              width: DRAWER_WIDTH,
              height: 150,
              backgroundColor: "#000",
              opacity: 0.4,
            }}
          />
          <Image
            source={{ uri: user?.photoURL }}
            style={{ width: 70, height: 70, borderRadius: 50 }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text className="text-2xl capitalize text-white">
              {user?.displayName}
            </Text>
            <Text className="text-sm text-white">{user?.email}</Text>
          </View>
        </View>
        {/* drawer items */}
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <ScrollView>
            {drawerList?.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    width: DRAWER_WIDTH - 20,
                    height: 40,
                    backgroundColor: "#fff",
                    borderRadius: 10,
                    marginBottom: 20,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                    onPress={() => item?.onPress()}
                  >
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {item?.icon()}
                    </View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "600",
                        textTransform: "capitalize",
                      }}
                    >
                      {item?.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
          <View
            style={{
              width: DRAWER_WIDTH - 20,
              height: 40,
              backgroundColor: "#fff",
              borderRadius: 10,
              marginBottom: 20,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
              onPress={() => {}}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons name="logout" size={24} color="black" />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  textTransform: "capitalize",
                }}
              >
                log out
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Animated.View
        style={[
          {
            top: 0,
            width,
            height,
            overflow: "hidden",
            borderRadius: 20,
            position: "absolute",
          },
          animatedStyle,
        ]}
      >
        {isDrawerOpen && (
          <TouchableOpacity
            onPress={() => setIsDrawerOpen(false)}
            activeOpacity={1}
            style={{ position: "absolute", width, height, zIndex: 100 }}
          ></TouchableOpacity>
        )}
        <View
          pointerEvents={isDrawerOpen ? "none" : "auto"}
          style={{ flex: 1 }}
        >
          {children}
        </View>
      </Animated.View>
    </View>
  );
};

export default connector(Drawer);
