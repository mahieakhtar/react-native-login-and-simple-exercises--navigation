import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Button } from "react-native";

export const Exercise3 = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => alert("hello")}>
          <Text style={styles.buttonHello}>Say hello</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert("goodbye")}>
          <Text style={styles.buttonGoodbye}>Say goodbye</Text>
        </TouchableOpacity>
      </View>
      <Button
        color="orange"
        title="Go to Exercise4"
        onPress={() => navigation.navigate("Exercise4")}
      />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    paddingVertical: 10,
  },

  buttonHello: {
    width: 110,
    padding: 10,
    fontSize: 20,
    backgroundColor: "#fc037b",
    color: "white",
    marginLeft: 30,
  },
  buttonGoodbye: {
    width: 140,
    padding: 10,
    fontSize: 20,
    backgroundColor: "#fc037b",
    color: "white",
    marginRight: 120,
  },
});
