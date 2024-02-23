import React, { useEffect } from "react";
import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons";

const Header = ({ props }) => {
  const { setIsDrawerOpen, isDrawerOpen } = props;

  useEffect(() => {
    StatusBar.setBarStyle("light-content");
  }, []);

  return (
    <View className="w-full h-24">
      <View className="w-full h-full absolute top-0 left-0 bg-black opacity-70" />
      <View
        className="w-full h-full justify-between items-center p-3 flex-row"
        style={{ paddingTop: StatusBar.currentHeight + 10 || 20 }}
      >
        <View className="w-9 h-9 justify-center items-center">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setIsDrawerOpen(true)}
          >
            {isDrawerOpen ? (
              <Ionicons name="close-sharp" size={24} color="#fff" />
            ) : (
              <SimpleLineIcons name="menu" size={24} color="#fff" />
            )}
          </TouchableOpacity>
        </View>
        <View className="p-1 border h-[35px] w-28 justify-center items-center rounded-xl border-white -left-20">
          <Text className="font-semibold text-white ">Pix Post</Text>
        </View>
        <View className="w-9 h-9">
          <Image
            source={{
              uri: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
            }}
            className="w-9 h-9 rounded-full"
          />
        </View>
      </View>
    </View>
  );
};

export default Header;
