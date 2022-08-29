import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, View, Text, Image, TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CardAllRestaurantes} from '../components/cardAllRestaurantes';
import {CardAllHoteles} from '../components/cardAllHoteles';
import {CardAllSuperMercados} from '../components/cardAllSuperMercados';
import COLORS, {COLOR_PRIMATY_OPACITY, COLOR_PRIMARY} from '../utils/paleta';

export const EstablecimientoProScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: COLOR_PRIMARY,
          height: 90,
          paddingHorizontal: 30,
          marginBottom: 5,
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
          {/*<View style={styles.inputContainer}>
            <MaterialIcons name="search" size={25} color={COLORS.dark} />
            <TextInput
              color={COLORS.grey}
              placeholder="Buscar lugar"
              style={{color: COLORS.dark}}
            />
          </View>*/}
        </View>
      </View>

      <CardAllRestaurantes />
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
    top: 20,
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
