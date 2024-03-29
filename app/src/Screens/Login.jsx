import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

const Login = (props) => {
  const {
    navigation: { navigate },
  } = props;
  return (
    <View className="w-full h-full bg-white">
      <View className="w-300 h-300 bg-primaryOrange rounded-full -top-24 -left-24" />
      <View className="px-12">
        <Text className="text-xl font-medium text-darkText">Welcome!</Text>
        <Text className="text-2xl font-semibold text-black">Login</Text>

        <View className="items-center justify-center">
          <Input placeholder={"User Name"} />
          <Input placeholder={"Password"} />
          <View className="mt-8 w-28 h-10 rounded-2xl justify-center items-center bg-primaryOrange">
            <TouchableOpacity>
              <Text className="text-xl text-white">Login</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text className="text-sm mt-5 font-medium text-black">
              Forget Password?
            </Text>
          </TouchableOpacity>
          <View className="justify-center items-center flex-row mt-16">
            <Text className="text-sm font-medium text-black items-center justify-center">
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigate("Signup")}>
              <Text className="text-sm font-medium text-black ml-2">
                Create Account!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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

export default Login;
