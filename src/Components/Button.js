import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import COLORS from "../consts/colors";

const PrimaryButton = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainer}>
        <Text style={style.title}> {title} </Text>{" "}
      </View>{" "}
    </TouchableOpacity>
  );
};
const SecondaryButton = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={{ ...style.btnContainer, backgroundColor: COLORS.white }}>
        <Text style={{ ...style.title, color: COLORS.primary }}> {title} </Text>{" "}
      </View>{" "}
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  title: { color: COLORS.grey, fontWeight: "bold", fontSize: 18 },
  btnContainer: {
    backgroundColor: COLORS.rose,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.red,
    borderWidth: 2,
  },
});

export { PrimaryButton, SecondaryButton };