import React from 'react';
import {UserContext} from '../context/user';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS, {COLOR_PRIMARY, COLOR_SECONDARY} from '../utils/paleta';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const Profile = () => {
  const {me, setMe} = React.useContext(UserContext);

  const closeSesion = async () => {
    await GoogleSignin.signOut();
    await AsyncStorage.removeItem('sesion');
    setMe(undefined);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 30, alignItems: 'center'}}>
        <Image
          style={styles.imageProfile}
          source={{
            uri: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          }}
        />
        <Text style={styles.nombreProfile}>name</Text>
        <Text>email</Text>
        <TouchableOpacity style={styles.btn} onPress={closeSesion}>
          <Text style={styles.textBtn}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageProfile: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nombreProfile: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    color: COLOR_PRIMARY,
  },
  btn: {
    width: 200,
    backgroundColor: COLOR_PRIMARY,
    padding: 15,
    borderRadius: 30,
    marginTop: 40,
  },
  textBtn: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: COLORS.white,
  },
});
