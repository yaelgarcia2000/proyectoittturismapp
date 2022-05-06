import React from 'react';
import COLORS, {COLOR_PRIMATY_OPACITY, COLOR_PRIMARY} from '../utils/paleta';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const {width} = Dimensions.get('screen');

export const CardRecomendado = ({place}) => {
  return (
    <ImageBackground style={styles.rmCardImage} source={place.image}>
      <Text
        style={{
          color: COLORS.white,
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 10,
        }}>
        {place.name}
      </Text>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
        <View
          style={{
            width: '100%',
            justifyContent: 'space-between',

            flexDirection: 'row',
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="location" size={20} color={COLORS.white} />
            <Text style={{marginLeft: 5, color: COLORS.white}}>
              {place.location}
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginRight: '50%'}}>
            <Ionicons name="star" size={20} color={COLORS.white} />
            <Text style={{marginLeft: 5, color: COLORS.white}}>5</Text>
          </View>
        </View>
        <Text style={{color: COLORS.white, fontSize: 13}}>{place.details}</Text>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  rmCardImage: {
    width: width - 20,
    height: 200,
    marginRight: 10,

    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
    marginBottom: 20,
  },
});
