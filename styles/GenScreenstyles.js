import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  generationHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pokemonContainer: {
    flex: 1,
    borderWidth: 1, // Ancho del borde
    borderColor: 'gray', // Color del borde
    padding: 0, // Espacio alrededor del rectángulo
    alignItems: 'center',
    marginBottom: 10,
  },
  pokemonImage: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  pokemonName: {
    fontSize: 18,
  },
});
