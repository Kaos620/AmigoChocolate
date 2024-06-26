import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { UserService } from '../../service/UserService/userService'
import { StackTypes } from "../../routes/stack";
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useForm, Controller } from "react-hook-form";
import { ILogin } from '../../types/types';
import { Ionicons } from '@expo/vector-icons';

const Login = () => {
    const navigation = useNavigation<StackTypes>();
    const { control, handleSubmit, formState: { errors } } = useForm<ILogin>();
    const [usernameError, setUsernameError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const userService = new UserService();

    const handleLogin = handleSubmit(async (data: ILogin) => {
        if (Object.keys(errors).length === 0 ) {
            if (!data.email || !data.password) {
                setUsernameError(true);
                console.log("caiu no verdadeiro", setUsernameError);
            } else {
                setUsernameError(false);
                console.log("caiu no falso", setUsernameError);
            }

            const isValid = await userService.validateUser(data.email, data.password);
            if (isValid) {
                console.log("Caiu no Is Valid IF", isValid);
                navigation.navigate('Home');
            } else {
                console.log("Caiu no Is Valid Else", isValid);
                //alert('Usuário e/ou senha inválidos');
            }
        }
    });

    const handleGoRegister = () => {
        navigation.navigate('Register');
    };

    const handleGoRecover = () => {
        navigation.navigate('RecoverPassword');
    };

    return (
        <ImageBackground source={require('../../../assets/chocoracao.png')} style={styles.container}>
            <Text style={styles.title}>ChocoAmigo</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="email"
                rules={{ required: 'Email Obrigatório' }}
            />
            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

            <View style={styles.passwordContainer}>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.textInputPassword}
                            placeholder="Senha"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            secureTextEntry={!showPassword}
                        />
                    )}
                    name="password"
                    rules={{ required: 'Senha Obrigatória' }}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                    <Ionicons
                        name={showPassword ? "eye-sharp" : "eye-off-sharp"}
                        size={24}
                        color="black"
                    />
                </TouchableOpacity>
            </View>
            {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
            
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleGoRegister}>
                <Text style={styles.link}>Registrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleGoRecover}>
                <Text style={styles.link}>Recuperar Senha</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </ImageBackground>
    );
};
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: "cover",
        width: "100%",
        height: "100%",
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
        color: '#F5F5DC', /* Bege Claro */
        fontWeight: 'bold',
        padding: 20,
        bottom: 80
    },
    textInput: {
        width: '80%',
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 5,
        borderColor: '#5C3317', /* Marrom Chocolate */
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    textInputPassword: {
        flex: 1,
        height: '100%',
        padding: 10,
        borderWidth: 0,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        textAlign: 'left',
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#5C3317', /* Marrom Chocolate */
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        marginVertical: 5,
        paddingHorizontal: 10,
    },
    eyeIcon: {
        marginLeft: -30,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        borderRadius: 5,
        borderColor: '#F5F5DC', /* Bege Claro */
        height: 40,
        backgroundColor: '#5C3317', /* Marrom Chocolate */
        marginVertical: 10,
        borderWidth: 1,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    link: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginVertical: 5,
    },
    error: {
        color: 'yellow',
        alignSelf: 'flex-start',
        marginLeft: '15%',
        marginBottom: 5,
    },
});
