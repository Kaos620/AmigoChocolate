import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { UserService } from '../../service/UserService/userService'
import { StackTypes } from "../../routes/stack";
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useForm, Controller } from "react-hook-form";

const Login = () => {
    const navigation = useNavigation<StackTypes>();
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [usernameError, setUsernameError] = useState(false);

    const userService = new UserService();

    const handleLogin = async () => {
        if (Object.keys(errors).length === 0){
            
            if (!email) {
              setUsernameError(true);
            } else {
                setUsernameError(false);
            }
      
        }
        const isValid = await userService.validateUser(email, password);
        if (Object.keys(errors).length === 0 && isValid) {
          setEmail('');
          setPassword('');
          navigation.navigate('Home');
        } else {
          alert('Usuário e/ou senha inválidos');
          return false;
        }
    }

    const handleGoRegister = (() => {
        navigation.navigate('Register');
    });

    const handleGoRecover = (() => {
        navigation.navigate('RecoverPassword');
    });

    return (
        <ImageBackground source={require('../../../assets/background.jpg')} style={styles.container}>
            <Text style={styles.title}>ChocoAmigo Login</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur } }) => (
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        onBlur={onBlur}
                        onChangeText={setEmail}
                        value={email as string}
                    />
                )}
                name="email"
                rules={{ required: 'Email Obrigatório ', }}
            />
            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

            <Controller
                control={control}
                render={({ field: { onChange, onBlur } }) => (
                    <TextInput
                        style={styles.textInput}
                        placeholder="Senha"
                        onBlur={onBlur}
                        onChangeText={setPassword}
                        value={password as string}
                        secureTextEntry
                    />
                )}
                name="password"
                rules={{ required: 'Senha Obrigatória ' }}
                />
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
        color: 'white',
        fontWeight: 'bold',
    },

    textInput: {
        width: '70%',
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 5,
        borderColor: 'brown',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        borderRadius: 5,
        height: 40,
        backgroundColor: 'brown',
        marginVertical: 10,
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
