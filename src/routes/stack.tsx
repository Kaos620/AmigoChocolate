import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/index';
import Login from '../screens/login';
import Register from '../screens/registerUser';
import RecoverPassword from '../screens/recoverPassword';
import RegistrationGroup from '../screens/RegisterGroup';
import CardView from '../screens/cardView/cardView';
import { IGroup } from '../types/types';

type StackNavigation = {
    Home: undefined;
    Login: undefined;
    Register: undefined;
    RecoverPassword: undefined;
    RegistrationGroup: undefined;
    CardView: { groupId: number };
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export type CardViewRouteProp = RouteProp<StackNavigation, 'CardView'>;

const Stack = createNativeStackNavigator<StackNavigation>();

export default function StackComponent() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="RecoverPassword" component={RecoverPassword} options={{ headerShown: false }} />
                <Stack.Screen name="RegistrationGroup" component={RegistrationGroup} options={{ headerShown: false }} />
                <Stack.Screen name="CardView" component={CardView} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
