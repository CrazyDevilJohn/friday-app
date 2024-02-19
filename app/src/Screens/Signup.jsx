import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const Signup = (props) => {
  const {
    navigation: { navigate },
  } = props;

  const [image, setImage] = useState(null);

  return (
    <View className="w-full h-full bg-white">
      <View className="w-300 h-300 bg-primaryOrange rounded-full -top-24 -left-24" />
      <ScrollView className="px-12 -mt-11 pb-1">
        <Text className="text-xl font-medium text-darkText">Welcome!</Text>
        <Text className="text-2xl font-semibold text-black">Sign Up</Text>

        <View className="items-center justify-center mt-8">
          <View className="w-70 h-70 bg-primaryOrange rounded-full ">
            {image ? (
              <Image source={image?.url} className="w-full h-full" />
            ) : (
              <View className="w-full h-full bg-[#0009] rounded-full justify-center items-center">
                <Feather name="camera" size={24} color="white" />
              </View>
            )}
          </View>
          <Input placeholder={"User Name"} />
          <Input placeholder={"Email Address"} />
          <Input placeholder={"Password"} />
          <View className="mt-8 w-28 h-10 rounded-2xl justify-center items-center bg-primaryOrange">
            <TouchableOpacity>
              <Text className="text-xl text-white">Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View className="justify-center items-center flex-row mt-6">
            <Text className="text-sm font-medium text-black items-center justify-center">
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigate("Login")}>
              <Text className="text-sm font-medium text-black ml-2">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const Input = ({ placeholder }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    switch (placeholder) {
      case "User Name":
        setText("Yor Name");
        break;
      case "Email Address":
        setText("Your Email Address");
        break;
      case "Password":
        setText("Password");
        break;
    }
  }, []);

  return (
    <View className="w-full h-14 border-2 border-primaryOrange rounded-xl mt-10">
      <Text className="absolute -top-3 left-4 bg-white px-1 text-sm">
        {placeholder}
      </Text>
      <TextInput
        placeholder={text}
        className="w-full h-full p-1 pl-4 text-xl text-black"
      />
    </View>
  );
};

export default Signup;
