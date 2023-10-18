import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/HomeScreenStyle';


export default function HomeScreen({ navigation }) {
  const generations = [
    { generation: 1, label: 'Generación 1' },
    { generation: 2, label: 'Generación 2' },
    { generation: 3, label: 'Generación 3' },
    { generation: 4, label: 'Generación 4' },
    { generation: 5, label: 'Generación 5' },
    { generation: 6, label: 'Generación 6' },
    { generation: 7, label: 'Generación 7' },
    { generation: 8, label: 'Generación 8' },
    { generation: 9, label: 'Generación 9' },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  function buscarPokemon(nombre) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudo encontrar el Pokémon');
        }
        return response.json();
      })
      .then((data) => data)
      .catch((error) => {
        console.error(error);
        return null;
      });
  }

  const handleSearch = () => {
    if (searchTerm) {
      const pokemonName = searchTerm.toLowerCase();
      buscarPokemon(pokemonName)
        .then((pokemonEncontrado) => {
          if (pokemonEncontrado) {
            navigation.navigate('PokemonDetailScreen', { pokemon: pokemonEncontrado });
          } else {
            navigation.navigate('PokemonNotFound');
          }
        });
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.searchBarContainer}>
            <TextInput
            placeholder="Buscar Pokémon por nombre"
            value={searchTerm}
            onChangeText={setSearchTerm}
            style={styles.searchInput}
            />
            <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
            <Icon name="search" style={styles.searchIcon} />
            </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
            {generations.map((item) => (
            <TouchableOpacity
                key={item.generation}
                style={styles.button}
                onPress={() => navigation.navigate('Generation', { generation: item.generation })}
            >
            <Text style={styles.buttonText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
  
}
