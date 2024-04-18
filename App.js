import { StyleSheet, Text, View , StatusBar as BarStatus} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/login";
import { colors } from "./config";
import Home from "./screens/Home";
import { StatusBar } from "expo-status-bar";
import AddStudent from "./screens/AddStudent";
import MainStack from "./stack/MainStack";
const Stack = createNativeStackNavigator();
const SubStack = createNativeStackNavigator();
// import { StatusBar } from "expo-status-bar";
export default function App() {
  console.log(StatusBar.currentHeight, 777777);
  return (
    // <NavigationContainer>
    //   <View style={styles.container}>
    //     <StatusBar style="dark" />
    //     <Stack.Navigator
    //       screenOptions={{
    //         headerShown: false,
    //         animation:'slide_from_left'
    //       }}
    //     >
    //       <Stack.Screen name="Add" component={AddStudent} />
    //       <Stack.Screen
    //       name="Home"
         
    //     />

    //       <Stack.Screen name="Dashboard" component={Dashboard} />
    //       <Stack.Screen name="Home" component={Login} />
    //     </Stack.Navigator>
    //   </View>
    //   {/* <StatusBar style="auto" /> */}
    // </NavigationContainer>
    <MainStack/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.body,
    paddingTop: BarStatus.currentHeight + 15 || 0,
    paddingHorizontal:20,
  },
});
