import React from "react";
import { View, StatusBar } from "react-native";

const SafeAreaView = ({ children, style, className }) => {
  return (
    <View
      style={{
        ...style,
        flex: 1,
        paddingTop: StatusBar.currentHeight + 10 || 20,
      }}
      className={className}
    >
      {children}
    </View>
  );
};

export default SafeAreaView;
