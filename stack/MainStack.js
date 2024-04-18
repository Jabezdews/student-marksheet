import { StyleSheet, Text, View , StatusBar as BarStatus} from "react-native";

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/login";
import { colors } from "../config";
import Home from "../screens/Home";
import { StatusBar } from "expo-status-bar";
import AddStudent from "../screens/AddStudent";
import { NavigationContainer } from '@react-navigation/native';
export default function MainStack() {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation:'slide_from_left'
        }}
      >
        <Stack.Screen name="Home" component={Login} />
        <Stack.Screen name="Dashboard" component={Home} />
        <Stack.Screen name="Add" component={AddStudent} />
      </Stack.Navigator>
    </View>
    {/* <StatusBar style="auto" /> */}
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.body,
        paddingTop: BarStatus.currentHeight + 15 || 0,
        paddingHorizontal:20,
      },
})