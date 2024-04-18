import { Image, StyleSheet, Text, View } from "react-native";

export default Nav = () => {
  const ham = require("../assets/images/nav/ham.png");
  const logo = require("../assets/images/nav/logo.png");
  const profile = require("../assets/images/nav/profile.png");
  return (
    <View style={Styles.DashboardNav}>
      <View>
        <Image source={ham} style={Styles.HamImg} resizeMode="contain" />
      </View>
      <View>
        <Image source={logo} style={Styles.logoImg} resizeMode="contain" />
      </View>
      <View>
        <Image
          source={profile}
          style={Styles.profileImg}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  DashboardNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileImg: {
    width: 50,
  },
  HamImg: {
    width: 30,
  },
  logoImg: {
    width: 40,
  },
});
