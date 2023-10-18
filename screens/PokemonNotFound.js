import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const PokemonNotFound = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/tiste.png')}
        style={styles.image}
      />
      <Text style={styles.errorText}>Error 404 - Pokémon no encontrado</Text>
      <Button title="Inicio" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  errorText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default PokemonNotFound;
