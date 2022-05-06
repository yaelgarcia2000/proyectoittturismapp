import React from 'react';
import {COLOR_PRIMARY} from '../utils/paleta';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {View, Text, StyleSheet, Image} from 'react-native';

export const CircleCategoria = ({title, icon, isActive}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.circle,
          isActive
            ? {backgroundColor: COLOR_PRIMARY}
            : {backgroundColor: '#cdcdcd'},
        ]}>
        <FontAwesome
          style={{color: 'black', padding: 15, fontSize: 30}}
          name={icon}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 100,
    height: 110,
  },
  title: {
    textAlign: 'center',
    fontWeight: '500',
    color: 'black',
  },
  circle: {
    borderRadius: 50,
    marginBottom: 10,
  },
});
