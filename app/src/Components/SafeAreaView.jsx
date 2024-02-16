import React from "react";
import { View, StatusBar } from "react-native";

const SafeAreaView = ({ children, style }) => {
  return (
    <View
      style={{
        ...style,
        flex: 1,
        paddingTop: StatusBar.currentHeight + 10 || 20,
      }}
    >
      {children}
    </View>
  );
};

export default SafeAreaView;
