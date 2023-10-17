import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function PokemonDetailScreen({ route }) {
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
            setCardBackgroundColor('#F37046');
            break;
          case 'water':
            setCardBackgroundColor('#4bacec');
            break;
          case 'grass':
            setCardBackgroundColor('#92AA47');
            break;
          case 'earth':
            setCardBackgroundColor('orange');
            break;
          case 'electric':
            setCardBackgroundColor('#FFE14C');
            break;
          case 'steel':
            setCardBackgroundColor('#CDD8DC');
            break;
          case 'dark':
            setCardBackgroundColor('#031315');
            break;
          case 'fighting':
            setCardBackgroundColor('#D4E1E5');
            break;
          case 'normal':
            setCardBackgroundColor('#ffffff');
            break;
          case 'psychic':
            setCardBackgroundColor('#B680BA');
            break;
          case 'fairy':
            setCardBackgroundColor('#C2316A');
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
      case 'earth':
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
  });
  return (
    <View style={styles.container}>
      <View style={styles.card}>
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
      </View>
    </View>
  );
}
