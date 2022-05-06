import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import COLORS, {COLOR_PRIMARY, COLOR_SECONDARY} from '../utils/paleta';

import {CardLugaresHome} from '../components/cardLugaresHome';
import {CardHotelesHome} from '../components/cardHotelesHome';
import {CardRestaurantesHome} from '../components/cardRestaurantesHome';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('screen');
const dataCategory = [
  {
    id: '1',
    icon: 'map-signs',
    title: 'Viajes',
    isAcive: true,
  },
  {
    id: '2',
    icon: 'photo',
    title: 'Lugares',
    isAcive: false,
  },
  {
    id: '3',
    icon: 'youtube',
    title: 'YouTube',
    isAcive: false,
  },
  {
    id: '4',
    icon: 'leanpub',
    title: 'Noticias',
    isAcive: false,
  },
  {
    id: '5',
    icon: 'instagram',
    title: 'Instagram',
    isAcive: false,
  },
  {
    id: '6',
    icon: 'twitter',
    title: 'Twitter',
    isAcive: false,
  },
  {
    id: '7',
    icon: 'facebook-official',
    title: 'Facebook',
    isAcive: false,
  },
];

export const HomeScreen = ({ciudades}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>Hola Yael García Cuesta</Text>
          <Text style={{fontSize: 12, color: COLORS.white}}>
            Buenos dias!!!!
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('NotaScreen')}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://ta.azureedge.net/p/api/usuario/dup/eWwg4cLU2Ujy3zxvmqQgQYdhMYwxO4zo0.jpg/120x120cut/',
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
        {/*
        <View style={{alignItems: 'center'}}>
          <CardAnuncio />
        </View>
        <View>
          <View style={styles.sectionHear}>
            <Text style={styles.titleCategoria}>Categoria</Text>
            <Text style={{color: COLOR_SECONDARY}}>Ver todo</Text>
          </View>
          <FlatList
            data={dataCategory}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity key={item.id}>
                <CircleCategoria
                  title={item.title}
                  icon={item.icon}
                  isActive={item.isAcive}
                />
              </TouchableOpacity>
            )}
          />
        </View>*/}
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
