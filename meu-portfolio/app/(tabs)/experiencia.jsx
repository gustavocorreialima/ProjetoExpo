
import { View, Text, StyleSheet } from "react-native";

export default function Experiencia() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Profissional</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🔧 Engeman</Text>
        <Text style={styles.cardText}>
          Empresa de engenharia onde adquiri conhecimentos práticos em processos e rotinas técnicas da área. Foi minha primeira vivência profissional.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>⚡ Unibase</Text>
        <Text style={styles.cardText}>
          Atualmente trabalho na Unibase, uma empresa de serviços de energia. Faço parte da área de Tecnologia, atuando como estagiário em Análise de Sistemas.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    color: "#4DB8FF",
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 16,
    color: "#ccc",
    lineHeight: 22,
  },
});


