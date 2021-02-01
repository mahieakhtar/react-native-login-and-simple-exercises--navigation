import React from "react";
import { StyleSheet, View, Text, ImageBackground, Button } from "react-native";

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.ImageBackground}
        source={require("../assets/images.png")}
      >
        <View style={styles.textcontainer}>
          <Text style={styles.text}>Welcome </Text>
          <Text style={styles.text}> To </Text>
          <Text style={styles.text}> The Simple Exercises </Text>
          <Text style={styles.text}> On react-native </Text>
          <Text style={styles.text}> Using </Text>
          <Text style={styles.text}> Stack Navigation</Text>
          <Text style={styles.text}> & Tab Navigation</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            color="red"
            title="Login"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  ImageBackground: {
    width: "100%",
    height: "100%",
  },
  textcontainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    padding: 7,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 150,
  },
});
