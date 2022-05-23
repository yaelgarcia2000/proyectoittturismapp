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

export const CardImportantPeopleItem = ({personajesImportantes}) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() =>
          navigation.navigate(
            'DetailsPlaceImportantPeopleScreen',
            personajesImportantes,
          )
        }>
        <ImageBackground
          style={styles.cardImage}
          source={{
            uri: `https://drive.google.com/uc?id=${personajesImportantes.Foto}`,
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
              <Ionicons name="md-person" size={20} color={COLORS.white} />
              <Text
                style={{
                  marginLeft: 5,
                  color: COLORS.white,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                {personajesImportantes.NombrePersonaje}
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
                {personajesImportantes.NombreCiudad}
              </Text>
            </View>
            {/*<View
              style={{
                flexDirection: 'row',
              }}>
              <Ionicons name="star" size={20} color={COLORS.white} />
              <Text style={{marginLeft: 5, color: COLORS.white}}>
                {personajesImportantes.cantidadCalificaciones}
              </Text>
            </View>*/}
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
