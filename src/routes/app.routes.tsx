import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Home } from '../pages/Home';
import { Registro } from '../pages/Registro';
import { useTheme } from 'styled-components';
import Feather from '@expo/vector-icons/Feather';
import { Platform } from 'react-native';

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes(){
    const theme = useTheme();
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.secondary,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarLabelPosition: 'beside-icon',
                tabBarLabelStyle: {
                    fontFamily: theme.fonts.regular
                },
                tabBarStyle: {
                    height: 88,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0, 
                }
            }}
        >
            <Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: (({color, size}) => 
                        <Feather 
                            name='home'
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Screen 
                name="Cadastrar"
                component={Registro}
                options={{
                    tabBarIcon: (({color, size}) => 
                        <Feather 
                            name='dollar-sign'
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Screen 
                name="Resumo"
                component={Registro}
                options={{
                    tabBarIcon: (({color, size}) => 
                        <Feather 
                            name='pie-chart'
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

        </Navigator>

    );

}