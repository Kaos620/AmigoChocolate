import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack";
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useForm, Controller } from "react-hook-form";

const Register = () => {
    const navigation = useNavigation<StackTypes>();
    const { control, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm();

    const password = React.useRef({});
    password.current = watch("password", "");

    const handleRegister = handleSubmit((data) => {
        if (Object.keys(errors).length === 0 ) {
            navigation.navigate('Login');
        }
    });

    return (
        
        <ImageBackground source={require('../../../assets/background.jpg')} style={styles.container}>
            <Text style={styles.title}>ChocoAmigo Registrar</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.textInput}
                        placeholder="Nome Completo"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="name"
                rules={{ required: 'Nome Completo Obrigatório ', }}
            />
            {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

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
                rules={{ required: 'Email Obrigatório ', }}
            />
            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.textInput}
                        placeholder="Senha"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        secureTextEntry
                    />
                )}
                name="password"
                rules={{ required: 'Senha Obrigatória ' }}
            />
            {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.textInput}
                        placeholder="Confirmar Senha"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        secureTextEntry
                    />
                )}
                name="passwordConfirmation"
                rules={{ required: 'Confirmação de Senha Obrigatória',
                         validate: value => value === password.current || "As senhas não coincidem "}}
            />
            {errors.passwordConfirmation && <Text style={styles.error}>{errors.passwordConfirmation.message}</Text>}

            <TouchableOpacity onPress={handleRegister} style={styles.button}>
                <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </ImageBackground>
    );
};
export default Register;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        width: '40%',
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

    error: {
        color: 'red',
        alignSelf: 'flex-start',
        marginLeft: '15%',
        marginBottom: 5,
    },
});
