import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';


import DrawerContent from './components/DrawerContent';
import { Login, Register } from 'Auth';
import Inicio from '../pages/Inicio/Inicio';


const transitionConfig = () => ({
    transitionSpec: {
        duration: 500
    },

    screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;
        const width = layout.initWidth;

        const inputRange = [index - 1, index, index + 1];

        const opacity = position.interpolate({
            inputRange,
            outputRange: ([0, 1, 0]),
        });

        const translateX = position.interpolate({
            inputRange,
            outputRange: ([width, 0, 0]),
        });

        return {
            opacity,
            transform: [
                { translateX }
            ],
        };

    }
});


const HomeScreen = createStackNavigator(
    {
        Inicio: Inicio
    },
    {
        initialRouteName: "Inicio",
        transitionConfig: transitionConfig,
        headerMode: 'none',

    },



)


const DrawerScreen = createDrawerNavigator(
    {
        //Notificaciones
        HomeScreen: {
            screen: HomeScreen,
        },
    },
    {
        initialRouteName: "HomeScreen",
        contentComponent: DrawerContent,
        useNativeAnimations: true,

    }
);



const MainScreen = createStackNavigator(
    {
        Login: Login,
        Register: Register,
        Drawer : DrawerScreen
    },
    {
        initialRouteName: "Login",
        transitionConfig: transitionConfig,
        headerMode: 'none',
    }
)


const AppContainer = createAppContainer(MainScreen);

export default AppContainer;