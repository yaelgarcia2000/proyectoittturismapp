import React, {useContext} from 'react';
import {UserContext} from '../context/user';
import {LoginScreeen} from '../screen/Login';
import {Profile} from '../screen/Profile';
import {NotaScreen} from '../screen/NotaScreen';
import {AllAbarroterasScreen} from '../screen/AllAbarroterasScreen';
import {AllBancosScreen} from '../screen/AllBancosScreen';
import {AllFestividadesScreen} from '../screen/AllFestividadesScreen';
import {AllGobiernoScreen} from '../screen/AllGobiernoScreen';
import {AllHotelesScreen} from '../screen/AllHotelesScreen';
import {AllMercadosScreen} from '../screen/AllMercadosScreen';
import {AllPersonajesImportantesScreen} from '../screen/AllPersonajesImportantesScreen';
import {AllPlatilosScreen} from '../screen/AllPlatilosScreen';
import {AllReseniasScreen} from '../screen/AllReseniasScreen';
import {AllRestaurantesScreen} from '../screen/AllRestaurantesScreen';
import {AllSuperMercadosScreen} from '../screen/AllSuperMercadosScreen';
import {AllTransportesScreen} from '../screen/AllTransportesScreen';
import {AllZonasTuristicasScreen} from '../screen/AllZonasTuristicasScreen';
import {PlaceScreen} from '../screen/PlaceScreen';
import {DetailsPlaceScreen} from '../screen/DetailsPlaceScreen';
import {DetailsPlaceDishScreen} from '../screen/DetailsPlaceDishScreen';
import {DetailsPlaceFestivityScreen} from '../screen/DetailsPlaceFestivityScreen';
import {DetailsPlaceImportantPeopleScreen} from '../screen/DetailsPlaceImportantPeopleScreen';
import {DetailsNotasCiudadScreen} from '../screen/DetailsNotasCiudadScreen';
import {DetailsPlaceTouristAreaScreen} from '../screen/DetailsPlaceTouristAreaScreen';

import {DetailsPlaceServiceRestaurantScreen} from '../screen/DetailsPlaceServiceRestaurantScreen';
import {DetailsPlaceServiceHotelScreen} from '../screen/DetailsPlaceServiceHotelScreen';
import {DetailsPlaceServiceTransportScreen} from '../screen/DetailsPlaceServiceTransportScreen';
import {DetailsPlaceServiceMarketScreen} from '../screen/DetailsPlaceServiceMarketScreen';
import {DetailsPlaceServiceBankScreen} from '../screen/DetailsPlaceServiceBankScreen';
import {DetailsPlaceServiceGovernmentScreen} from '../screen/DetailsPlaceServiceGovernmentScreen';
import {DetailsPlaceServiceSupermarketScreen} from '../screen/DetailsPlaceServiceSupermarketScreen';
import {DetailsPlaceServiceShopScreen} from '../screen/DetailsPlaceServiceShopScreen';

