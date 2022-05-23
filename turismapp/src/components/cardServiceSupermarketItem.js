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

export const CardServiceSupermarketItem = ({supermercados}) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() =>
          navigation.navigate(
            'DetailsPlaceServiceSupermarketScreen',
            supermercados,
          )
        }>
        <ImageBackground
          style={styles.cardImage}
          source={{
            uri: `https://drive.google.com/uc?id=${supermercados.ImagenEstable}`,
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
              <Ionicons name="ios-cart-sharp" size={20} color={COLORS.white} />
              <Text
                style={{
                  marginLeft: 5,
                  color: COLORS.white,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                {supermercados.NombreEstable}
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
              <Ionicons
                name="ios-phone-portrait"
                size={20}
                color={COLORS.white}
              />
              <Text
                style={{
                  marginLeft: 5,
                  color: COLORS.white,
                  fontWeight: 'bold',
                }}>
                {supermercados.TelefonoEstable}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Ionicons name="star" size={20} color={COLORS.white} />
              <Text style={{marginLeft: 5, color: COLORS.white}}>
                {supermercados.CalificacionPro}
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
