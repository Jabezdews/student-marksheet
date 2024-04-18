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

const AddModel = ({ ModalVisible, setModalVisible, ModalData }) => {
  const Close_icon = require("../assets/images/add-student/Close_icon.png");

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
            <Pressable onPress={() => setModalVisible(false)}>
              <Image source={Close_icon} resizeMode="contain" />
            </Pressable>
          </View>
          <View style={styles.TotalAverageHolder}>
            <View style={styles.TAHolder}>
              <Text style={styles.TAHolderHead}>Total </Text>
              <Text style={styles.TAHolderText}>{ModalData.total}</Text>
            </View>
            <View style={styles.TAHolder}>
              <Text style={styles.TAHolderHead}>Average</Text>
              <Text style={styles.TAHolderText}>{ModalData.average}%</Text>
            </View>
          </View>
          <View style={styles.GradeContainer}>
            <Text style={styles.GradeHead}>Grade </Text>
            <Text style={styles.GradeText}>{ModalData.grade}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddModel;

const styles = StyleSheet.create({
  Modal: {
    flex: 1,
  },
  ModalView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000050",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "80%",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    // borderTopLeftRadius:40,
    // borderTopRightRadius:40
  },
  modalHead: {
    elevation: 5,
    paddingVertical: 20,
    shadowColor: "blue",
    marginBottom: 10,
    alignItems: "flex-end",
  },
  modalHeadImage: {},
  modalHeadText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  TotalAverageHolder: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  TAHolder: {},
  TAHolderHead: {
    fontSize: 18,
  },
  TAHolderText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  GradeContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  GradeHead: {
    fontSize: 18,
  },
  GradeText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "lightgreen",
  },
});
