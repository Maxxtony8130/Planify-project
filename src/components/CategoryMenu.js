import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const categories = [
  {
    name: "All",
  },
  {
    name: "Startup Up",
  },
  {
    name: "Early Revenue",
  },
  {
    name: "Ideas",
  },
  {
    name: "Growth",
  },
  {
    name: "Launching Soon",
  },
  {
    name: "Most Funded",
  },
  {
    name: "Certified",
  },
  {
    name: "Funded Companies",
  },
];

const CategoryMenu = () => {
  const [click, setClick] = useState(null);
  return (
    <View style={{ paddingVertical: 15 }}>
      <FlatList
        data={categories}
        horizontal
        renderItem={({ item, index }) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  setClick(index);
                }}
                style={{
                  borderRadius: 17,
                  backgroundColor: index === click ? "#E90075" : "#fff",
                  borderColor:  index === click ? "#E90075" : "#70707080" ,
                  borderWidth: 1,
                  height: 33,
                  alignItems: "center",
                  marginRight: 8,
                  paddingHorizontal: 12,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: index === click ? "#fff" : "#4D4F5C",
                    fontSize: 16,
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CategoryMenu;

const styles = StyleSheet.create({});
