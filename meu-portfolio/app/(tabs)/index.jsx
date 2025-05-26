import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/perfil.png")}
        style={styles.profileImage}
      />

      <Text style={styles.name}>Gustavo Porto</Text>
      <Text style={styles.description}>
        Desenvolvedor full stack{"\n"}React Native, JavaScript, APIs...
      </Text>

      <TouchableOpacity
        style={styles.jogoButton}
        onPress={() => router.push("/jogo")}
      >
        <Text style={styles.jogoText}>Ir para o Jogo da Senha 🎯</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/(tabs)/sobre")}
        >
          <Text style={styles.buttonText}>Sobre</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/(tabs)/projetos")}
        >
          <Text style={styles.buttonText}>Projetos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/(tabs)/experiencia")}
        >
          <Text style={styles.buttonText}>Experiência Profissional</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    color: "#aaa",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  jogoButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 30,
  },
  jogoText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "column",
    gap: 12,
    width: "100%",
  },
  button: {
    backgroundColor: "#1a1a1a",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#4DB8FF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
