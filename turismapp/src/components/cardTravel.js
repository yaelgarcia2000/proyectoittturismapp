import React from 'react';
import COLORS, {COLOR_PRIMATY_OPACITY, COLOR_PRIMARY} from '../utils/paleta';
import {View, Text, Image, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const CardTravel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={styles.img}
            source={require('../assest/img/huatulco.jpg')}
          />
          <View style={{marginLeft: 15}}>
            <Text style={styles.title}>Santa María Huatulco</Text>
            <Text style={{color: COLOR_PRIMATY_OPACITY}}>
              Bahías de Huatulco
            </Text>

            <View
              style={[
                styles.content,
                {justifyContent: 'space-around', marginTop: 18},
              ]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.btnRight}>
                  <Ionicons style={styles.icon} name="location" />
                </View>
                <Text style={styles.textIcon}>Oaxaca</Text>
              </View>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.btnRight}>
                  <Ionicons style={styles.icon} name="star" />
                </View>
                <Text style={styles.textIcon}>5.0</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.btnRight}>
        <Ionicons
          style={{padding: 6, fontSize: 25}}
          name="md-arrow-forward-outline"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 330,
    backgroundColor: COLOR_PRIMARY,
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  title: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
  icon: {
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
    color: 'black',
  },
  textIcon: {
    fontWeight: '500',
    color: COLORS.dark,
    left: 4,
  },
  btnRight: {
    backgroundColor: COLOR_PRIMATY_OPACITY,
    borderRadius: 20,
  },
});
