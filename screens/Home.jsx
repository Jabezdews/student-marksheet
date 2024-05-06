import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Nav from "../components/Nav";
import { useContext, useState } from "react";
import FilterModel from "../components/FilterModel";
import { colors } from "../config";
import SubStack from "../stack/SubStack";
import { FilterContext } from "../context/filterContext";

export default Home = ({ navigation }) => {
  const filter = require("../assets/images/dashboard/Filter_icon.png");
  const Add = require("../assets/images/dashboard/Add_icon.png");
  const TabBtns = ["All", "List All", "List"];
  const [TabActive, SetTabActive] = useState("All");
  const [ModalVisible, setModalVisible] = useState(false);

  return (
    <View style={[Styles.DashboardContainer]}>
      <Nav />
      <View style={[Styles.DashboardDetails]}>
        <Text style={Styles.DashboardDetailsHead}>Good Morning</Text>
        <Text style={Styles.detailName}> Christopher</Text>
      </View>
      <View style={[Styles.AddFilterContainer]}>
        <View>
          <Text style={Styles.AddFilterContainerHead}>
            Api Integration Overview
          </Text>
        </View>
        <View style={Styles.AddFilterBtnHolder}>
          <Pressable onPress={() => navigation.navigate("Add")}>
            <Text>
              <Image source={Add} resizeMode="contain" style={Styles.addIcon} />
              Add
            </Text>
          </Pressable>
          <Pressable onPress={() => setModalVisible(!ModalVisible)}>
            <Image
              source={filter}
              resizeMode="contain"
              style={Styles.FIlterIcon}
            />
          </Pressable>
        </View>
      </View>

      {/* tab btn section */}
      <View style={Styles.TabBtnContainer}>
        {TabBtns.map((item) => (
          <Pressable
            key={item}
            style={[
              Styles.TabBtn,
              TabActive === item ? Styles.TabBtnActive : null,
            ]}
            onPress={() => {
              SetTabActive(item);
              navigation.navigate(item);
            }}
          >
            <Text
              style={[
                Styles.TabBtnText,
                TabActive === item ? Styles.TabBtnTextActive : null,
              ]}
            >
              {item}
            </Text>
          </Pressable>
        ))}
        {/* <Pressable style={[Styles.TabBtn]}>
          <Text>All</Text>
        </Pressable>
        <Pressable style={[Styles.TabBtnActive, Styles.TabBtn]}>
          <Text style={Styles.TabBtnTextActive}>List All</Text>
        </Pressable>
        <Pressable style={[Styles.TabBtn]}>
          <Text>List</Text>
        </Pressable> */}
      </View>
      <SubStack />
      <FilterModel
        ModalVisible={ModalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};
const Styles = StyleSheet.create({
  DashboardContainer: {
    backgroundColor: colors.body,
    flex: 1,
  },
  DashboardDetails: {
    marginBottom: 28,
  },
  DashboardDetailsHead: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detailName: {
    fontSize: 14,
  },
  AddFilterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  AddFilterContainerHead: {
    fontSize: 18,
    fontWeight: "700",
  },
  AddFilterBtnHolder: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 30,
  },
  addIcon: {
    width: 15,
  },
  FIlterIcon: {
    width: 20,
  },

  TabBtnContainer: {
    flexDirection: "row",
    backgroundColor: colors.secondary,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "space-around",
  },
  TabBtnActive: {
    backgroundColor: colors.primary,
  },
  TabBtn: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
    textAlign: "center",
    borderRadius: 12,
  },
  TabBtnTextActive: {
    flex: 1,
    color: "#fff",
  },
  TabBtnText: {
    textAlign: "center",
  },
});
