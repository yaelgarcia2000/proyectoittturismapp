import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import New from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import COLORS, {COLOR_PRIMARY} from '../utils/paleta';
import {HomeScreen} from '../screen/HomeScreen'; // Inicio
import {PlaceScreen} from '../screen/PlaceScreen'; // Lugares
import {EstablecimientoProScreen} from '../screen/EstablecimientoProScreen'; // Negocios
import {NewScreen} from '../screen/NewScreen'; // Noticias
import {NotaScreen} from '../screen/NotaScreen'; // Agenda

const Tab = createBottomTabNavigator();

export const BottonNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="HomeScreen">
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => <TabBarIcon name="home" color={color} />,
          headerShown: false,
          title: 'Inicio',
        }}
      />
      <Tab.Screen
        name="PlaceScreen"
        component={PlaceScreen}
        options={{
          tabBarIcon: ({color}) => <TabBarIcon name="map" color={color} />,
          headerShown: false,
          title: 'Lugares',
        }}
      />
      <Tab.Screen
        name="EstablecimientoProScreen"
        component={EstablecimientoProScreen}
        options={{
          tabBarIcon: ({color}) => <TabBarIcon name="building" color={color} />,
          headerShown: false,
          title: 'Negocios',
        }}
      />
      <Tab.Screen
        name="NewScreen"
        component={NewScreen}
        options={{
          tabBarIcon: ({color}) => (
            <TabBarIcon name="newspaper-o" color={color} />
          ),
          headerShown: false,
          title: 'Noticias',
        }}
      />
      <Tab.Screen
        name="NotaScreen"
        component={NotaScreen}
        options={({navigation}) => ({
          tabBarIcon: ({color}) => (
            <TabBarIcon name="sticky-note" color={color} />
          ),
          title: 'Agenda',
          headerStyle: {backgroundColor: COLOR_PRIMARY},
          headerTitleStyle: {
            color: COLORS.white,
            fontSize: 30,
            fontWeight: 'bold',
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('AgendaFormScreen')}>
              <Text
                style={{color: COLORS.white, marginRight: 25, fontSize: 18}}>
                Nuevo
              </Text>
            </TouchableOpacity>
          ),
        })}
      />
    </Tab.Navigator>
  );
};

function TabBarIcon({name, color}) {
  return <New size={30} style={{marginBottom: -3}} name={name} color={color} />;
}
