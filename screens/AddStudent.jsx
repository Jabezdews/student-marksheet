import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { BASE_URL, colors } from "../config";
import Input from "../components/Input";
import AddModel from "../components/AddModel";
import axios from "axios";

const Back = require("../assets/images/add-student/Backarrow_icon.png");
const AddStudent = ({ navigation }) => {
  const initialFormState = {
    Name: "",
    Email: "",
    "Phone Number": "",
    Gender: "",
    Standard: "",
    "Mark 1": "",
    "Mark 2": "",
    "Mark 3": "",
    "Mark 4": "",
    "Mark 5": "",
  };
  const [ModalVisible, setModalVisible] = useState(false);
  const [formVal, SetFormVal] = useState(initialFormState);
  const [isValid, SetValid] = useState(false);
  const [formErr, SetFormErr] = useState({});
  const [ModalData, setModalData] = useState({
    total: null,
    average: null,
    grade: null,
  });
  const formField = [
    { FieldName: "Name", inputMode: "text", keyboardType: "default" },
    { FieldName: "Email", inputMode: "text", keyboardType: "email-address" },
    {
      FieldName: "Phone Number",
      inputMode: "decimal",
      keyboardType: "phone-pad",
    },
    {
      FieldName: "Gender",
      inputMode: "text",
      keyboardType: "default",
      disabled: "true",
      type: "select",
      options: ["Male", "Female", "Others"],
    },
    {
      FieldName: "Standard",
      inputMode: "text",
      keyboardType: "default",
      disabled: "true",
      type: "select",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    },
    { FieldName: "Mark 1", inputMode: "decimal", keyboardType: "decimal-pad" },
    { FieldName: "Mark 2", inputMode: "decimal", keyboardType: "decimal-pad" },
    { FieldName: "Mark 3", inputMode: "decimal", keyboardType: "decimal-pad" },
    { FieldName: "Mark 4", inputMode: "decimal", keyboardType: "decimal-pad" },
    { FieldName: "Mark 5", inputMode: "decimal", keyboardType: "decimal-pad" },
  ];
  const InputHandler = useCallback(
    (val, fieldName) => {
      console.log(val, fieldName);
      SetFormVal({ ...formVal, [fieldName]: val });
    },
    [formVal]
  );
  console.log("add student render");

  const SubmitForm = () => {
    console.log(formVal);
    SetFormErr(Validate);
    SetValid(true);
  };
  useEffect(() => {
    if (Object.keys(formErr)?.length === 0 && isValid) {
      SetFormErr({});
      SetValid(false);
      SetFormVal(initialFormState);

      let total =
        Number(formVal?.["Mark 1"]) +
        Number(formVal?.["Mark 2"]) +
        Number(formVal?.["Mark 3"]) +
        Number(formVal?.["Mark 4"]) +
        Number(formVal?.["Mark 5"]);
      let average = total / 5;
      let grade =
        Number(formVal?.["Mark 1"]) < 35 ||
        Number(formVal?.["Mark 2"]) < 35 ||
        Number(formVal?.["Mark 3"]) < 35 ||
        Number(formVal?.["Mark 4"]) < 35 ||
        Number(formVal?.["Mark 5"]) < 35
          ? "Fair & Fail"
          : average >= 35 && average < 50
          ? "Ok"
          : average >= 50 && average < 75
          ? "Good"
          : average >= 75 && average < 90
          ? "Very Good"
          : average >= 90
          ? "Excellent"
          : "";
          axios.post(`${BASE_URL}/Students`,formVal).then((res)=>console.log(res,115)).catch((err)=>console.log(err))
      setModalData({ total, average, grade });
      setModalVisible(true)
      // navigation.navigate("Dashboard");
    }
  }, [isValid]);

  const Validate = () => {
    let err = {};


    const regexValid = [
      /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
      /^[6-9]\d{9}$/,
    ];
    const regexField = ["Email", "Phone Number"];
    let marks = ["Mark 1", "Mark 2", "Mark 3", "Mark 4", "Mark 5"];
    // console.log(formstate);
    if (formVal.Name.length < 4 || formVal.Name.length > 12) {
      err.Name = "*Name must be between 4 and 12 characters";
    }
    regexField.forEach((item, i) => {
      if (!regexValid[i].test(formVal?.[item])) {
        err[item] = `*Please enter a valid ${item}`;
      }
    });
    Object.keys(formVal).forEach((item, i) => {
      // console.log(formVal?.[item]);
      if (formVal?.[item]?.trim() === "" && item !== "comments") {
        // console.log(item);
        err[item] = `*${item} Field is Required`;
      }
    });

    marks.forEach((item, i) => {
      // console.log(formVal?.[item]);
      if (Number(formVal?.[item]) < 0 || Number(formVal?.[item]) > 100) {
        err[item] = `*This ${item} must be a valid mark between 0 and 100`;
      }
    });

    Object.keys(formVal).forEach((key) => {
      console.log(key);
      if (formVal[key] === "") {
        err[key] = "Field can not be empty";
      }
    });
    return err;
  };
  const [DropdownStatus, setDropdownStatus] = useState(null);

  const handleClose = () => {
    setModalVisible(true);
  };
  console.log(formVal);
  return (
    <View style={styles.addStudentContainer}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView>
          <Pressable
            onPress={() => {
              if (DropdownStatus) {
                setDropdownStatus(null);
              }
            }}
          >
            <View>
              <View style={styles.header}>
                <Pressable onPress={() => navigation.navigate("Dashboard")}>
                  <Image source={Back} />
                </Pressable>
                <Text style={styles.headerText}>Add</Text>
              </View>
              <View>
                {formField?.map(
                  (
                    {
                      FieldName,
                      keyboardType,
                      inputMode,
                      disabled,
                      type,
                      options,
                    },
                    i
                  ) =>
                    type ? (
                      <View key={i}>
                        <Text>{FieldName}</Text>
                        <Pressable onPress={() => setDropdownStatus(FieldName)}>
                          <TextInput
                            style={[
                              {
                                borderBottomWidth: 1,
                                borderColor: "#cacaca",
                                minWidth: 300,
                                paddingVertical: 8,
                                marginBottom: 20,
                                color: "#000",
                              },
                            ]}
                            placeholder={"placeholder"}
                            // onFocus={()=>{
                            //   if (DropdownStatus) {
                            //     setDropdownStatus(null);
                            //   }
                            // }}
                            editable={false}
                            // secureTextEntry={secureTextStatus}
                            // onChangeText={(val) => onChange(val, name)}
                            value={formVal?.[FieldName]}

                            // inputMode={inputMode}
                            // keyboardType={keyboardType}
                          />
                        </Pressable>
                        {formErr?.[FieldName] ? (
                          <Text
                            style={[
                              {
                                fontSize: 12,
                                color: "red",
                                position: "absolute",
                                bottom: "1%",
                              },
                            ]}
                          >
                            {formErr?.[FieldName]}
                          </Text>
                        ) : null}

                        {DropdownStatus === FieldName && (
                          <View
                            style={{
                              position: "absolute",
                              width: "100%",
                              transform: [{ translateY: 70 }],
                              justifyContent: "center",
                              backgroundColor: "#fff",
                              zIndex: 10,
                              maxHeight: 200,
                              overflow: "hidden",
                              borderRadius: 10,
                              paddingHorizontal: 15,
                              paddingVertical: 20,
                              shadowColor: "#ccc",
                              shadowOffset: {
                                width: 0,
                                height: 4,
                              },
                              shadowOpacity: 0.3,
                              shadowRadius: 6,
                              elevation: 14,
                            }}
                          >
                            <ScrollView style={{ flex: 1 }} nestedScrollEnabled>
                              {options?.map((item) => (
                                <TouchableOpacity
                                  key={item}
                                  onPress={() => {
                                    SetFormVal({
                                      ...formVal,
                                      [FieldName]: item,
                                    }),
                                      setDropdownStatus(false);
                                  }}
                                >
                                  <Text
                                    style={{
                                      paddingHorizontal: 15,
                                      paddingVertical: 10,
                                    }}
                                  >
                                    {item}
                                  </Text>
                                </TouchableOpacity>
                              ))}
                            </ScrollView>
                            {/* <TouchableOpacity>
                            <Text
                              style={{
                                paddingHorizontal: 15,
                                paddingVertical: 10,
                              }}
                            >
                              Male
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity>
                            <Text
                              style={{
                                paddingHorizontal: 15,
                                paddingVertical: 10,
                              }}
                            >
                              Female
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity>
                            <Text
                              style={{
                                paddingHorizontal: 15,
                                paddingVertical: 10,
                              }}
                            >
                              Others
                            </Text>
                          </TouchableOpacity> */}
                          </View>
                        )}
                      </View>
                    ) : (
                      <Input
                        name={FieldName}
                        label={FieldName}
                        inputMode={inputMode}
                        keyboardType={keyboardType}
                        InpVal={formVal?.[FieldName]}
                        placeholder={`Enter the ${FieldName}`}
                        inputStyle={{ marginBottom: 20 }}
                        onChange={InputHandler}
                        disabled={disabled ? disabled : false}
                        err={formErr?.[FieldName]}
                        errStyle={{ bottom: "1%" }}
                        key={i}
                      />
                    )
                )}
              </View>

              <View style={styles.filterBtnContainer}>
                <Pressable style={styles.filterBtn} onPress={handleClose}>
                  <Text style={styles.filterBtnText}>Cancel</Text>
                </Pressable>
                <Pressable style={styles.filterBtn} onPress={SubmitForm}>
                  <Text
                    style={styles.filterBtnText}
                    // onPress={() => setModalVisible(true)}
                  >
                    Submit
                  </Text>
                </Pressable>
              </View>
            </View>
          </Pressable>
        </KeyboardAvoidingView>
      </ScrollView>
      <AddModel
        ModalVisible={ModalVisible}
        setModalVisible={setModalVisible}
        ModalData={ModalData}
      />
    </View>
  );
};

export default AddStudent;

const styles = StyleSheet.create({
  addStudentContainer: {
    backgroundColor: colors.body,
    flex: 1,
  },
  filterBtnContainer: {
    flexDirection: "row",
    gap: 40,
    marginHorizontal: 40,
    paddingBottom: 40,
  },
  filterBtn: {
    flex: 1,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
  },
  filterBtnText: {
    textAlign: "center",
    color: colors.primary,
  },
  header: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    marginBottom: 30,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
