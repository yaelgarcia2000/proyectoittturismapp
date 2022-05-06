import React from 'react';
import COLORS, {COLOR_PRIMATY_OPACITY, COLOR_PRIMARY} from '../utils/paleta';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const CardAgendaItem = ({agenda, handleDelete}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('AgendaFormScreen', {ID: agenda.ID})
        }>
        <Text style={styles.itemTitle}>Fecha: {agenda.FECHA}</Text>
        <Text style={styles.itemTitle}>Hora: {agenda.HORA}</Text>
        <Text style={styles.itemTitle}>Ciudad: {agenda.CIUDAD}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{backgroundColor: '#ee5253', padding: 7, borderRadius: 5}}
        onPress={() => handleDelete(agenda.ID)}>
        <Text style={{color: COLORS.white, fontSize: 16, fontWeight: 'bold'}}>
          Eliminar
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: COLORS.grey,
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
});
