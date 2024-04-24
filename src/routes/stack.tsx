import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import Home from '../screens/home/index';
import Login from '../screens/login';
import Register from '../screens/registerUser';
import RecoverPassword from '../screens/recoverPassword';
import RegistrationGroup from '../screens/RegisterGroup';

const Stack = createNativeStackNavigator();
type StackNavigation = {
    Home: undefined;
    Login: undefined;
    Register: undefined;
    RecoverPassword: undefined;
    RegistrationGroup: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>

export default function StackComponent() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "Login" component = {Login} options={{headerShown: false }}/>
                <Stack.Screen name = "Register" component = {Register} options={{headerShown: false }}/>
                <Stack.Screen name = "Home" component = {Home}  options={{headerShown: false }}/>
                <Stack.Screen name = "RecoverPassword" component = {RecoverPassword} options={{headerShown: false }}/>
                <Stack.Screen name = "RegistrationGroup" component ={RegistrationGroup} options={{headerShown: false }}/>           
            </Stack.Navigator>
        </NavigationContainer>
    )
}