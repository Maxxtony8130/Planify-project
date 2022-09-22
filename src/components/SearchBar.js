import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import SearchIcon from "../Icons/SearchIcon";

const SearchBar = () => {
  const [text, setText] = useState("");
  return (
    <View style={styles.inputContainer}>
      <SearchIcon width={24} height={24} />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setText(text)}
        value={text}
        placeholder="Search"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  input: {
    marginLeft: 8,

    flex: 1,
  },
  inputContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 4,
    borderColor: "#7070704D",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
});
