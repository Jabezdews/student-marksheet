import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { BASE_URL, colors } from "../../config";
import axios from "axios";

const ListAll = () => {
  const Thead = [
    "Reg No",
    "Name",
    "Email",
    "Phone",
    "Gender",
    "Standard",
    "Mark 1",
    "Mark 2",
    "Mark 3",
    "Mark 4",
    "Mark 5",
  ];
  console.log(BASE_URL,29);
  const [StudentData, SetStudentData] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/Students`)
      .then((res) => {
        console.log(res.data.data);
        SetStudentData(res?.data?.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.TableContainer}>
        <View>
          <ScrollView
            style={[styles.TableHead]}
            showsHorizontalScrollIndicator={true}
            nestedScrollEnabled
            horizontal
          >
            <View>
              <View style={styles.TableHeadRow}>
                <Text style={[styles.w100, styles.TheadTdBox]}>Reg No</Text>
                <Text style={[styles.w100, styles.TheadTdBox]}>Name</Text>
                <Text style={[styles.w200, styles.TheadTdBox]}>Email</Text>
                <Text style={[styles.w200, styles.TheadTdBox]}>Phone</Text>
                <Text style={[styles.w100, styles.TheadTdBox]}>Gender</Text>
                <Text style={[styles.w100, styles.TheadTdBox]}>Standard</Text>
                <Text style={[styles.w100, styles.TheadTdBox]}>Mark 1</Text>
                <Text style={[styles.w100, styles.TheadTdBox]}>Mark 2</Text>
                <Text style={[styles.w100, styles.TheadTdBox]}>Mark 3 </Text>
                <Text style={[styles.w100, styles.TheadTdBox]}>Mark 4</Text>
                <Text style={[styles.w100, styles.TheadTdBox]}>Mark 5</Text>
              </View>
              {StudentData?.map((item, i) => (
                <View style={styles.TableHeadRow} key={i}>
                  <Text style={[styles.w100, styles.TBodyTdBox]}>
                    {item.id}
                  </Text>
                  <Text style={[styles.w100, styles.TBodyTdBox]}>
                    {item.Name}
                  </Text>
                  <Text style={[styles.w200, styles.TBodyTdBox]}>
                    {item.Email}
                  </Text>
                  <Text style={[styles.w200, styles.TBodyTdBox]}>
                    {item?.["Phone Number"]}
                  </Text>
                  <Text style={[styles.w100, styles.TBodyTdBox]}>
                    {item.Standard}
                  </Text>
                  <Text style={[styles.w100, styles.TBodyTdBox]}>
                    {item.Gender}
                  </Text>
                  <Text style={[styles.w100, styles.TBodyTdBox]}>
                    {item?.["Mark 1"]}
                  </Text>
                  <Text style={[styles.w100, styles.TBodyTdBox]}>
                    {item?.["Mark 2"]}
                  </Text>
                  <Text style={[styles.w100, styles.TBodyTdBox]}>
                    {item?.["Mark 3"]}
                  </Text>
                  <Text style={[styles.w100, styles.TBodyTdBox]}>
                    {item?.["Mark 4"]}
                  </Text>
                  <Text style={[styles.w100, styles.TBodyTdBox]}>
                    {item?.["Mark 5"]}
                  </Text>
                </View>
              ))}
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

export default ListAll;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.body,
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
