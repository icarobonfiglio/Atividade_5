import React, { useState } from "react";
import { Image, Button, View, Text, StyleSheet } from "react-native";
import axios from "axios";

const Picachu = () => {
  const [pokemonData, setPokemonData] = useState({
    nome: "",
    number: 0,
    sprite: "",
  });

  const URL = "https://pokeapi.co/api/v2/pokemon/";
  
  const orderNumber = () => Math.floor(Math.random() * 1025);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${URL}${orderNumber()}`);
      setPokemonData({
        nome: response.data.name,
        number: response.data.id,
        sprite: response.data.sprites.front_default,
      });
    } catch (err) {
      console.error(`Erro na requisição: ${err}`);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title="Gerar"
        onPress={fetchData}
        color="orange"
      />
      <View style={styles.display}>
        <View style={styles.containerInfos}>
          {pokemonData.nome ? (
            <>
              <Text style={styles.nomePokemon}>
                Nome: {pokemonData.nome}
              </Text>
              <Text style={styles.orderPokemon}>
                Número: {pokemonData.number}
              </Text>
              <Image
                style={styles.spritePokemon}
                source={{ uri: pokemonData.sprite }}
                resizeMode="contain"
              />
            </>
          ) : (
            <Text style={styles.infoText}>
              Pressione o botão para gerar
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    alignItems: 'center',
  },
  display: {
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    padding: 10,
    borderRadius: 5,
  },
  containerInfos: {
    alignItems: 'center',
  },
  nomePokemon: {
    color: "#4268a7",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  orderPokemon: {
    textAlign: "center",
    fontWeight: "300",
  },
  spritePokemon: {
    width: 170,
    height: 170,
  },
  infoText: {
    textAlign: 'center',
    color: '#666',
    fontStyle: 'italic',
  },
});

export default Picachu;