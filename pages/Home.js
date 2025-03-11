import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Home() {
  const [texto, setTexto] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Persistência e Navegação</Text>

      <Text style={styles.textoLaranja}>Sem persistência: Nenhum texto salvo</Text>
      <Text style={styles.textoRoxo}>Persistência: Nenhum texto salvo</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        value={texto}
        onChangeText={setTexto}
      />

      <TouchableOpacity style={styles.botao1} onPress={() => alert("Texto salvo!")}>
        <Text style={styles.textoBotao}>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao2} onPress={() => setTexto("")}>
        <Text style={styles.textoBotao}>Limpar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao3} onPress={() => alert("Ainda sem navegação!")}>
        <Text style={styles.textoBotao}>Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 100,
    paddingHorizontal: 25,
    gap: 20,
    backgroundColor: "rgb(255, 255, 255)",
  },
  titulo: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    color: "rgb(33, 48, 139)",
  },
  textoLaranja: {
    fontSize: 20,
    textAlign: "center",
    color: "rgb(231, 56, 56)",
  },
  textoRoxo: {
    fontSize: 20,
    textAlign: "center",
    color: "rgb(69, 94, 234)",
  },
  input: {
    borderWidth: 1,
    borderColor: "#6F2739",
    borderRadius: 8,
    padding: 10,
    fontSize: 18,
    marginBottom: 20,
    width: '100%', 
  },
  botao1: {
    backgroundColor: "rgb(69, 94, 234)", 
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 4, 
  },
  botao2: {
    backgroundColor: "rgb(231, 56, 56)", 
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 4, 
  },
  botao3: {
    backgroundColor: "#rgba(104, 84, 84, 0.5)", 
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 4, 
  },
  textoBotao: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});