import { StyleSheet, Text, View } from "react-native";
import { Button } from "../button";

type props = {
  name: string;
  onPress: () => void;
};

export function Participant({ name, onPress }: props) {
  return (
    <View style={styles.container}>
      <View style={styles.textArea}>
        <Text style={styles.nome}>{name}</Text>
      </View>
      <Button text={"-"} onPress={onPress} backgroundColor="#E23C44"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 15,
  },
  textArea: {
    flex: 1,
    backgroundColor: "#1f1e25",
    height: 56,
    borderRadius: 5,
    padding: 20,
  },
  nome: {
    color: "#fff",
    fontSize: 16,
  },
});
