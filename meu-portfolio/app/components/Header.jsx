import { View, Text, Image } from "react-native";

export default function Header() {
  return (
    <View style={{ alignItems: "center", marginVertical: 20 }}>
      <Image source={require("../../assets/images/perfil.png")} style={{ width: 100, height: 100, borderRadius: 50 }} />
      <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Seu Nome</Text>
      <Text style={{ color: "gray", textAlign: "center" }}>
        Desenvolvedor full stack{"\n"}React Native, JavaScript...
      </Text>
    </View>
  );
}