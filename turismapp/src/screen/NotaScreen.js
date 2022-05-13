import React, {useEffect, useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, View, Text} from 'react-native';
import {UserContext} from '../context/user';
import {CardAgenda} from '../components/cardAgenda';
import COLORS, {COLOR_PRIMATY_OPACITY, COLOR_PRIMARY} from '../utils/paleta';

export const NotaScreen = ({navigation}) => {
  const {me} = useContext(UserContext);

  useEffect(() => {
    console.log('hola desde notas');
    if (!me) {
      navigation.push('AuthScreen');
    }
  }, [me, navigation]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <CardAgenda />
        <Text>frffffffffffffff</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddin: 20,
    alignItems: 'center',
  },
});
