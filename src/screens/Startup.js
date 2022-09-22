import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryMenu from "../components/CategoryMenu";
import PostCard from "../components/PostCard";
import Card from "../components/Card";

const Startup = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <SearchBar />
      <CategoryMenu />
      <Card />
    </ScrollView>
  );
};

export default Startup;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
});
