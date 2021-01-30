import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = () => {
    if (email != "" && password != "") {
      if (email.email === "Mahie@x.com" && password.password === "test") {
        alert("Successfull");
      } else {
        alert("Please enter correct Email and Password");
      }
    }
  };
  return (
    <ImageBackground
      style={styles.backgroundContainer}
      source={require("../assets/image2.png")}
    >
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={require("../assets/icon.png")} />
        <Text style={styles.iconText}>Welcome!</Text>
      </View>
      <View style={styles.Container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Emails"
            value={email}
            onChangeText={(text) => setEmail({ email: text })}
          />
          <MaterialIcons
            style={styles.inputIcon}
            name="email"
            size={22}
            color="black"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Password"}
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword({ password: text })}
          />

          <MaterialIcons
            style={styles.inputIcon}
            name="lock"
            size={22}
            color="black"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.buttonLogin} onPress={handlePress}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: null,
    height: null,
  },
  iconContainer: {
    alignItems: "center",
  },
  icon: {
    width: 120,
    height: 120,
  },
  iconText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    opacity: 0.5,
    marginBottom: 50,
  },
  inputContainer: {
    marginTop: 2,
  },
  Container: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: "#e8e6e6",
    width: 350,
    height: 45,
    fontSize: 16,
    paddingLeft: 45,
    color: "gray",
    marginHorizontal: 25,
  },
  inputIcon: {
    bottom: 35,
    left: 32,
  },
  buttonLogin: {
    width: 350,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#666",
    justifyContent: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});
