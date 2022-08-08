import React from 'react';
import { ThemeProvider } from 'styled-components';

import { useFonts
       , Poppins_400Regular
       , Poppins_500Medium
       , Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

import { Home } from './src/pages/Home';
import theme from './src/global/theme';
import { Registro } from './src/pages/Registro';

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular
                                 , Poppins_500Medium
                                 , Poppins_700Bold});

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Registro /> : <AppLoading />}
    </ThemeProvider>
  );
}