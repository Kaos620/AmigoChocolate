import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack";
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
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
        
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
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
                rules={{ required: 'Nome Completo obrigatório', }}
            />
            {errors.name && <Text style = {styles.error} >{errors.name.message}</Text>}

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
                rules={{ required: 'Email obrigatório', }}
            />
            {errors.email && <Text style = {styles.error} >{errors.email.message}</Text>}

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
                rules={{ required: true }}
            />
            {errors.password && <Text style = {styles.error} >{errors.password.message}</Text>}

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
                rules={{ required: 'Senha obrigatória' ,
                validate: value => value === password.current || "As senhas não coincidem"}}
            />
            {errors.passwordConfirmation && <Text style = {styles.error} >{errors.passwordConfirmation.message}</Text>}

            <TouchableOpacity onPress={handleRegister} style={styles.button}>
                <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
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
        fontSize: 20,
        marginBottom: 20,
        color: 'yellow',
    },

    textInput: {
        width: '20%',
        height: 30,
        padding: 15,
        borderWidth: 1,
        borderRadius: 3,
        margin: 5,
        borderColor: 'grey',
        backgroundColor: 'white'
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '15%',
        borderRadius: 5,
        height: 30,
        backgroundColor: 'blue'
    },

    buttonText: {
        color: 'white',
    },

    error: {
        color: 'red'
    }
});
