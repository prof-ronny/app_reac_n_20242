import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={estilo.container}
    >
      <Text style={estilo.text} >Olá Mundo</Text>
    </View>
  );
}

const estilo= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF0000",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});