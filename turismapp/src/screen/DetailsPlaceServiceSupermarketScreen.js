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

export const DetailsPlaceServiceSupermarketScreen = ({navigation, route}) => {
  const supermercados = route.params;
  console.log(supermercados);
  console.log(supermercados.imagenRepresentativa);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <ImageBackground
        style={{flex: 0.7}}
        source={{
          uri: `https://drive.google.com/uc?id=${supermercados.ImagenEstable}`,
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
            {supermercados.NombreEstable}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <MaterialIcons name="star" size={30} color={COLORS.orange} />
            <Text
              style={{color: COLORS.white, fontSize: 20, fontWeight: 'bold'}}>
              {supermercados.CalificacionPro}
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
            <MaterialIcons
              name="store-mall-directory"
              size={28}
              color={COLORS.dark}
            />
            <Text
              style={{
                marginLeft: 5,
                fontSize: 20,
                fontWeight: 'bold',
                color: COLORS.primary,
              }}>
              {supermercados.NombreEstable}
            </Text>
          </View>
          <Text
            style={{
              marginTop: 20,
              fontWeight: 'bold',
              fontSize: 20,
              color: COLORS.dark,
            }}>
            Información del restaurante
          </Text>
          <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 20,
                  marginRight: 10,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: COLORS.primary,
                }}>
                Telefono :
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
                {supermercados.TelefonoEstable}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  marginLeft: 10,
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
                {supermercados.CorreoEstable}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 10,
                  marginRight: 10,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: COLORS.primary,
                }}>
                Calificacion :
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
                {supermercados.CalificacionPro}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 10,
                  marginRight: 10,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: COLORS.primary,
                }}>
                Página web:
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
                {supermercados.PaginaWebPro}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 20,
                  marginRight: 10,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: COLORS.primary,
                }}>
                URL mapa :
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
                {supermercados.UrlMapaPro}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 20,
                  marginRight: 10,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: COLORS.primary,
                }}>
                Direeción :
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
                {supermercados.CalleDireccion}
                {', '}
                {supermercados.NumeroDireccion}
                {', '}
                {supermercados.CPDireccion} {'\n'}
                {supermercados.ColoniaDireccion}
                {', '}
                {supermercados.NombreCiudad}
              </Text>
            </View>
          </View>
          <Text
            style={{
              marginTop: 20,
              fontWeight: 'bold',
              fontSize: 20,
              color: COLORS.dark,
            }}>
            Días y horas de atención al cliente :
          </Text>
          <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 10,
                  marginRight: 10,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: COLORS.primary,
                }}>
                Lunes :
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
                {supermercados.Lunes}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 10,
                  marginRight: 10,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: COLORS.primary,
                }}>
                Martes :
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
                {supermercados.Martes}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 10,
                  marginRight: 10,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: COLORS.primary,
                }}>
                Miércoles :
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
                {supermercados.Miercoles}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 10,
                  marginRight: 10,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: COLORS.primary,
                }}>
                Jueves :
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
                {supermercados.Jueves}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 10,
                  marginRight: 10,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: COLORS.primary,
                }}>
                Viernes :
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
                {supermercados.Viernes}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 10,
                  marginRight: 10,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: COLORS.primary,
                }}>
                Sabado :
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
                {supermercados.Sabado}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 10,
                  marginRight: 10,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: COLORS.primary,
                }}>
                Domingo :
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
                {supermercados.Domingo}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        {/*   <View
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
        <TouchableOpacity
          onPress={() => navigation.navigate('PlaceServiceScreen')}>
          <View style={styles.btnImagenes}>
            <Text
              style={{color: COLOR_PRIMARY, fontSize: 17, fontWeight: 'bold'}}>
              Servicios
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('PlaceAboutZoneScreen')}>
          <View style={styles.btnImagenes}>
            <Text
              style={{color: COLOR_PRIMARY, fontSize: 17, fontWeight: 'bold'}}>
              Sobre la zona
            </Text>
          </View>
        </TouchableOpacity>*/}
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
    height: 10,
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
