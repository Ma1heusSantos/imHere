import { StyleSheet, TextInput } from "react-native";

type props = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

export function Input({ placeholder, value, onChangeText }: props) {
  return (
    <TextInput
      placeholderTextColor={"#6B6B6B"}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
}
const styles = StyleSheet.create({
  input: {
    flex: 1,
    backgroundColor: "#1F1E25",
    height: 56,
    borderRadius: 5,
    color: "#FDFCFE",
    padding: 16,
    fontSize: 16,
  },
});
