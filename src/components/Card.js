import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PostCard from "./PostCard";

const BazarIndia = [
  {
    id: 1,
    name: "Equity",
  },
  {
    id: 2,
    name: "DMAT",
  },
  {
    id: 3,
    name: "Pvt Ltd",
  },
];

const MadBow = [
  {
    id: 1,
    name: "CCPS",
  },
  {
    id: 2,
    name: "Physical",
  },
  {
    id: 3,
    name: "Public Ltd",
  },
];

const Card = () => {
  return (
    <View>
      <PostCard
        image={require("../../assets/Untitled-1.png")}
        imagecustomStyle={{
          height: 22,
          width: 42,
        }}
        cardTitle="Bazar India"
        data={BazarIndia}
        CardRate="70"
        description="BAZAR India is a retail chain that offers a wide range of apparel and general merchandise with latest fashion at affordable prices..."
        ToRaisedData="15,00,00,000"
        launchDate="24 days left"
        graphValue="67"
        RasiedValue="336,792"
        Investors="17.42%"
        Equity="175"
      />
      <PostCard
        image={require("../../assets/Group_8778.png")}
        cardTitle="Madbow"
        data={MadBow}
        CardRate="60"
        description="Madbow Ventures Limited is an Indian e-commerce lifestyle fashion brand that makes creative, distinctive fashion..."
        ToRaisedData="15,00,00,000"
        launchDate="24 days left"
        graphValue="100"
        RasiedValue="426,792"
        Investors="20.50%"
        Equity="125"
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
