import { View, Button } from "react-native";
import { useRouter } from "expo-router";

export default function NavButtons() {
  const router = useRouter();

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around", marginVertical: 10 }}>
      <Button title="Sobre" onPress={() => router.push("/(tabs)/sobre")} />
      <Button title="Projetos" onPress={() => router.push("/(tabs)/projetos")} />
      <Button title="Experiência" onPress={() => router.push("/(tabs)/experiencia")} />
    </View>
  );
}