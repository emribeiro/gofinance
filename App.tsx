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
import { StatusBar } from 'react-native';
import { SignIn } from './src/pages/SignIn';
import { AuthProvider } from './src/hooks/auth';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular
                                 , Poppins_500Medium
                                 , Poppins_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      { fontsLoaded ? 
          // <AppRoutes /> 
          <AuthProvider >
            <Routes />
          </AuthProvider>
        : <AppLoading />}
    </ThemeProvider>
  );
}