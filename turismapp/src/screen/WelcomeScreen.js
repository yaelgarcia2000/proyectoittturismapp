import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLOR_PRIMARY, COLOR_SECONDARY} from '../utils/paleta';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
//import {ScrollView} from 'react-native-gesture-handler';
const {height, width} = Dimensions.get('screen');

export const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar translucent={false} backgroundColor={COLOR_PRIMARY} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.head}>
          <Text style={styles.title}>
            {'\n'}BIENVENIDO{'\n'}A OAXACA
          </Text>
          <Image
            style={styles.img}
            source={require('../assest/img/welcome.png')}
          />
        </View>
        <View style={styles.description}>
          <View style={styles.ovalado} />
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '500',
              fontSize: 30,
              color: 'black',
            }}>
            Conoce y Aprende
          </Text>
          <Text style={styles.meta}>
            Visítanos y llénate de
            <Text style={{color: COLOR_PRIMARY, fontWeight: 'bold'}}>
              {' '}
              asombro
            </Text>
            {'\n'} en este maravilloso viaje
          </Text>
          <TouchableOpacity
            style={styles.btnStar}
            onPress={() => navigation.navigate('Root')}>
            <AntDesign name="right" style={styles.circleIcon} />
            <Text style={styles.textBtn}>Empezar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnStar}>
            <AntDesign name="right" style={styles.circleIcon} />
            <Text style={styles.textBtn}>Iniciar Sesión</Text>
          </TouchableOpacity>
          {/*<TouchableOpacity
            style={styles.btnStar}
            onPress={() => navigation.navigate('Home')}>
            <AntDesign name="right" style={styles.circleIcon} />
            <Text style={styles.textBtn}>Empezar</Text>
        </TouchableOpacity>*/}
          {/* <TouchableOpacity
            style={styles.btnStar}
            onPress={() => navigation.navigate('Login')}>
            <AntDesign name="right" style={styles.circleIcon} />
            <Text style={styles.textBtn}>Iniciar sesión</Text>
      </TouchableOpacity>*/}
          {/*<TouchableOpacity
            style={styles.btnStar}
            onPress={() => navigation.navigate('LoginScreen')}>
            <AntDesign name="right" style={styles.circleIcon} />
            <Text style={styles.textBtn}>Iniciar sesión</Text>
          </TouchableOpacity>*/}
          <View style={styles.version}>
            <Text>Version 0.1</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLOR_PRIMARY,
  },
  head: {
    padding: 25,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  img: {
    position: 'absolute',
    top: -8,
    left: '44%',
    width: '75%',
    height: '265%',
    //borderTopLeftRadius: 100,
    //borderBottomRightRadius: 130,
    resizeMode: 'contain',
  },
  description: {
    padding: 40,
    height,
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'relative',
    top: 110,
    //opacity: 0.9,
  },
  ovalado: {
    width: width - 230,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 200,
    position: 'absolute',
    top: -40,
    transform: [{scaleX: 3}],
  },
  meta: {
    color: COLOR_SECONDARY,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
  },
  btnStar: {
    marginTop: 40,
    backgroundColor: COLOR_PRIMARY,
    paddingVertical: 5,
    paddingHorizontal: 40,
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleIcon: {
    backgroundColor: '#fff',
    borderRadius: 50,
    margin: 10,
    position: 'relative',
    left: -40,
    padding: 20,
    fontSize: 20,
    color: 'black',
  },
  textBtn: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 20,
    color: '#fff',
    position: 'relative',
    left: -20,
  },
  version: {
    color: 'black',
    top: 70,
  },
});
