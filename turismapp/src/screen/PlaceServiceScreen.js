import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLOR_SECONDARY} from '../utils/paleta';
import {CardServiceRestaurant} from '../components/cardServiceRestaurant';
import {CardServiceHotel} from '../components/cardServiceHotel';
import {CardServiceTransport} from '../components/cardServiceTransport';
import {CardServiceMarket} from '../components/cardServiceMarket';
import {CardServiceBank} from '../components/cardServiceBank';
import {CardServiceGovernment} from '../components/cardServiceGovernment';
import {CardServiceSupermarket} from '../components/cardServiceSupermarket';
import {CardServiceShop} from '../components/cardServiceShop';
import {CardRestaurantesHome} from '../components/cardRestaurantesHome';
export const PlaceServiceScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHear}>
          <Text style={styles.titleCategoria}>Restaurantes</Text>
          <TouchableOpacity onPress={() => navigation.navigate('PlaceScreen')}>
            <Text style={{color: COLOR_SECONDARY}}>Ver todo</Text>
          </TouchableOpacity>
        </View>
        <View>
          <CardServiceRestaurant />
        </View>
        <View style={styles.sectionHear}>
          <Text style={styles.titleCategoria}>Hoteles</Text>
          <TouchableOpacity onPress={() => navigation.navigate('PlaceScreen')}>
            <Text style={{color: COLOR_SECONDARY}}>Ver todo</Text>
          </TouchableOpacity>
        </View>
        <View>
          <CardServiceHotel />
        </View>
        <View style={styles.sectionHear}>
          <Text style={styles.titleCategoria}>Transportes</Text>
          <TouchableOpacity onPress={() => navigation.navigate('PlaceScreen')}>
            <Text style={{color: COLOR_SECONDARY}}>Ver todo</Text>
          </TouchableOpacity>
        </View>
        <View>
          <CardServiceTransport />
        </View>
        <View style={styles.sectionHear}>
          <Text style={styles.titleCategoria}>Mercados</Text>
          <TouchableOpacity onPress={() => navigation.navigate('PlaceScreen')}>
            <Text style={{color: COLOR_SECONDARY}}>Ver todo</Text>
          </TouchableOpacity>
        </View>
        <View>
          <CardServiceMarket />
        </View>
        <View style={styles.sectionHear}>
          <Text style={styles.titleCategoria}>Bancos</Text>
          <TouchableOpacity onPress={() => navigation.navigate('PlaceScreen')}>
            <Text style={{color: COLOR_SECONDARY}}>Ver todo</Text>
          </TouchableOpacity>
        </View>
        <View>
          <CardServiceBank />
        </View>
        <View style={styles.sectionHear}>
          <Text style={styles.titleCategoria}>
            Establecimientos de Gobierno
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('PlaceScreen')}>
            <Text style={{color: COLOR_SECONDARY}}>Ver todo</Text>
          </TouchableOpacity>
        </View>
        <View>
          <CardServiceGovernment />
        </View>
        <View style={styles.sectionHear}>
          <Text style={styles.titleCategoria}>Supermercados</Text>
          <TouchableOpacity onPress={() => navigation.navigate('PlaceScreen')}>
            <Text style={{color: COLOR_SECONDARY}}>Ver todo</Text>
          </TouchableOpacity>
        </View>
        <View>
          <CardServiceSupermarket />
        </View>
        <View style={styles.sectionHear}>
          <Text style={styles.titleCategoria}>Abarroteras</Text>
          <TouchableOpacity onPress={() => navigation.navigate('PlaceScreen')}>
            <Text style={{color: COLOR_SECONDARY}}>Ver todo</Text>
          </TouchableOpacity>
        </View>
        <View>
          <CardServiceShop />
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
  titleCategoria: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    left: 20,
  },
  sectionHear: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 15,
    left: -10,
  },
});
