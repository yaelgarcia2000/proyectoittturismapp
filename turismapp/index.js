/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import UserProvider from './src/context/user';
import {Navigation} from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {name as appName} from './app.json';

const Main = () => {
  return (
    <UserProvider>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </UserProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
