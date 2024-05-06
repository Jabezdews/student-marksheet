import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { BASE_URL, colors } from "../../config";
// import { BarChart, Grid, XAxis } from "react-native-svg-charts";
import axios from "axios";
import { FilterContext } from "../../context/filterContext";
import { BarChart } from "react-native-chart-kit";
const Dash = () => {
  const fill = "rgb(134, 65, 244)";
  const [ChartData, SetChartData] = useState([2, 3, 4, 5, 6]);
  const [ApiData, SetApiData] = useState({});
  const XLabels = ["Poor", "Fair", "Good", "Very Good", "Excellent"];
  const poor = require("../../assets/images/dashboard/fail.png");
  const Fair = require("../../assets/images/dashboard/ok.png");
  const Good = require("../../assets/images/dashboard/good.png");
  const Very_Good = require("../../assets/images/dashboard/verygood.png");
  const Excellent = require("../../assets/images/dashboard/excellent.png");
  const { filter } = useContext(FilterContext);
  const colorCode=["#000", "#fff","#000","#fff","#000"]

  useEffect(() => {
    let api = `${
      filter === "All"
        ? `${BASE_URL}/dashboard`
        : `${BASE_URL}/dashboard/${filter}`
    } `;
    console.log(api);
    axios
      .get(api)
      .then((res) => {
        console.log(res.data.data);
        if (res?.data?.data) {
          let data = res.data.data;
          SetApiData(data);
          SetChartData([
            data?.["Fair & Fail"] ? data?.["Fair & Fail"] : 0,
            data?.["Ok"] ? data?.["Ok"] : 0,
            data?.["Good"] ? data?.["Good"] : 0,
            data?.["Very Good"] ? data?.["Very Good"] : 0,
            data?.["Excellent"] ? data?.["Excellent"] : 0,
          ]);
        } else {
          SetApiData({});
        }
      })
      .catch((err) => console.log(err));
  }, [filter]);
  console.log(ApiData);

  const ChartDatas = {
    labels: XLabels,
    datasets: [
      {
        data: ChartData,
        withDots: false
      },
      
      
    ],
  };
  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  return (
    <View style={styles.container}>
      <View style={[styles.wrapper, styles.elevation]}>
        <Text>Grade Overview - All</Text>
        <View style={styles.GradeContainer}>
          <View style={styles.GradeBox}>
            <Image source={Excellent} style={styles.GradeImage} />
            <Text style={styles.GradeBoxCount}>
              {ApiData.Excellent ? ApiData.Excellent : 0}
            </Text>
            <Text style={styles.GradeBoxText}>Excellent </Text>
          </View>
          <View style={styles.GradeBox}>
            <Image source={Very_Good} style={styles.GradeImage} />
            <Text style={styles.GradeBoxCount}>
              {ApiData?.["Very Good"] ? ApiData["Very Good"] : 0}
            </Text>
            <Text style={styles.GradeBoxText}>Very Good </Text>
          </View>
          <View style={styles.GradeBox}>
            <Image source={Good} style={styles.GradeImage} />
            <Text style={styles.GradeBoxCount}>
              {ApiData.Good ? ApiData.Good : 0}
            </Text>
            <Text style={styles.GradeBoxText}>Good</Text>
          </View>
          <View style={styles.GradeBox}>
            <Image source={Fair} style={styles.GradeImage} />
            <Text style={styles.GradeBoxCount}>
              {ApiData.Ok ? ApiData.Ok : 0}
            </Text>
            <Text style={styles.GradeBoxText}>Ok </Text>
          </View>
          <View style={styles.GradeBox}>
            <Image source={poor} style={styles.GradeImage} />
            <Text style={styles.GradeBoxCount}>
              {ApiData?.["Fair & Fail"] ? ApiData["Fair & Fail"] : 0}
            </Text>
            <Text style={styles.GradeBoxText}>Fail </Text>
          </View>
        </View>
      </View>
      <View style={[styles.BarChartWrapper, styles.elevation]}>
        {/* <BarChart
          style={{ height: 200 }}
          data={ChartData}
          spacingOuter={0.3}
          spacing={0.3}
          spacingInner={0.6}
          svg={{ fill: "rgb(134, 65, 244)" }}
          contentInset={{ top: 10, bottom: 10 }}
        />
        <XAxis
          style={{ marginHorizontal: 5, marginVertical: 10 }}
          data={ChartData}
          contentInset={{ left: 30, right: 30 }}
          svg={{ fontSize: 12, fill: "black" }}
          formatLabel={(value, index) => XLabels[index]}
        /> */}

        <BarChart
          // style={graphStyle}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          data={ChartDatas}
          width={Dimensions.get("window").width - 50}
          height={220}
          // yAxisLabel="$"
          fromZero={true}
          segments={2}
          chartConfig={chartConfig}
          verticalLabelRotation={0}
        />
      </View>
    </View>
  );
};

export default Dash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.body,
  },
  BarChartWrapper: {
    marginTop: 20,
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 8,
  },
  wrapper: {
    marginTop: 20,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10,
    shadowColor: "#000000",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 8,
  },
  elevation: {
    elevation: 3,
    shadowColor: "#52006A",
  },
  GradeContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  GradeBox: {
    width: "20%",
    display: "flex",
    alignItems: "center",
  },
  GradeBoxText: {
    fontSize: 14,
    textAlign: "center",
  },
  GradeBoxCount: {
    fontSize: 34,
    textAlign: "center",
    fontWeight: "700",
    marginBottom: 10,
  },
  GradeImage: {
    marginVertical: 10,
  },
});
