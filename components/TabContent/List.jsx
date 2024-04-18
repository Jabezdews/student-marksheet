import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import { BASE_URL, colors } from "../../config";
import Input from "../Input";
import axios from "axios";

const List = () => {
  const ArrowImg = require("../../assets/images/list/Nextarrow_icon.png");
  const [inputVal, setInputVal] = useState("");
  const InputHandler = useCallback(
    (val, fieldName) => {
      console.log(val, fieldName);
      setInputVal(val);
    },
    [inputVal]
  );
  const [StudentData, SetStudentData] = useState(null);
  const [IsData, setIsData] = useState(true);
  const Submit = () => {
    axios
      .get(`${BASE_URL}/Students/${inputVal}`)
      .then((res) => {
        console.log(res.data.data);
        if (res?.data?.data[0]) {
          SetStudentData(res?.data?.data[0]);
          setIsData(true);

        } else {
          setIsData(false);
          SetStudentData(null)
        }
      })
      .catch((err) => console.log(err));
  };
  console.log(StudentData, 34);
  return (
    <View style={styles.container}>
      <View style={styles.ListHeader}>
        <View>
          <Text style={styles.RegText}>Reg No</Text>
        </View>
        {/* <View style={styles.InputHolder}> */}
        <Input
          name={"Reg no"}
          InpVal={inputVal}
          placeholder={`Enter the Reg no`}
          inputStyle={styles.Input}
          onChange={InputHandler}
        />
        {/* </View>
        <View> */}
        <Pressable onPress={Submit}>
          <Text style={{ backgroundColor: "#fff", borderRadius: 10 }}>
            <Image source={ArrowImg} style={{ width: 15 }} />
          </Text>
        </Pressable>
        {/* </View> */}
      </View>

      <View style={styles.TableContainer}>
        <View>
          <ScrollView
            style={[styles.TableHead]}
            showsHorizontalScrollIndicator={true}
            nestedScrollEnabled
            horizontal
          >
            <View>
              {StudentData ? (
                <>
                  <View style={styles.TableHeadRow}>
                    <Text style={[styles.w100, styles.TheadTdBox]}>Reg No</Text>
                    <Text style={[styles.w100, styles.TheadTdBox]}>Name</Text>
                    <Text style={[styles.w200, styles.TheadTdBox]}>Email</Text>
                    <Text style={[styles.w200, styles.TheadTdBox]}>Phone</Text>
                    <Text style={[styles.w100, styles.TheadTdBox]}>Gender</Text>
                    <Text style={[styles.w100, styles.TheadTdBox]}>
                      Standard
                    </Text>
                    <Text style={[styles.w100, styles.TheadTdBox]}>Mark 1</Text>
                    <Text style={[styles.w100, styles.TheadTdBox]}>Mark 2</Text>
                    <Text style={[styles.w100, styles.TheadTdBox]}>Mark 3</Text>
                    <Text style={[styles.w100, styles.TheadTdBox]}>Mark 4</Text>
                    <Text style={[styles.w100, styles.TheadTdBox]}>Mark 5</Text>
                  </View>
                  <View style={styles.TableHeadRow}>
                    <Text style={[styles.w100, styles.TBodyTdBox]}>
                      {StudentData.id}
                    </Text>
                    <Text style={[styles.w100, styles.TBodyTdBox]}>
                      {StudentData.Name}
                    </Text>
                    <Text style={[styles.w200, styles.TBodyTdBox]}>
                      {StudentData.Email}
                    </Text>
                    <Text style={[styles.w200, styles.TBodyTdBox]}>
                      {StudentData?.["Phone Number"]}
                    </Text>
                    <Text style={[styles.w100, styles.TBodyTdBox]}>
                      {StudentData.Standard}
                    </Text>
                    <Text style={[styles.w100, styles.TBodyTdBox]}>
                      {StudentData.Gender}
                    </Text>
                    <Text style={[styles.w100, styles.TBodyTdBox]}>
                      {StudentData?.["Mark 1"]}
                    </Text>
                    <Text style={[styles.w100, styles.TBodyTdBox]}>
                      {StudentData?.["Mark 2"]}
                    </Text>
                    <Text style={[styles.w100, styles.TBodyTdBox]}>
                      {StudentData?.["Mark 3"]}
                    </Text>
                    <Text style={[styles.w100, styles.TBodyTdBox]}>
                      {StudentData?.["Mark 4"]}
                    </Text>
                    <Text style={[styles.w100, styles.TBodyTdBox]}>
                      {StudentData?.["Mark 5"]}
                    </Text>
                  </View>
                </>
              ) : null}
              {!IsData && (
                <View>
                  <Text style={{textAlign:"center", color:"red" , fontSize:22, padding:20,width:'100%'}}>No Data Found</Text>
                </View>
              )}
            </View>
          </ScrollView>
        </View>
        <View style={styles.TableBody}>
          <View style={styles.TableBodyRow}></View>
        </View>
        {/* <Text>ListAll</Text> */}
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.body,
  },
  ListHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  RegText: {
    fontSize: 18,
    fontWeight: "600",
  },
  InputHolder: {
    width: 40,
  },
  Input: {
    // borderColor: "red",
    borderWidth: 2,
    minWidth: "70%",
    maxWidth: "70%",

    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },

  TableContainer: {
    marginTop: 20,
    backgroundColor: "#fff",
  },
  TableHead: {
    // flexDirection: "column",
  },
  TableBody: {},
  TableHeadRow: {
    flexDirection: "row",
    gap: 10,
    overflow: "scroll",
  },
  TableBodyRow: { flexDirection: "row" },
  TheadTdBox: {
    fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  TBodyTdBox: {
    fontSize: 15,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  w100: {
    width: 100,
  },
  w200: {
    width: 200,
  },
});
