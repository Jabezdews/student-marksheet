import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../config";

const FilterModel = ({ ModalVisible, setModalVisible }) => {
  const radioIcon = require("../assets/images/dashboard/radio.png");
  const radioActiveIcon = require("../assets/images/dashboard/radio_Active.png");

  const Options = ["Male", "Female", "Other"];
  const [selectedOption, setSelectedOption] = useState("Male");
  return (
    <Modal
      style={styles.Modal}
      visible={ModalVisible}
      animationType={"slide"}
      transparent={true}
      onRequestClose={() => {
        setModalVisible(!ModalVisible);
      }}
    >
      <View style={styles.ModalView}>
        <View style={styles.modalContent}>
          <View style={styles.modalHead}>
            <Text style={styles.modalHeadText}>Filters</Text>
          </View>
          <View style={styles.FilterOptionHolder}>
            {Options.map((item, i) => (
              <Pressable
                style={styles.FilterOption}
                onPress={() => setSelectedOption(item)}
                key={item}
                // onPress={() =>
                //   setSelectedOption({
                //     ...selectedOption,
                //     [item]: !selectedOption[item],
                //   })
                // }
              >
                <Text style={styles.FilterOptionText}>{item}</Text>
                <Text style={{ borderColor: "transparent", borderWidth: 3}}>
                  <Image
                    style={{ width: 20 ,height:20 }}
                    source={
                      selectedOption === item ? radioActiveIcon : radioIcon
                    }
                    resizeMode="contain"
                  />
                </Text>
              </Pressable>
            ))}
          </View>
          <View style={styles.filterBtnContainer}>
            <Pressable
              style={styles.filterBtn}
              onPress={() => setModalVisible(!ModalVisible)}
            >
              <Text style={styles.filterBtnText}>Cancel</Text>
            </Pressable>
            <Pressable style={styles.filterBtn}>
              <Text
                style={styles.filterBtnText}
                onPress={() => setModalVisible(!ModalVisible)}
              >
                Submit
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModel;

const styles = StyleSheet.create({
  Modal: {
    flex: 1,
  },
  ModalView: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: "#00000050",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "100%",
    // borderTopLeftRadius:40,
    // borderTopRightRadius:40
  },
  modalHead: {
    elevation: 5,
    paddingVertical: 20,
    shadowColor: "blue",
    marginBottom: 10,
  },
  modalHeadText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  FilterOptionHolder: {
    // paddingHorizontal: 20,
    marginHorizontal: 40,
    paddingBottom: 40,
  },
  FilterOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc35",
  },
  FilterOptionText: {
    fontSize: 20,
    fontWeight: "600",
  },
  radioIcons: {
    width: 10,
    height: 10,
    backgroundColor: "red",
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
});
