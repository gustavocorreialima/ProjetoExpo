import { View, Text, Image, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/perfil.png")} style={styles.image} />
      <Text style={styles.name}>Gustavo Porto</Text>
      <Text style={styles.desc}>
        Desenvolvedor full stack{"\n"}React Native, JavaScript, APIs...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", marginBottom: 20 },
  image: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  name: { fontSize: 22, fontWeight: "bold", color: "#fff" },
  desc: { color: "gray", textAlign: "center" },
});
