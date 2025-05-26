import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Sobre() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o Projeto</Text>
      <Text style={styles.description}>
        Este projeto foi desenvolvido como um portfólio pessoal com navegação entre telas, layout responsivo e um mini-jogo interativo.
      </Text>

      <Text style={styles.subtitle}>🛠️ Ferramentas e Tecnologias:</Text>

      <View style={styles.list}>
        <Text style={styles.item}>• React Native</Text>
        <Text style={styles.item}>• Expo Go</Text>
        <Text style={styles.item}>• Expo Router</Text>
        <Text style={styles.item}>• JavaScript</Text>
        <Text style={styles.item}>• StyleSheet (CSS-in-JS)</Text>
        <Text style={styles.item}>• Componentização com Reutilização</Text>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 24,
    paddingTop: 60,
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    color: "#ccc",
    fontSize: 16,
    marginBottom: 24,
    textAlign: "center",
    lineHeight: 22,
  },
  subtitle: {
    color: "#4DB8FF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  list: {
    marginBottom: 40,
  },
  item: {
    color: "#eee",
    fontSize: 16,
    marginBottom: 6,
    paddingLeft: 10,
  },
  backButton: {
    alignSelf: "center",
    backgroundColor: "#1a1a1a",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  backText: {
    color: "#4DB8FF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
