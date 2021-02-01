import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";

export const Exercise5 = () => {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>What is your name?</Text>
      <TextInput
        style={styles.input}
        placeholder="John Deo"
        onChangeText={(value) => setName(value)}
      />
      <TouchableOpacity onPress={() => Alert.alert("Hello " + name)}>
        <Text style={styles.buttonText}>Say hello</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  questionText: {
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 20,
    marginLeft: 10,
  },
  input: {
    borderWidth: 0.5,
    borderColor: "#888",
    borderRadius: 20,
    backgroundColor: "#e8e6e6",
    padding: 10,
    margin: 15,
    width: 400,
  },
  buttonText: {
    color: "skyblue",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 150,
  },
});
