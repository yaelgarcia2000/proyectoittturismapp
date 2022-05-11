import React, {useContext} from 'react';
import {UserContext} from '../context/user';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS, {COLOR_PRIMARY, COLOR_SECONDARY} from '../utils/paleta';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  StatusBar,
} from 'react-native';
import {CardLugaresHome} from '../components/cardLugaresHome';
import {CardHotelesHome} from '../components/cardHotelesHome';
import {CardRestaurantesHome} from '../components/cardRestaurantesHome';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('screen');

export const HomeScreen = () => {
  const navigation = useNavigation();
  const {me} = useContext(UserContext);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor={COLOR_PRIMARY} />
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>Hola {me.name}</Text>
          <Text style={{fontSize: 12, color: COLORS.white}}>Bienvenido</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            style={styles.avatar}
            source={{
              uri:
                me.photo ||
                'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
          />
        </TouchableOpacity>
      </View>
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
              <Text style={styles.headerTitle}>Explora una mejor</Text>
              <Text style={styles.headerTitle}>experiencia</Text>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.sectionHear}>
            <Text style={styles.titleCategoria}>Lugares</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('PlaceScreen')}>
              <Text style={{color: COLOR_SECONDARY}}>Ver todo</Text>
            </TouchableOpacity>
          </View>
          <View>
            <CardLugaresHome />
          </View>
        </View>
        <View>
          <View style={styles.sectionHear}>
            <Text style={styles.titleCategoria}>Hoteles</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('PlaceScreen')}>
              <Text style={{color: COLOR_SECONDARY}}>Ver todo</Text>
            </TouchableOpacity>
          </View>
          <View>
            <CardHotelesHome />
          </View>
        </View>
        <View>
          <View style={styles.sectionHear}>
            <Text style={styles.titleCategoria}>Restaurantes</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('PlaceScreen')}>
              <Text style={{color: COLOR_SECONDARY}}>Ver todo</Text>
            </TouchableOpacity>
          </View>
          <View>
            <CardRestaurantesHome />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(235,235,235)',
  },
  header: {
    paddingVertical: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLOR_PRIMARY,
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
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.white,
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
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  titleCategoria: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    left: 20,
  },
  sectionHear: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    marginBottom: 15,
    left: -10,
  },
});
