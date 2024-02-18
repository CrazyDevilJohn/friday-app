import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { LOGINBG, Google } from "../../assets";
import SafeAreaView from "../Components/SafeAreaView";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase";

const Login = (props) => {
  const {
    navigation: { navigate },
  } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const provider = new GoogleAuthProvider();

  const signIn = async () => {
    await signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <View className="w-full h-full justify-center items-center">
      <Image source={LOGINBG} className="w-full h-full object-cover" />
      <SafeAreaView
        style={{
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View className="bg-white w-300 h-370 rounded-md elevation">
          <Text className="text-center font-semibold py-5 mt-2 text-3xl text-black">
            Log In
          </Text>
          <View>
            <UserInput
              placeholder={"Email Address"}
              setState={setEmail}
              value={email}
            />
            <UserInput
              placeholder={"Password"}
              setState={setPassword}
              value={password}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const UserInput = ({ placeholder, setState, value }) => {
  return (
    <View className="flex-row bg-[#f6f6f8] mx-3 h-12 elevation my-3 px-2 py-1 items-center justify-start rounded-xl border border-gray-400">
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#000"}
        onChangeText={setState}
        value={value}
        className="w-full h-full"
      />
    </View>
  );
};

export default Login;
