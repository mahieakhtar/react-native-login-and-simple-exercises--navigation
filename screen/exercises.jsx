import React from "react";
import { StyleSheet, View, ImageBackground, Button } from "react-native";

export const Exercises = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.ImageBackground}
        source={require("../assets/images1.jpeg")}
      >
        <View style={styles.buttonContainer}>
          <Button
            title="Exercise1"
            onPress={() => navigation.navigate("Exercise1")}
          />
          <Button
            title="Exercise2"
            onPress={() => navigation.navigate("Exercise2")}
          />
          <Button
            title="Exercise3"
            onPress={() => navigation.navigate("Exercise3")}
          />

          <Button
            title="Exercise4"
            onPress={() => navigation.navigate("Exercise4")}
          />

          <Button
            title="Exercise5"
            onPress={() => navigation.navigate("Exercise5")}
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
    marginTop: 80,
  },
  ImageBackground: {
    width: "100%",
    height: "100%",
  },

  buttonContainer: {
    paddingTop: 250,
  },
});
