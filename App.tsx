import React from 'react';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import { ThemeProvider } from 'styled-components';

import { useFonts
       , Poppins_400Regular
       , Poppins_500Medium
       , Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

import theme from './src/global/theme';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular
                                 , Poppins_500Medium
                                 , Poppins_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        {fontsLoaded ? <AppRoutes /> : <AppLoading />}
      </NavigationContainer>
    </ThemeProvider>
  );
}