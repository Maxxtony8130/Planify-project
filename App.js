import { StyleSheet, Text, View, StatusBar } from "react-native";
import Route from "./src/routes/Route";
import Logo from "./assets/Group 7838.svg";
import Header from "./src/routes/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Route />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
