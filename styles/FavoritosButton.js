import React from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const FavoritosButton = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Button
        buttonStyle={{
          backgroundColor: '#F74780',
          borderRadius: 15, 
          padding: 10,
          marginTop:20,
          marginBottom:90,
        }}
        
        title="Add Favoritos"
        titleStyle={{ color: 'white' }}
        iconRight={true} 
        onPress={() => {
          // Manejar la lógica de favoritos aquí
        }}

        icon={
            <Icon
              name="heart"
              type="font-awesome"
              size={15} 
              color="white"
            />
          }
      />
    </View>
  );
};

export default FavoritosButton;
