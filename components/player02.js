import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from "react-native-web";

export default function Player02() {
  // Cria um estado (variável PHP) chamado "pontos"
  // pontos = valor atual 
  // setPontos = função para alterar o valor 
  // 0 = valor inicial
  const [pontosP1, setPontosP1] = useState(0);
  const [pontosP2, setPontosP2] = useState(0);
  const [nomeP1, setNomeP1] = useState('Player01');
  const [nomeP2, setNomeP2] = useState('Player02');
  const [lider, setLider] = useState('Líder')

  // executar ação automaticamente quando há alterações
  // Ex: 
  // (Quando a pontuação / nome são alterados)
  // Código dentro do useEffect será executado
  useEffect(() => {
    if(pontosP1>pontosP2){
      setLider(nomeP1);
    } else if (pontosP1<pontosP2){
      setLider(nomeP2);
    }  else{
      setLider('Empate');
    }
      

  }, [pontosP1, pontosP2, nomeP1, nomeP2]);



  // Função para aumentar 1 ponto
  function aumentarP1() {
    // Pega o valor auto e soma +1
    setPontosP1(pontosP1 + 1);
  }

  // Função para aumentar 1 ponto
  function aumentarP2() {
    // Pega o valor auto e soma +1
    setPontosP2(pontosP2 + 1);
  }

  // Função para diminuir 1 ponto
  function diminuirP1() {
    // Pega o valor auto e subtrai -1
    setPontosP1(pontosP1 - 1);
  }

  // Função para diminuir 1 ponto
  function diminuirP2() {
    // Pega o valor auto e subtrai -1
    setPontosP2(pontosP2 - 1);
  }



  // Função para resetar o contador
  function resetar() {
    // volta o valor para 0
    setPontosP1(0);
    setPontosP2(0);
    setLider('Empate');

  }
  if
    (pontosP1 < 0) {
    setPontosP1(0)
  }
  if
    (pontosP2 < 0) {
    setPontosP2(0)
  }







  // tudo que está no RETURN aparece na tela
  return (
    // View proncipal do APP
    <View style={styles.container}>
      {/* Título do APP */}
      <Text style={styles.titulo}>
        👾 Contador Gamer - Modo 2 Jogadores
      </Text>

      <Text style={styles.lider}>
        🏆 Líder : {lider}
      </Text>

      {/* area dos jogadores */}
      <View style={styles.areaJogadores}>
        {/* Jogador 1 */}
        <View style={styles.areaJogador}>
          <TextInput style={styles.input}
            placeholder="Nome Player 01"
            placeholderTextColor={"#999"}
            value={nomeP1}
            onChangeText={setNomeP1}
          />
          <Text style={styles.nome}>{nomeP1}</Text>
          <Text style={styles.pontos}>{pontosP1}</Text>
          {/* área dos botões +1 e -1 */}
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

        </View>
        {/* Jogador2 */}
        <View style={styles.areaJogador}>
          <TextInput style={styles.input}
            placeholder="Nome Player 02"
            placeholderTextColor={"#999"}
            value={nomeP2}
            onChangeText={setNomeP2}
          />
          <Text style={styles.nome}>{nomeP2}</Text>
          <Text style={styles.pontos}>{pontosP2}</Text>
          {/* área dos botões +1 e -1 */}
          <View style={styles.areaBotoes}>
            <TouchableOpacity
              onPress={aumentarP2}
              style={styles.botao}>
              <Text style={styles.textoBotao}>+1</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={diminuirP2}
              style={styles.botao}>
              <Text style={styles.textoBotao}>-1</Text>
            </TouchableOpacity>


          </View>

        </View>
      </View>


      <TouchableOpacity
        onPress={resetar}
        style={styles.botaoReset}>
        <Text style={styles.textoBotao}>Reset</Text>
      </TouchableOpacity>

    </View>
  );
}



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

  areaJogadores: {
    flexDirection: 'row',
    // espaçamento entre areas
    grap: 15,
  },

  areaJogador: {
    backgroundColor: '#1f1f1f',
    width: 230,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },

  input: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },

  nome: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },

  lider: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold'
  }

});