import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

export const Information = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>
        Guerrilleros Frente Patriota buscados por la policia, por lidear
        barricadas y saqueos en Huatla de Jiménes
      </Text>
      <Image source={require('../assest/img/a3.jpg')} style={styles.foto} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  foto: {
    width: 260,
    height: 269,
    resizeMode: 'contain',
    margin: 10,
    borderRadius: 60,
  },
});
