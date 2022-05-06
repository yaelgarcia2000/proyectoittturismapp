import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';
import COLORS from '../utils/paleta';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export const DetailsPlaceScreen = ({navigation, route}) => {
  const place = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,1)" />
      <ImageBackground style={{flex: 1, height: '86%'}} source={place.image}>
        <View style={styles.header}>
          <MaterialIcons
            name="arrow-back-ios"
            size={28}
            color={COLORS.white}
            onPress={navigation.goBack}
          />
          {/*      <MaterialIcons
            name="arrow-back-ios"
            size={28}
            color={COLORS.white}
            onPress={navigation.goBack}
          />*/}
        </View>
        <View style={styles.imageDetails}>
          <Text
            style={{
              width: '70%',
              fontSize: 30,
              fontWeight: 'bold',
              color: COLORS.white,
              marginBottom: 40,
            }}>
            {place.name}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <MaterialIcons name="star" size={30} color={COLORS.orange} />
            <Text
              style={{color: COLORS.white, fontSize: 20, fontWeight: 'bold'}}>
              5
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.detailsContainer}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="favorite" color={COLORS.red} size={30} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flexDirection: 'row', marginTop: 1}}>
            <MaterialIcons name="place" size={28} color={COLORS.primary} />
            <Text
              style={{
                marginLeft: 5,
                fontSize: 20,
                fontWeight: 'bold',
                color: COLORS.primary,
              }}>
              Pueblo mágico
            </Text>
          </View>
          <Text
            style={{
              marginTop: 20,
              fontWeight: 'bold',
              fontSize: 20,
              color: COLORS.dark,
            }}>
            Aceca de este lugar
          </Text>
          <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  marginLeft: 20,
                  marginTop: 20,
                  marginRight: 10,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: COLORS.primary,
                }}>
                Región :
              </Text>
            </View>
            <View>
              <Text
                style={{
                  marginLeft: 1,
                  marginTop: 20,
                  marginRight: 20,
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                {place.region}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  marginLeft: 20,
                  marginTop: 10,
                  marginRight: 10,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: COLORS.primary,
                }}>
                Municipio :
              </Text>
            </View>
            <View>
              <Text
                style={{
                  marginLeft: 1,
                  marginTop: 10,
                  marginRight: 20,
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                {place.municipality}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  marginLeft: 20,
                  marginTop: 10,
                  marginRight: 10,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: COLORS.primary,
                }}>
                Clima :
              </Text>
            </View>
            <View>
              <Text
                style={{
                  marginLeft: 1,
                  marginTop: 10,
                  marginRight: 20,
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                {place.municipality}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  marginLeft: 20,
                  marginTop: 10,
                  marginRight: 10,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: COLORS.primary,
                }}>
                Tipo de turismo :
              </Text>
            </View>
            <View>
              <Text
                style={{
                  marginLeft: 1,
                  marginTop: 10,
                  marginRight: 20,
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                {place.municipality}
              </Text>
            </View>
          </View>
          <Text
            style={{
              marginTop: 25,
              fontWeight: 'bold',
              fontSize: 20,
              color: COLORS.dark,
            }}>
            Descripción :
          </Text>
          <Text
            style={{
              marginLeft: 5,
              marginTop: 10,
              marginRight: 20,
              fontSize: 18,
              fontWeight: '300',
              lineHeight: 22,
              color: COLORS.dark,
            }}>
            {place.details}
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontWeight: 'bold',
              fontSize: 20,
              color: COLORS.dark,
            }}>
            Información adicional :
          </Text>
          <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  marginLeft: 20,
                  marginTop: 10,
                  marginRight: 10,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: COLORS.primary,
                }}>
                Correo :
              </Text>
            </View>
            <View>
              <Text
                style={{
                  marginLeft: 1,
                  marginTop: 10,
                  marginRight: 20,
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                {place.municipality}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  marginLeft: 20,
                  marginTop: 10,
                  marginRight: 10,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: COLORS.primary,
                }}>
                Número :
              </Text>
            </View>
            <View>
              <Text
                style={{
                  marginLeft: 1,
                  marginTop: 10,
                  marginRight: 20,
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                {place.municipality}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  marginLeft: 20,
                  marginTop: 10,
                  marginRight: 10,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: COLORS.primary,
                }}>
                Emergencias :
              </Text>
            </View>
            <View>
              <Text
                style={{
                  marginLeft: 1,
                  marginTop: 10,
                  marginRight: 20,
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                {place.municipality}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  imageDetails: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 30,
  },
  detailsContainer: {
    flex: 1,

    top: -69,

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    marginBottom: 100,
  },
  iconContainer: {
    height: 60,
    width: 60,
    position: 'absolute',
    top: -50,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    right: 20,
    elevation: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: COLORS.orange,
    top: 100,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
