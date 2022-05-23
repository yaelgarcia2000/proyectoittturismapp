import React from 'react';
import COLORS, {COLOR_PRIMATY_OPACITY, COLOR_PRIMARY} from '../utils/paleta';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const {width} = Dimensions.get('screen');

export const CardTouristAreaItem = ({zonaTuristica}) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() =>
          navigation.navigate('DetailsPlaceTouristAreaScreen', zonaTuristica)
        }>
        <ImageBackground
          style={styles.cardImage}
          source={{
            uri: `https://drive.google.com/uc?id=${zonaTuristica.Foto}`,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
              }}>
              <Ionicons
                name="md-trail-sign-sharp"
                size={20}
                color={COLORS.white}
              />
              <Text
                style={{
                  marginLeft: 5,
                  color: COLORS.white,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                {zonaTuristica.NombreZonaTuris}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Ionicons name="location" size={20} color={COLORS.white} />
              <Text style={{marginLeft: 5, color: COLORS.white}}>
                {zonaTuristica.Municipio}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Ionicons name="star" size={20} color={COLORS.white} />
              <Text style={{marginLeft: 5, color: COLORS.white}}>
                {zonaTuristica.cantidadCalificaciones}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  cardImage: {
    width: width - 20,
    height: 200,
    marginRight: 10,
    borderRadius: 20,
    overflow: 'hidden',
    padding: 10,
    marginVertical: 10,
  },
});
