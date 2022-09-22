import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import CircularProgress from "react-native-circular-progress-indicator";

const PostCard = ({
  image,
  cardTitle,
  data,
  CardRate,
  description,
  ToRaisedData,
  launchDate,
  graphValue,
  RasiedValue,
  Investors,
  Equity,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.cardWrapper}>
          <View style={styles.imageContainer}>
            <Image
              // source={require("../../assets/Untitled-1.png")}
              source={image}
              style={styles.img}
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.cartTitle}>{cardTitle}</Text>
            <FlatList
              data={data}
              horizontal
              renderItem={({ item }) => {
                return (
                  <View style={styles.cardGroupCategory}>
                    <Text style={styles.cardGroupCategoryText}>
                      {item.name}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
          <View   
            style={{
              ...styles.cardWrapper,
              marginBottom: 40,
            }}
          >
            <FontAwesome
              name="rupee"
              size={12}
              color="#4D4F5C"
              style={styles.rupeesIconStyle}
            />
            <Text style={styles.cardRateText}>{CardRate}</Text>
          </View>
        </View>
        <View style={{ marginVertical: 26 }}>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View
          style={{
            ...styles.cardWrapper,
            paddingBottom: 26,
            borderBottomWidth: 1,
            borderBottomColor: "#70707033",
          }}
        >
          <View>
            <Text style={styles.h3text}>To Raised</Text>
            <View style={styles.cardWrapper}>
              <FontAwesome
                name="rupee"
                size={10}
                color="#4D4F5C"
                style={styles.rupeesIconStyle}
              />
              <Text style={styles.h1Text}>{ToRaisedData}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.h3text}>Launch Date</Text>
            <Text style={styles.h1Text}>{launchDate}</Text>
          </View>
          <View>
            <CircularProgress
              radius={28}
              value={graphValue}
              textColor="#4D4F5C"
              fontSize={14}
              valueSuffix={"%"}
              activeStrokeColor={"#E90075"}
              inActiveStrokeOpacity={0.2}
              activeStrokeWidth={4}
              inActiveStrokeWidth={4}
              duration={3000}
            />
          </View>
        </View>
        <View
          style={{
            ...styles.cardWrapper,
            paddingTop: 26,
          }}
        >
          <View>
            <View style={styles.cardWrapper}>
              <FontAwesome
                name="rupee"
                size={10}
                color="#4D4F5C"
                style={styles.rupeesIconStyle}
              />
              <Text style={styles.h1Text}>{RasiedValue}</Text>
            </View>
            <Text style={styles.h2Text}>Raised</Text>
          </View>
          <View>
            <Text style={styles.h1Text}>{Equity}</Text>
            <Text style={styles.h2Text}>Equity</Text>
          </View>
          <View>
            <Text style={styles.h1Text}>{Investors}</Text>
            <Text style={styles.h2Text}>Investors</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 11,
  },
  cardContainer: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  cardWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageContainer: {
    height: 64,
    width: 64,
    borderRadius: 32,
    borderColor: "#70707033",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    resizeMode: "contain",
    height: 22,
    width: 42,
  },
  cartTitle: {
    fontSize: 18,
    color: "#4D4F5C",
    fontWeight: "bold",
  },
  cardGroupCategory: {
    backgroundColor: "#7070701a",
    height: 24,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 14,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  cardGroupCategoryText: {
    color: "#4D4F5C",
    fontSize: 12,
    opacity: 1,
  },
  rupeesIconStyle: {
    marginRight: 5,
    fontWeight: "bold",
  },
  cardRateText: {
    color: "#4D4F5C",
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: "#707070",
    fontSize: 14,
    lineHeight: 22,
  },
  h3text: {
    fontSize: 12,
    color: "#707070",
    opacity: 0.8,
    fontWeight: "600",
    marginBottom: 8,
  },
  h1Text: { color: "#4D4F5C", fontSize: 16, fontWeight: "bold" },
  h2Text: {
    fontSize: 14,
    color: "#707070",
    opacity: 0.8,
    fontWeight: "600",
    marginTop: 8,
    textAlign: "center",
  },
});
