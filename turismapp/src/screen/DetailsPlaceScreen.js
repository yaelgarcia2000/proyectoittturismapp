import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import COLORS, {COLOR_PRIMARY} from '../utils/paleta';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const DetailsPlaceScreen = ({navigation, route}) => {
  const ciudades = route.params;
  console.log(ciudades);
  console.log(ciudades.imagenRepresentativa);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <ImageBackground
        style={{flex: 0.7}}
        source={{
          uri: `https://drive.google.com/uc?id=${ciudades.imagenRepresentativa}`,
        }}>
        <View style={styles.header}>
          <MaterialIcons
            name="arrow-back-ios"
            size={28}
            color={COLORS.white}
            onPress={navigation.goBack}
          />
        </View>
        <View style={styles.imageDetails}>
          <Text
            style={{
              width: '70%',
              fontSize: 30,
              fontWeight: 'bold',
              color: COLORS.white,
              marginBottom: 20,
            }}>
            {ciudades.nombreCiudad}
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
            <MaterialIcons name="place" size={28} color={COLORS.dark} />
            <Text
              style={{
                marginLeft: 5,
                fontSize: 20,
                fontWeight: 'bold',
                color: COLORS.primary,
              }}>
              {ciudades.nombreCiudad}
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
                {ciudades.region}
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
                {ciudades.municipio}
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
                Localizacion :
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
                {ciudades.urlMaps}
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
                {ciudades.tipo}
              </Text>
            </View>
          </View>
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
                Atractivo :
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
                {ciudades.tiposTurismo}
              </Text>
            </View>
          </View>
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
                Calificación :
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
                {ciudades.calificacion}
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
            {ciudades.descripcion}
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
                {ciudades.correo}
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
                {ciudades.telefono}
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
                Número de emergencias :
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
                {ciudades.numero_emergencias}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.white}}>
            Servicios
          </Text>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: COLORS.white}}>
            / Sobre la zona
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('PlaceScreen')}>
          <View style={styles.btnImagenes}>
            <Text
              style={{color: COLOR_PRIMARY, fontSize: 17, fontWeight: 'bold'}}>
              Abrir
            </Text>
          </View>
        </TouchableOpacity>
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
    top: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginBottom: -30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    flex: 1,
  },
  iconContainer: {
    height: 60,
    width: 60,
    position: 'absolute',
    top: -30,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    right: 20,
    elevation: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: COLOR_PRIMARY,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  btnImagenes: {
    height: 30,
    width: 150,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