import {AgendaFormScreen} from '../screen/AgendaFormScreen';
import {PlaceServiciosScreen} from '../screen/PlaceServiciosScreen';
import {WelcomeScreen} from '../screen/WelcomeScreen';
import {BottonNavigation} from './bottom';
import {AuthScreen} from '../screen/AuthScreen';
import {PlaceServiceScreen} from '../screen/PlaceServiceScreen';
import {PlaceAboutZoneScreen} from '../screen/PlaceAboutZoneScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import COLORS, {COLOR_PRIMARY} from '../utils/paleta';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const {me} = useContext(UserContext);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        {me ? <></> : <></>}
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{headerShown: false, title: 'WelcomeScreen'}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Mi perfil',
            headerStyle: {backgroundColor: COLOR_PRIMARY},
            headerTitleStyle: {
              color: COLORS.white,
              fontSize: 22,
              fontWeight: 'bold',
            },
            headerTintColor: COLORS.white,
          }}
        />
        <Stack.Screen
          name="PlaceScreen"
          component={PlaceScreen}
          options={{headerShown: false, title: 'PlaceScreen'}}
        />

        <Stack.Screen
          name="AllAbarroterasScreen"
          component={AllAbarroterasScreen}
          options={{
            title: 'Abarroteras de la zona',
            headerStyle: {backgroundColor: COLOR_PRIMARY},
            headerTitleStyle: {
              color: COLORS.white,
              fontSize: 22,
              fontWeight: 'bold',
            },
            headerTintColor: COLORS.white,
          }}
        />
        <Stack.Screen
          name="AllBancosScreen"
          component={AllBancosScreen}
          options={{
            title: 'Bancos de la zona',
            headerStyle: {backgroundColor: COLOR_PRIMARY},
            headerTitleStyle: {
              color: COLORS.white,
              fontSize: 22,
              fontWeight: 'bold',
            },
            headerTintColor: COLORS.white,
          }}
        />
        <Stack.Screen
          name="AllFestividadesScreen"
          component={AllFestividadesScreen}
          options={{
            title: 'Festividades de la zona',
            headerStyle: {backgroundColor: COLOR_PRIMARY},
            headerTitleStyle: {
              color: COLORS.white,
              fontSize: 22,
              fontWeight: 'bold',
            },
            headerTintColor: COLORS.white,
          }}
        />
        <Stack.Screen
          name="AllGobiernoScreen"
          component={AllGobiernoScreen}
          options={{
            title: 'Establecimientos de gobierno',
            headerStyle: {backgroundColor: COLOR_PRIMARY},
            headerTitleStyle: {
              color: COLORS.white,
              fontSize: 20,
              fontWeight: 'bold',
            },
            headerTintColor: COLORS.white,
          }}
        />
        <Stack.Screen
          name="AllHotelesScreen"
          component={AllHotelesScreen}
          options={{
            title: 'Hoteles de la zona',
            headerStyle: {backgroundColor: COLOR_PRIMARY},
            headerTitleStyle: {
              color: COLORS.white,
              fontSize: 22,
              fontWeight: 'bold',
            },
            headerTintColor: COLORS.white,
          }}
        />
        <Stack.Screen
          name="AllMercadosScreen"
          component={AllMercadosScreen}
          options={{
            title: 'Mercados de la zona',
            headerStyle: {backgroundColor: COLOR_PRIMARY},
            headerTitleStyle: {
              color: COLORS.white,
              fontSize: 22,
              fontWeight: 'bold',
            },
            headerTintColor: COLORS.white,
          }}
        />
        <Stack.Screen
          name="AllPersonajesImportantesScreen"
          component={AllPersonajesImportantesScreen}
          options={{
            title: 'Personajes celebres',
            headerStyle: {backgroundColor: COLOR_PRIMARY},
            headerTitleStyle: {
              color: COLORS.white,
              fontSize: 22,
              fontWeight: 'bold',
            },
            headerTintColor: COLORS.white,
          }}
        />
        <Stack.Screen
          name="AllPlatilosScreen"
          component={AllPlatilosScreen}
          options={{
            title: 'Platillos tradicionales',
            headerStyle: {backgroundColor: COLOR_PRIMARY},
            headerTitleStyle: {
              color: COLORS.white,
              fontSize: 22,
              fontWeight: 'bold',
            },
            headerTintColor: COLORS.white,
          }}
        />
        <Stack.Screen
          name="AllReseniasScreen"
          component={AllReseniasScreen}
          options={{
            title: 'Reseñas',
            headerStyle: {backgroundColor: COLOR_PRIMARY},
            headerTitleStyle: {
              color: COLORS.white,
              fontSize: 22,
              fontWeight: 'bold',
            },
            headerTintColor: COLORS.white,
          }}
        />
        <Stack.Screen
          name="AllRestaurantesScreen"
          component={AllRestaurantesScreen}
          options={{
            title: 'Restaurantes de la zona',
            headerStyle: {backgroundColor: COLOR_PRIMARY},
            headerTitleStyle: {
              color: COLORS.white,
              fontSize: 22,
              fontWeight: 'bold',
            },
            headerTintColor: COLORS.white,
          }}
        />
        <Stack.Screen
          name="AllSuperMercadosScreen"
          component={AllSuperMercadosScreen}
          options={{
            title: 'Supermercados de la zona',
            headerStyle: {backgroundColor: COLOR_PRIMARY},
            headerTitleStyle: {
              color: COLORS.white,
              fontSize: 22,
              fontWeight: 'bold',
            },
            headerTintColor: COLORS.white,
          }}
        />
        <Stack.Screen
          name="AllTransportesScreen"
          component={AllTransportesScreen}
          options={{
            title: 'Transportes de la zona',
            headerStyle: {backgroundColor: COLOR_PRIMARY},
            headerTitleStyle: {
              color: COLORS.white,
              fontSize: 22,
              fontWeight: 'bold',
            },
            headerTintColor: COLORS.white,
          }}
        />
        <Stack.Screen
          name="AllZonasTuristicasScreen"
          component={AllZonasTuristicasScreen}
          options={{
            title: 'Zonas Turísticas',
            headerStyle: {backgroundColor: COLOR_PRIMARY},
            headerTitleStyle: {
              color: COLORS.white,
              fontSize: 22,
              fontWeight: 'bold',
            },
            headerTintColor: COLORS.white,
          }}
        />

        <Stack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{headerShown: false, title: 'AuthScreen'}}
        />
        <Stack.Screen name="Agenda" component={NotaScreen} />
        <Stack.Screen
          name="EstablecimientoProScreen"
          component={BottonNavigation}
          options={{headerShown: false, title: 'EstablecimientoProScreen'}}
        />
        <Stack.Screen
          name="DetailsPlaceScreen"
          component={DetailsPlaceScreen}
          options={{headerShown: false, title: 'DetailsPlaceScreen'}}
        />
        <Stack.Screen
          name="DetailsPlaceDishScreen"
          component={DetailsPlaceDishScreen}
          options={{headerShown: false, title: 'DetailsPlaceDishScreen'}}
        />
        <Stack.Screen
          name="DetailsPlaceFestivityScreen"
          component={DetailsPlaceFestivityScreen}
          options={{headerShown: false, title: 'DetailsPlaceFestivityScreen'}}
        />
        <Stack.Screen
          name="DetailsPlaceImportantPeopleScreen"
          component={DetailsPlaceImportantPeopleScreen}
          options={{
            headerShown: false,
            title: 'DetailsPlaceImportantPeopleScreen',
          }}
        />
        <Stack.Screen
          name="DetailsNotasCiudadScreen"
          component={DetailsNotasCiudadScreen}
          options={{
            headerShown: false,
            title: 'DetailsNotasCiudadScreen',
          }}
        />
        <Stack.Screen
          name="DetailsPlaceTouristAreaScreen"
          component={DetailsPlaceTouristAreaScreen}
          options={{
            headerShown: false,
            title: 'DetailsPlaceTouristAreaScreen',
          }}
        />
        <Stack.Screen
          name="DetailsPlaceServiceRestaurantScreen"
          component={DetailsPlaceServiceRestaurantScreen}
          options={{
            headerShown: false,
            title: 'DetailsPlaceServiceRestaurantScreen',
          }}
        />
        <Stack.Screen
          name="DetailsPlaceServiceHotelScreen"
          component={DetailsPlaceServiceHotelScreen}
          options={{
            headerShown: false,
            title: 'DetailsPlaceServiceHotelScreen',
          }}
        />
        <Stack.Screen
          name="DetailsPlaceServiceTransportScreen"
          component={DetailsPlaceServiceTransportScreen}
          options={{
            headerShown: false,
            title: 'DetailsPlaceServiceTransportScreen',
          }}
        />
        <Stack.Screen
          name="DetailsPlaceServiceMarketScreen"
          component={DetailsPlaceServiceMarketScreen}
          options={{
            headerShown: false,
            title: 'DetailsPlaceServiceMarketScreen',
          }}
        />
        <Stack.Screen
          name="DetailsPlaceServiceBankScreen"
          component={DetailsPlaceServiceBankScreen}
          options={{
            headerShown: false,
            title: 'DetailsPlaceServiceBankScreen',
          }}
        />
        <Stack.Screen
          name="DetailsPlaceServiceGovernmentScreen"
          component={DetailsPlaceServiceGovernmentScreen}
          options={{
            headerShown: false,
            title: 'DetailsPlaceServiceGovernmentScreen',
          }}
        />
        <Stack.Screen
          name="DetailsPlaceServiceSupermarketScreen"
          component={DetailsPlaceServiceSupermarketScreen}
          options={{
            headerShown: false,
            title: 'DetailsPlaceServiceSupermarketScreen',
          }}
        />
        <Stack.Screen
          name="DetailsPlaceServiceShopScreen"
          component={DetailsPlaceServiceShopScreen}
          options={{
            headerShown: false,
            title: 'DetailsPlaceServiceShopScreen',
          }}
        />

        <Stack.Screen
          name="PlaceServiceScreen"
          component={PlaceServiceScreen}
          options={{
            title: 'Servicios',
            headerStyle: {backgroundColor: COLOR_PRIMARY},
            headerTitleStyle: {
              color: COLORS.white,
              fontSize: 22,
              fontWeight: 'bold',
            },
            headerTintColor: COLORS.white,
          }}
        />
        <Stack.Screen
          name="PlaceAboutZoneScreen"
          component={PlaceAboutZoneScreen}
          options={{
            title: 'Acerca de la Zona',
            headerStyle: {backgroundColor: COLOR_PRIMARY},
            headerTitleStyle: {
              color: COLORS.white,
              fontSize: 22,
              fontWeight: 'bold',
            },
            headerTintColor: COLORS.white,
          }}
        />
        <Stack.Screen
          name="AgendaFormScreen"
          component={AgendaFormScreen}
          options={{
            title: 'Crear nueva nota',
            headerStyle: {backgroundColor: COLOR_PRIMARY},
            headerTitleStyle: {
              color: COLORS.white,
              fontSize: 22,
              fontWeight: 'bold',
            },
            headerTintColor: COLORS.white,
          }}
        />
        <Stack.Screen
          name="Root"
          component={BottonNavigation}
          options={{headerShown: false, title: 'Root'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
