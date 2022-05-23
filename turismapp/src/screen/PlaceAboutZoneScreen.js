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
import {CardRestaurantesHome} from '../components/cardRestaurantesHome';

import {CardTouristArea} from '../components/cardTouristArea';
import {CardReview} from '../components/cardReview';
import {CardFestivity} from '../components/cardFestivity';
import {CardImportantPeople} from '../components/cardImportantPeople';
import {CardDish} from '../components/cardDish';

export const PlaceAboutZoneScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHear}>
          <Text style={styles.titleCategoria}>Zonas turísticas</Text>
          <TouchableOpacity onPress={() => navigation.navigate('PlaceScreen')}>
            <Text style={{color: COLOR_SECONDARY}}>Ver todo</Text>
          </TouchableOpacity>
        </View>
        <View>
          <CardTouristArea />
        </View>
        <View style={styles.sectionHear}>
          <Text style={styles.titleCategoria}>Reseñas</Text>
          <TouchableOpacity onPress={() => navigation.navigate('PlaceScreen')}>
            <Text style={{color: COLOR_SECONDARY}}>Ver todo</Text>
          </TouchableOpacity>
        </View>
        <View>
          <CardReview />
        </View>
        <View style={styles.sectionHear}>
          <Text style={styles.titleCategoria}>Festividades</Text>
          <TouchableOpacity onPress={() => navigation.navigate('PlaceScreen')}>
            <Text style={{color: COLOR_SECONDARY}}>Ver todo</Text>
          </TouchableOpacity>
        </View>
        <View>
          <CardFestivity />
        </View>
        <View style={styles.sectionHear}>
          <Text style={styles.titleCategoria}>Personajes importantes</Text>
          <TouchableOpacity onPress={() => navigation.navigate('PlaceScreen')}>
            <Text style={{color: COLOR_SECONDARY}}>Ver todo</Text>
          </TouchableOpacity>
        </View>
        <View>
          <CardImportantPeople />
        </View>
        <View style={styles.sectionHear}>
          <Text style={styles.titleCategoria}>Platillos</Text>
          <TouchableOpacity onPress={() => navigation.navigate('PlaceScreen')}>
            <Text style={{color: COLOR_SECONDARY}}>Ver todo</Text>
          </TouchableOpacity>
        </View>
        <View>
          <CardDish />
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
