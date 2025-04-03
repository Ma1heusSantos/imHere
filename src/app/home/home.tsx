import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import { StatusBar } from "react-native";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";
import { useState } from "react";
import { Participant } from "../../../components/participant";

export default function Home() {
  const [participant, setParticipant] = useState("");
  const [group, setGroup] = useState<string[]>([]);

  const handleParticipantAdd = () => {
    if (group.includes(participant)) {
      Alert.alert("Usuário já existe", "usuário já existe na base de dados!");
      return;
    }

    participant != ""
      ? setGroup([...group, participant])
      : Alert.alert("Usuário Vazio", "Informe um usuário!");
    setParticipant("");
  };

  const handleParpicipantRemove = (name: string) => {
    Alert.alert("Remover", `deseja realmente remover o ${name} ?`, [
      {
        text: "Remover",
        onPress: () => {
          setGroup(() => group.filter((participant) => participant !== name));
          Alert.alert("Removido", "usuario removido com sucesso!");
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };

  return (
    <>
      <StatusBar barStyle={"light-content"} translucent />
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Nome do Evento</Text>
        <Text style={styles.headerSubTitle}>Sabado, 29 de março de 2025</Text>
        <View style={styles.inputArea}>
          <Input
            value={participant}
            onChangeText={setParticipant}
            placeholder="Nome do participante"
          />
          <Button text={"+"} onPress={handleParticipantAdd} />
        </View>

        <FlatList
          data={group}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Participant
              key={item}
              name={item}
              onPress={() => {
                handleParpicipantRemove(item);
              }}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              Adicione participantes no campo acima!
            </Text>
          }
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  headerTitle: {
    color: "#FDFCFE",
    marginTop: 48,
    fontSize: 24,
    fontWeight: "bold",
  },
  headerSubTitle: {
    fontSize: 16,
    color: "#6b6b6b",
  },
  inputArea: {
    marginTop: 36,
    flexDirection: "row",
    gap: 10,
    marginBottom: 42,
  },
  emptyText: {
    color: "#fff",
    textAlign: "center",
  },
});
