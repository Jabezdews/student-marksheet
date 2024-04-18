import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  Touchable,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { colors } from "../config";
import Input from "../components/Input";
import { StatusBar } from "expo-status-bar";
function Login({navigation}) {
  // console.log("login");
  // Alert.alert("login");
  const FormInitialState={userName: "", password: ""}
  const [formVal, SetFormVal] = useState({ userName: "", password: "" });
  const [formErr, SetFormErr] = useState({});
  const [isValid, SetValid] = useState(false);
  const InputHandler = useCallback(
    (val, fieldName) => {
      console.log(val, fieldName);
      SetFormVal({ ...formVal, [fieldName]: val });
    },
    [formVal]
  );
  const [tabActive, SetTabActive] = useState("Admin");
  console.log(formVal);
  const SubmitForm = () => {
    console.log(formVal);
    SetFormErr(Validate);
    SetFormVal(FormInitialState)
    SetValid(true);
  };
  useEffect(() => {
    if (Object.keys(formErr).length === 0 && isValid) {
      SetFormErr({})
      SetValid(false);
      navigation.navigate('Dashboard')
    }
  }, [isValid]);

  const Validate = () => {
    let err = {};
    Object.keys(formVal).forEach((key) => {
      if (formVal[key] === "") {
        err[key] = "Field can not be empty";
      }
    });
    return err;
  };
  
  return (
    <View style={styles.loginHolder}>
      <Text style={styles.headText}>Hello Again!</Text>
      <Text style={styles.SubText}>Welcome Back you've been missed</Text>
      <View
        style={[
          styles.BtnHolder,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Pressable
          style={styles.BtnTouchable}
          onPress={() => SetTabActive("Data Entry")}
        >
          <Text
            style={[
              styles.BtnTouchableText,
              tabActive === "Data Entry" ? styles.BtnTouchableTextActive : null,
            ]}
          >
            Data Entry
          </Text>
        </Pressable>
        <Pressable
          style={[styles.BtnTouchable]}
          onPress={() => SetTabActive("Admin")}
        >
          <Text
            style={[
              styles.BtnTouchableText,
              tabActive === "Admin" ? styles.BtnTouchableTextActive : null,
            ]}
          >
            Admin
          </Text>
        </Pressable>
      </View>
      <View>
        <Input
          placeholder={"Enter the Username"}
          name={"userName"}
          InpVal={formVal.userName}
          onChange={InputHandler}
          inputMode={"email"}
          keyboardType={"email-address"}
          label={"Username"}
          inputStyle={{ marginBottom: 40 }}
          err={formErr?.userName}
          errStyle={{bottom:"25%"}}
          labeStyle={{position:"absolute" ,top:'-25%'}}
        />
        <Input
          placeholder={"Enter the Password"}
          name={"password"}
          InpVal={formVal.password}
          onChange={InputHandler}
          password={true}
          inputStyle={{ marginBottom: 28 }}
          label={"Password"}
          err={formErr?.password}
          errStyle={{bottom:"25%"}}
          labeStyle={{position:"absolute" ,top:'-25%'}}


        />
        <Pressable
          style={{ justifyContent: "center", alignItems: "center" }}
          onPress={SubmitForm}
        >
          <Text style={styles.Submit}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}
export default Login;

const styles = StyleSheet.create({
  loginHolder: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.body,
    paddingTop: 40,
  },
  headText: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.textDark,
    textAlign: "center",
  },
  SubText: {
    fontSize: 20,
    color: colors.textGrey,
    marginTop: 40,
    textAlign: "center",
  },
  BtnHolder: {
    flexDirection: "row",
    backgroundColor: colors.secondary,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginVertical: 40,
  },
  BtnTouchable: {
    borderRadius: 16,
    // paddingVertical: 4,
    // marginVertical: 4,
  },
  BtnTouchableText: {
    // color: colors.primary,
    paddingVertical: 4,
    marginHorizontal: 4,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "transparent",
    fontSize: 18,
  },
  BtnTouchableTextActive: {
    color: "#ffffff",
    backgroundColor: colors.primary,
  },
  Submit: {
    backgroundColor: colors.primary,
    color: "#fff",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginTop: 40,
  },
});
