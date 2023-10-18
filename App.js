import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import GenerationScreen from './screens/GenerationScreen';
import PokemonDetailScreen from './screens/PokemonDetailScreen';
import PokemonNotFound from './screens/PokemonNotFound';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Generation" component={GenerationScreen} />
        <Stack.Screen name="PokemonDetailScreen" component={PokemonDetailScreen} />
        <Stack.Screen name="PokemonNotFound" component={PokemonNotFound} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
