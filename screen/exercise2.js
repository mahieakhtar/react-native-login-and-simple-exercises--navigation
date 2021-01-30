import React from "react";
import { StyleSheet, View, Button } from "react-native";

export const Exercise2 = ({ navigation }) => {
  const handlePress = () => {
    alert("hello!");
  };
  return (
    <View style={styles.container}>
      <Button color="blue" title="Button1" onPress={handlePress} />
      <Button
        color="orange"
        title="Go to Exercise3"
        onPress={() => navigation.navigate("Exercise3")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
