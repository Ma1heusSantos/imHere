import { StyleSheet, Text, TouchableOpacity } from "react-native";

type props = {
  onPress: () => void;
  text: string;
  backgroundColor?: string;
};

export function Button({ onPress, text, backgroundColor = "#31CF67" }: props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor }]}
    >
      <Text style={styles.buttonText}> {text} </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
