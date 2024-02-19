import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BottomTabs = (props) => {
  const { activeScreen } = props;
  const navigation = useNavigation();

  return (
    <View className="absolute h-[60px] bg-[#edeaf0] bottom-3 left-3 right-3 justify-between items-center flex-row rounded-3xl">
      <View className="w-20 h-20 justify-center items-center ">
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons
            name="home-outline"
            size={32}
            color={activeScreen === "Home" ? "#FFB800" : "#555"}
          />
        </TouchableOpacity>
      </View>
      <View className="w-20 h-20 justify-center items-center ">
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Upload")}
        >
          <AntDesign
            name="plus"
            size={32}
            color={activeScreen === "Upload" ? "#FFB800" : "#555"}
          />
        </TouchableOpacity>
      </View>
      <View className="w-20 h-20 justify-center items-center ">
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Profile")}
        >
          <Feather
            name="user"
            size={32}
            color={activeScreen === "Profile" ? "#FFB800" : "#555"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomTabs;
