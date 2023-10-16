import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function PokemonDetailScreen({ route }) {
  const { pokemon } = route.params;

  const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      padding: 20,
      borderRadius: 10,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    image: {
      width: 200,
      height: 200,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 10,
    },
    type: {
      fontSize: 16,
      marginTop: 5,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: pokemonImageUrl }} style={styles.image} />
        <Text style={styles.name}>{pokemon.name}</Text>
        <Text style={styles.type}>Tipo: {pokemon.type}</Text>
        <Text>Altura: {pokemon.height} m</Text>
        <Text>Peso: {pokemon.weight} kg</Text>
      </View>
    </View>
  );
}
