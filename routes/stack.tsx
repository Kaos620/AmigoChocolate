import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import Home from '../screens/home'
import Login from '../screens/login'

const Stack = createNativeStackNavigator();

type StackNavigation = {
    Home: undefined;
    Login: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>

export default function StackComponent() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "Login" component= {Login}/>
                <Stack.Screen name = "Home" component = {Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}