import React from "react";
import { Text, StyleSheet, View, Image, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../consts/colors";
import { PrimaryButton } from "../Button";

const OnBoard = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../consts/background.png")}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{
            width: "90%",
            height: "20%",
            marginTop: -650,
          }}
          resizeMode="contain"
          source={require("../../consts/khazina.png")}
        />{" "}
      </View>{" "}
      <View style={style.textContainer}>
        <View style={{ marginTop: -600, flexDirection: "column" }}>
          <Text
            style={{
              marginTop: 30,
              fontSize: 35,
              fontWeight: "bold",
              textAlign: "center",
              color: COLORS.grey,
            }}
          >
            Bienvenue Cher(e) Caissier(e){" "}
          </Text>{" "}
        </View>{" "}
        <View style={{ marginTop: "20%", width: "30%", marginLeft: 480 }}>
          <PrimaryButton
            onPress={() => navigation.navigate("Home")}
            title="Commencer"
            style={{ alignSelf: "center" }}
          />{" "}
        </View>{" "}
      </View>{" "}
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    //alignItems: 'center',
    //flexDirection: 'column',
  },

  textContainer: {
    //marginTop: -200,
  },
});

export default OnBoard;
