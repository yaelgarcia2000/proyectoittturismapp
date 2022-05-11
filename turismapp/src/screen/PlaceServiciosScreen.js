import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const PlaceServiciosScreen = () => {
  return (
    <View>
      <View style={styles.sectionHear}>
        <Text style={styles.titleCategoria}>Restaurantes</Text>
        <TouchableOpacity onPress={() => navigation.navigate('PlaceScreen')}>
          <Text style={{color: COLOR_SECONDARY}}>Ver todo</Text>
        </TouchableOpacity>
      </View>
      <View>
        <CardRestaurantesHome />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  contanier: {
    flex: 1,
  },
});
