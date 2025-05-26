import { View, Text, Button } from "react-native";

export default function ProjectCard({ title, description }) {
  return (
    <View style={{ backgroundColor: "#1a1a1a", padding: 15, borderRadius: 10, marginBottom: 10 }}>
      <Text style={{ color: "#00f", fontWeight: "bold", fontSize: 16 }}>💻 {title}</Text>
      <Text style={{ color: "#ccc", marginVertical: 5 }}>{description}</Text>
      <Button title="Ver projeto ➡️" onPress={() => {}} />
    </View>
  );
}