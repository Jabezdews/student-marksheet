import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Dash from "../components/TabContent/Dash";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListAll from "../components/TabContent/ListAll";
import List from "../components/TabContent/List";
import { colors } from "../config";
const SubStack = ({ FilterType }) => {
  const Tab = createNativeStackNavigator();
  console.log(FilterType, 10);
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          animation: "fade",
        }}
      >
        <Tab.Screen name="All" component={Dash} />
        <Tab.Screen name="List All" component={ListAll} />
        <Tab.Screen name="List" component={List} />
      </Tab.Navigator>
    </View>
  );
};

export default SubStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.body,
  },
});
