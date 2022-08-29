import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image,
  TextInput,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CardAllPersonajesImportantes} from '../components/cardAllPersonajesImportantes';
import COLORS, {COLOR_PRIMATY_OPACITY, COLOR_PRIMARY} from '../utils/paleta';

export const AllPersonajesImportantesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor={COLOR_PRIMARY} />
      <CardAllPersonajesImportantes />
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
    //top: 5,
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
