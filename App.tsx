import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

import { NavigationContainer, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';

import { BottomNavigation, DarkTheme as PaperDarkTheme, Provider as PaperProvider } from 'react-native-paper';
import { RootNavigator } from './components/navigator/RootNavigator';

export default function App() {
  const state = {
    index: 0,
    routes: [
        { key: 'albums', title: 'Albums', icon: 'album' },
        { key: 'recents', title: 'Recents', icon: 'history' },
    ],
  };
  return (
    <SafeAreaProvider>
      <StatusBar/>
      <PaperProvider theme={PaperDarkTheme}>
        <NavigationContainer theme={NavigationDarkTheme}>
          <RootNavigator/>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}