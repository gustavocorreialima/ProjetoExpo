import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";

export default function ProjectCard({ title, description, url }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.buttonText}>Ver projeto no GitHub</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1a1a1a",
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4DB8FF",
    marginBottom: 8,
  },
  description: {
    color: "#ccc",
    fontSize: 14,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#4DB8FF",
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
  },
});
