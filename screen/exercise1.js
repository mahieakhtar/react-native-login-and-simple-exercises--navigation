import React from "react";
import { StyleSheet, Text, SafeAreaView, View, Button } from "react-native";

export const Exercise1 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text1}>Hello,World!</Text>

      <Button
        color="orange"
        title="Go to Exercise2"
        onPress={() => navigation.navigate("Exercise2")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  text1: {
    backgroundColor: "#34c6eb",
    fontSize: 20,
    padding: 30,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 150,
  },
});
