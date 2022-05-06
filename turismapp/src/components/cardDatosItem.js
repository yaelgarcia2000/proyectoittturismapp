import React from 'react';
import COLORS, {COLOR_PRIMATY_OPACITY, COLOR_PRIMARY} from '../utils/paleta';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
export const CardDatosItem = ({datos}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>
        ID_TRANSPORTE:{' '}
        <Text style={styles.titleDato}>{datos.ID_TRANSPORTE}</Text>
      </Text>
      <Text style={styles.itemTitle}>
        NOMBRE: <Text style={styles.titleDato}>{datos.NOMBRE}</Text>
      </Text>
      <Text style={styles.itemTitle}>
        ID_CIUDAD: <Text style={styles.titleDato}>{datos.ID_CIUDAD}</Text>
      </Text>
      <Text style={styles.itemTitle}>
        Nombre: <Text style={styles.titleDato}>{datos.nombreCiudad}</Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: COLORS.white,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 40,
    paddingLeft: 15,
    borderWidth: 2,
    borderColor: COLOR_PRIMARY,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '300',
    color: COLORS.dark,
  },
  titleDato: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
});
