import React, {useContext} from 'react';
import {UserContext} from '../context/user';
import {LoginScreeen} from '../screen/Login';
import {Profile} from '../screen/Profile';
import {NotaScreen} from '../screen/NotaScreen';
import {PlaceScreen} from '../screen/PlaceScreen';
import {DetailsPlaceScreen} from '../screen/DetailsPlaceScreen';
import {DetailsPlaceDishScreen} from '../screen/DetailsPlaceDishScreen';
import {DetailsPlaceFestivityScreen} from '../screen/DetailsPlaceFestivityScreen';
import {DetailsPlaceImportantPeopleScreen} from '../screen/DetailsPlaceImportantPeopleScreen';
//import {DetailsPlaceReviewScreen} from '../screen/DetailsPlaceReviewScreen';
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
        {/*<Stack.Screen
          name="DetailsPlaceReviewScreen"
          component={DetailsPlaceReviewScreen}
          options={{
            headerShown: false,
            title: 'DetailsPlaceReviewScreen',
          }}
        />*/}
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
