import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Phone from "../Icons/Phone";
import Notification from "../Icons/Notification";
import SearchIcon from "../Icons/SearchIcon";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerLogo}>
        <Ionicons name="ios-menu-sharp" size={24} color="#4D4F5C" />
        <Image
          source={require("../../assets/planify-logo.png")}
          style={{ height: 27, width: 81, marginLeft: 17 }}
        />
      </View>
      <View style={styles.rightSection}>
        <Phone width={24} height={24} />
        <SearchIcon width={24} height={24} />
        <Notification width={24} height={24} />
        <Image
          source={require("../../assets/profile.png")}
          style={{
            height: 32,
            width: 32,
            resizeMode: "contain",
            borderRadius: 15,
            borderWidth: 1,
            borderColor: "#707070",
          }}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLogo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 0.5,
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 0.5,
  },
});
