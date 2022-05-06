import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, View, Text, Image, TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CardLugares} from '../components/cardLugares';
import COLORS, {COLOR_PRIMATY_OPACITY, COLOR_PRIMARY} from '../utils/paleta';

export const EstablecimientoProScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: COLOR_PRIMARY,
          height: 90,
          paddingHorizontal: 30,
          marginBottom: 40,
        }}>
        <View>
          <View style={styles.head}>
            <View>
              <Text style={styles.headerTitle}>Explora de los mejores</Text>
              <Text style={styles.headerTitle}>establecimientos</Text>
            </View>
            <Image
              style={styles.img}
              source={require('../assest/img/jaguar.png')}
            />
          </View>
          <View style={styles.inputContainer}>
            <MaterialIcons name="search" size={25} color={COLORS.dark} />
            <TextInput
              color={COLORS.grey}
              placeholder="Buscar lugar"
              style={{color: COLORS.dark}}
            />
          </View>
        </View>
      </View>
      <CardLugares />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(235,235,235)',
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  inputContainer: {
    height: 40,
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: 'absolute',
    top: 70,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 20,
  },
  head: {
    top: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    position: 'absolute',
    top: -12,
    left: '25%',
    width: '95%',
    height: '190%',
    resizeMode: 'contain',
  },
});
