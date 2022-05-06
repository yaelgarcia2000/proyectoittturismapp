/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {Navigation} from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {name as appName} from './app.json';

const Main = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
