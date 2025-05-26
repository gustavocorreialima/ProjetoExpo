import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Keyboard,
} from "react-native";

export default function JogoSenha() {
  const [senha, setSenha] = useState("");
  const [tentativa, setTentativa] = useState("");
  const [historico, setHistorico] = useState([]);

  // Gera nova senha ao iniciar
  useEffect(() => {
    reiniciarJogo();
  }, []);

  // Gera senha com 4 dígitos únicos
  function gerarSenha() {
    let numeros = [];
    while (numeros.length < 4) {
      const digito = Math.floor(Math.random() * 10).toString();
      if (!numeros.includes(digito)) {
        numeros.push(digito);
      }
    }
    return numeros.join("");
  }

  function verificarTentativa() {
    if (tentativa.length !== 4 || new Set(tentativa).size !== 4) {
      alert("Digite 4 dígitos diferentes!");
      return;
    }

    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
      if (tentativa[i] === senha[i]) {
        bulls++;
      } else if (senha.includes(tentativa[i])) {
        cows++;
      }
    }

    const novaTentativa = {
      id: Date.now().toString(),
      tentativa,
      bulls,
      cows,
    };

    setHistorico([novaTentativa, ...historico]);
    setTentativa("");
    Keyboard.dismiss();
  }

  function reiniciarJogo() {
    const novaSenha = gerarSenha();
    setSenha(novaSenha);
    setTentativa("");
    setHistorico([]);
  }

  function revelarSenha() {
    alert(`A senha é: ${senha}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Senha (Bulls and Cows)</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite 4 dígitos"
        placeholderTextColor="#999"
        keyboardType="numeric"
        maxLength={4}
        value={tentativa}
        onChangeText={setTentativa}
      />

      <View style={styles.buttonGroup}>
        <Button title="Verificar" onPress={verificarTentativa} />
        <Button title="Revelar senha" onPress={revelarSenha} color="#888" />
        <Button title="Reiniciar Jogo" onPress={reiniciarJogo} color="#cc0000" />
      </View>

      <FlatList
        style={styles.lista}
        data={historico}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.listaVazia}>Nenhuma tentativa ainda.</Text>}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            🔢 {item.tentativa} → 🐂 {item.bulls} | 🐄 {item.cows}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20, paddingTop: 60 },
  title: { fontSize: 24, fontWeight: "bold", color: "#fff", marginBottom: 20, textAlign: "center" },
  input: {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    borderRadius: 8,
    padding: 10,
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
    letterSpacing: 8,
  },
  buttonGroup: {
    flexDirection: "column",
    gap: 8,
    marginBottom: 20,
  },
  lista: { marginTop: 10 },
  item: { color: "#ccc", fontSize: 16, marginVertical: 4 },
  listaVazia: { color: "#555", textAlign: "center", marginTop: 20 },
});
