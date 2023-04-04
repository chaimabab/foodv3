import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import COLORS from "./colors";

const PrimaryButton = ({ title }) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={style.btnContainer}>
        <Text style={style.title}> {title} </Text>
      </View>
    </TouchableOpacity>
  );
};

const SecondaryButton = ({ title }) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={{ ...style.btnContainer, backgroundColor: COLORS.white }}>
        <Text style={{ ...style.title, color: COLORS.primary }}> {title} </Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  title: {
    color: COLORS.white,
    fontWeight: "blod",
    fontSize: 18,
  },
  btnContainer: {
    backgroundColor: COLORS.primary,
    height: 60,
    borderRadius: 30,
    justifyContent: 30,
    alignItem: "center",
  },
});

export default { PrimaryButton, SecondaryButton };