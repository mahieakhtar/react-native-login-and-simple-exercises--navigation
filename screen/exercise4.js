import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const Exercise4 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.square1}>Square 1</Text>
      <Text style={styles.square2}>Square 2</Text>
      <Text style={styles.square3}>Square 3</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    marginHorizontal: 10,
    fontSize: 10,
  },
  square1: {
    padding: 30,
    backgroundColor: "#34c6eb",
  },
  square2: {
    padding: 30,
    backgroundColor: "#5cb5b2",
  },
  square3: {
    padding: 30,
    backgroundColor: "#f05d65",
  },
});
