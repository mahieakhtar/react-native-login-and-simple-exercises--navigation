import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "./screen/home";
import { Exercises } from "./screen/exercises";
import { Exercise1 } from "./screen/exercise1";
import { Exercise2 } from "./screen/exercise2";
import { Exercise3 } from "./screen/exercise3";
import { Exercise4 } from "./screen/exercise4";
import { Exercise5 } from "./screen/exercise5";
import { Login } from "./screen/login";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Exercise1"
        options={{ title: "Hello World!" }}
        component={Exercise1}
      />
      <Stack.Screen
        name="Exercise2"
        options={{ title: "Capturing Taps" }}
        component={Exercise2}
      />
      <Stack.Screen
        name="Exercise3"
        options={{ title: "Custom Component" }}
        component={Exercise3}
      />
      <Stack.Screen
        name="Exercise4"
        options={{ title: "Styling" }}
        component={Exercise4}
      />
      <Stack.Screen
        name="Exercise5"
        options={{ title: "Building a Form" }}
        component={Exercise5}
      />
      <Stack.Screen
        name="Exercises"
        options={{ title: "Simple Exercises" }}
        component={Exercises}
      />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          options={{
            headerStyle: {
              backgroundColor: "#c7c9c7",
            },
            headerTintColor: "#333",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          component={StackNavigator}
        />

        <Tab.Screen name="Exercises" component={Exercises} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
