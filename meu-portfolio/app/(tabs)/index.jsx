import { View, StyleSheet, Button } from "react-native";
import Header from "../components/Header";
import NavButtons from "../components/NavButtons";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Header />
      <Button title="Ir para o Jogo da Senha" onPress={() => router.push("/jogo")} />
      <NavButtons />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
});