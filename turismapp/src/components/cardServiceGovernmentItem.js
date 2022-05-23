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

export const CardServiceGovernmentItem = ({establecimientosGobierno}) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() =>
          navigation.navigate(
            'DetailsPlaceServiceGovernmentScreen',
            establecimientosGobierno,
          )
        }>
        <ImageBackground
          style={styles.cardImage}
          source={{
            uri: `https://drive.google.com/uc?id=${establecimientosGobierno.ImagenEstable}`,
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
                name="ios-people-sharp"
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
                {establecimientosGobierno.NombreEstable}
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
                {establecimientosGobierno.TelefonoEstable}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Ionicons name="star" size={20} color={COLORS.white} />
              <Text style={{marginLeft: 5, color: COLORS.white}}>
                {establecimientosGobierno.CalificacionPro}
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
