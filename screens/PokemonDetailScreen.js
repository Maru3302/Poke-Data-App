import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Button} from 'react-native';
import FavoritosButton from '../styles/FavoritosButton';
import ImageBack from '../assets/BackGroundImage.jpg';

export default function PokemonDetailScreen({ route,navigation  }) {
  const { pokemon } = route.params;
  const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

  const [pokemonType, setPokemonType] = useState('');
  const [cardBackgroundColor, setCardBackgroundColor] = useState('white');
  const [abilities, setAbilities] = useState([]);
  const [abilityDescriptions, setAbilityDescriptions] = useState({});
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`)
      .then((response) => response.json())
      .then((data) => {
        const type = data.types[0].type.name;
        setPokemonType(type);

        switch (type) {
          case 'fire':
            setCardBackgroundColor('#FF9C54');
            break;
          case 'water':
            setCardBackgroundColor('#4D90D5');
            break;
          case 'ice':
            setCardBackgroundColor('#74CEC0');
            break;
          case 'grass':
            setCardBackgroundColor('#5DB056');
            break;
          case 'ground':
            setCardBackgroundColor('#D97746');
            break;
          case 'rock':
            setCardBackgroundColor('#C7B78B');
            break;
          case 'electric':
            setCardBackgroundColor('#F3D23B');
            break;
          case 'steel':
            setCardBackgroundColor('#5A8EA1');
            break;
          case 'dark':
            setCardBackgroundColor('#060809');
            break;
          case 'fighting':
            setCardBackgroundColor('#4F1A2A');
            break;
          case 'normal':
            setCardBackgroundColor('#9099A1');
            break;
          case 'psychic':
            setCardBackgroundColor('#F97176');
            break;
          case 'fairy':
            setCardBackgroundColor('#EC8FE6');
            break;
          case 'dragon':
            setCardBackgroundColor('#0A6DC4');
            break;
          case 'poison':
            setCardBackgroundColor('#EC8FE6');
            break;
          case 'ice':
            setCardBackgroundColor('#74CEC0');
            break;
          case 'bug':
            setCardBackgroundColor('#90C12C');
            break;
          case 'flying':
            setCardBackgroundColor('#8FA8DD');
            break;
          case 'ghost':
            setCardBackgroundColor('#5269AC');
            break;
          default:
            setCardBackgroundColor('white');
        }

        const abilitiesArray = data.abilities.map((ability) => ability.ability);
        setAbilities(abilitiesArray);

        const abilityDescriptionsPromises = abilitiesArray.map((ability) =>
        fetch(ability.url)
          .then((response) => response.json())
          .then((abilityData) => {
            const description = abilityData.effect_entries[0].effect;
            return { name: ability.name, description };
          })
          .catch((error) => {
            console.error(`Error fetching ability description: ${error}`);
            return { name: ability.name, description: 'No description available' };
          })
      );

      Promise.all(abilityDescriptionsPromises).then((descriptions) => {
        const descriptionsObject = {};
        descriptions.forEach((desc) => {
          descriptionsObject[desc.name] = desc.description;
        });
        setAbilityDescriptions(descriptionsObject);
      });
    })
    .catch((error) => console.error(error));
}, [pokemon.id]);

const getTypeImage = (type) => {
  switch (type) {
    case 'normal':
      return require('../types/Normal.png');
    case 'fire':
      return require('../types/Fuego.png');
    case 'water':
      return require('../types/Agua.png');
    case 'grass':
      return require('../types/Planta.png');
    case 'rock':
      return require('../types/Roca.png');
    case 'ground':
      return require('../types/Tierra.png');
    case 'electric':
      return require('../types/Electro.png');
    case 'psychic':
      return require('../types/Psiquico.png');
    case 'fighting':
      return require('../types/Lucha.png');
    case 'dark':
      return require('../types/Siniestro.png');
    case 'steel':
      return require('../types/Metal.png');
    case 'fairy':
      return require('../types/Hada.png');
    case 'dragon':
      return require('../types/Dragon.png');
    case 'bug':
      return require('../types/Bicho.png');
    case 'ice':
      return require('../types/Hielo.png');
    case 'flying':
      return require('../types/Volador.png');
    case 'poison':
      return require('../types/Veneno.png');
    case 'ghost':
      return require('../types/Fantasma.png');
    default:
      return require('../types/Normal.png');
  }
};
  
  const getAbilityDescription = (abilityName) => {
    if (abilityDescriptions[abilityName]) {
      return abilityDescriptions[abilityName];
    }
    return 'No description available';
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'relative',
      justifyContent: 'center',
    },
    card: {
      flex: 1,
      padding: 20,
      borderRadius: 10,
      backgroundColor: cardBackgroundColor,
      alignItems: 'center',
      position: 'relative',
    },
    image: {
      width: 200,
      height: 200,
      marginTop:100,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 10,
      position: 'absolute',
      top: 10,
      left: 10,

    },
    typeImage: {
      width: 50,
      height: 50,
      position: 'absolute',
      top: 10,
      right: 10,
    },
    abilities: {
      fontSize: 16,
      marginTop: 5,
    },
    boldText: {
      fontWeight: 'bold',
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '120%', 
      maxHeight: '30%',
    },
  });
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={ImageBack} style={styles.backgroundImage} /> 
          <Image source={{ uri: pokemonImageUrl }} style={styles.image} />
          <Text style={styles.name}>{pokemon.name}</Text>
          <Image source={getTypeImage(pokemonType)} style={styles.typeImage} />
          <Text style={styles.type}>{pokemonType.charAt(0).toUpperCase() + pokemonType.slice(1)}</Text>
          <Text style={styles.infoText}>Altura: {pokemon.height} m</Text>
          <Text style={styles.infoText}>Peso: {pokemon.weight} kg</Text>

          {
            abilities.map((ability, index) => (
              <View key={index}>
                <Text style={[styles.abilities, styles.boldText]}>{ability.name}</Text>
                <Text style={styles.abilities}>{getAbilityDescription(ability.name)}</Text>
              </View>
            ))
          }

          {
          description !== '' && (
            <Text style={styles.abilities}>{description}</Text>
          )}

          <TouchableOpacity>
            <FavoritosButton />
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  );
}
