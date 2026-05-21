import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native-web";

export default function Player01() {
  // Cria um estado (variavel php) chamado "pontos"
  // pontos = valor atual
  // setPontos = função para alterar o valor
  const [pontosP1, setPontosP1] = useState(0);

  function aumentarP1() {
    setPontosP1(pontosP1 + 1)
  };

  function diminuirP1() {
    if(pontosP1 > 0){
      setPontosP1(pontosP1 - 1)
    };
  };

  function resetarP1() {
    setPontosP1(0)
  };


// O return contém a parte visível da tela
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        🎮 Contador Gamer
      </Text>
      
      <Text style={styles.pontos}>{pontosP1}</Text>

      <View style={styles.areaBotoes}>

        <TouchableOpacity
          onPress={aumentarP1}
          style={styles.botao}>
          <Text style={styles.textoBotao}>+1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={diminuirP1}
          style={styles.botao}>
          <Text style={styles.textoBotao}>-1</Text>
        </TouchableOpacity>

      </View>
      <TouchableOpacity
        onPress={resetarP1}
        style={styles.botaoReset}>
        <Text style={styles.textoBotao}>Reset</Text>
      </TouchableOpacity>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa a tela toda
    backgroundColor: '#aef6feff',
    alignItems: 'center', // Centraliza horizontalmente
    justifyContent: 'center', // Centraliza verticalmete
    padding: 20
  },

  titulo: {
    fontSize: 32,
    color: '#ff54b5ff',
    fontWeight: 'bold',
    marginBottom: 30,
  },

  pontos: {
    fontSize: 80,
    color: '#ffff',
    marginBottom: 40,
    fontWeight: 'bold',
  },

  areaBotoes: {
    flexDirection: 'row', // Deixa um botão ao lado do outro
    marginBottom: 20,
  },

  botao: {
    backgroundColor: '#2201c9ff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginHorizontal: 10,
  },

  botaoReset: {
    backgroundColor: '#c20a00ff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12, 
  },

  textoBotao: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
  },

});