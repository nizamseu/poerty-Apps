import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Component/Home/Home";
import Details from "./src/Component/Details/Detals";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/AntDesign";
import FeatherIcon from "react-native-vector-icons/Feather";
import { NativeWindStyleSheet } from "nativewind";
import DetailsScreen from "./src/Component/DetailsScreen/DetailsScreen";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function HomeNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="home" size={30} color="black" />
          ),
          tabBarLabel: "হোম",
        }}
      />

      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          tabBarIcon: ({ focused }) => (
            <FeatherIcon name="book-open" size={30} color="black" />
          ),
          tabBarLabel: "কবিতা",
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  NativeWindStyleSheet.setOutput({
    default: "native",
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeNav}
        />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
