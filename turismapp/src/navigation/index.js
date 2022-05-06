import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {EstablecimientoProScreen} from '../screen/EstablecimientoProScreen';
import {EstablecimientoScreen} from '../screen/EstablecimientoScreen';
import {NewScreen} from '../screen/NewScreen';
import {NotaScreen} from '../screen/NotaScreen';
import {PlaceScreen} from '../screen/PlaceScreen';
import {DetailsPlaceScreen} from '../screen/DetailsPlaceScreen';
import {ReseniaScreen} from '../screen/ReseniaScreen';
import {HomeScreen} from '../screen/HomeScreen';
import {AgendaFormScreen} from '../screen/AgendaFormScreen';
import {PlaceServiciosScreen} from '../screen/PlaceServiciosScreen';
import {WelcomeScreen} from '../screen/WelcomeScreen';
import {BottonNavigation} from './bottom';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import COLORS, {COLOR_PRIMARY} from '../utils/paleta';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{headerShown: false, title: 'WelcomeScreen'}}
        />
        <Stack.Screen
          name="Root"
          component={BottonNavigation}
          options={{headerShown: false, title: 'Root'}}
        />
        <Stack.Screen
          name="DetailsPlaceScreen"
          component={DetailsPlaceScreen}
          options={{headerShown: false, title: 'DetailsPlaceScreen'}}
        />
        <Stack.Screen
          name="PlaceScreen"
          component={PlaceScreen}
          options={{headerShown: false, title: 'PlaceScreen'}}
        />
        <Stack.Screen
          name="EstablecimientoProScreen"
          component={BottonNavigation}
          options={{headerShown: false, title: 'EstablecimientoProScreen'}}
        />
        <Stack.Screen name="Agenda" component={NotaScreen} />
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
          name="PlaceServiciosScreen"
          component={PlaceServiciosScreen}
          options={{headerShown: false, title: 'PlaceServiciosScreen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
