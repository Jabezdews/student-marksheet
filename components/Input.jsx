import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import React, { memo, useState } from "react";

const eyeIcon = require("../assets/images/login/Eye_icon.png");

function Input({
  placeholder,
  name,
  InpVal,
  onChange,
  password = false,
  type,
  disabled = false,
  inputMode = "none",
  keyboardType = "default",
  label,inputStyle={},
  errStyle={},
  err,labeStyle={}
}) {
  const [secureTextStatus, SetSecureTextStatus] = useState(
    password ? true : false
  );
  console.log("input rendered", name);
  return (
    <View>
      {label && <Text style={labeStyle}>{label}</Text>}
      <TextInput
        style={[styles.Input,inputStyle]}
        type={type}
        placeholder={placeholder}
        name={name}
        secureTextEntry={secureTextStatus}
        onChangeText={(val) => onChange(val, name)}
        value={InpVal}
        inputMode={inputMode}
        
        keyboardType={keyboardType}
      />
      {password && (
        <Pressable
          style={styles.passwordBtn}
          onPress={() => {
            SetSecureTextStatus(!secureTextStatus);
          }}
        >
          <Text>
            <Image
              style={styles.eyeIcon}
              source={eyeIcon}
              resizeMode="contain"
            />
          </Text>
        </Pressable>
      )}
      {err?<Text style={[styles.error,errStyle]}>{err}</Text>:null}
    </View>
  );
}
export default memo(Input);
const styles = StyleSheet.create({
  Input: {
    borderBottomWidth: 1,
    borderColor: "#cacaca",
    minWidth: 300,
    paddingVertical: 8,
  },
  passwordBtn: {
    position: "absolute",
    right: "0%",
    top: "31%",
  },
  eyeIcon: {
    width: 23,
    // height: 19,
  },
  error:{
    fontSize:12,
    color:'red',
    position:'absolute',
    
  }
});
