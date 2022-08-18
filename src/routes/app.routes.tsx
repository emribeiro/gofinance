import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Home } from '../pages/Home';
import { Registro } from '../pages/Registro';

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes(){

    return (
        <Navigator>
            <Screen 
                name="Home"
                component={Home}
            />
            <Screen 
                name="Cadastrar"
                component={Registro}
            />
            <Screen 
                name="Resumo"
                component={Registro}
            />

        </Navigator>

    );

}