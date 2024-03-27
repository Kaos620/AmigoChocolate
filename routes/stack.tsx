import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import Home from '../screens/home'
import Login from '../screens/login'
import Register from '../screens/registerUser'
import RecoverPassword from '../screens/recoverPassword'

const Stack = createNativeStackNavigator();

type StackNavigation = {
    Home: undefined;
    Login: undefined;
    Register: undefined;
    RecoverPassword: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>

export default function StackComponent() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "Login" component= {Login}/>
                <Stack.Screen name = "Register" component={Register}/>
                <Stack.Screen name = "Home" component = {Home} />
                <Stack.Screen name = "RecoverPassword" component={RecoverPassword}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}