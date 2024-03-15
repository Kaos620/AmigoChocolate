import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack";
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useForm, Controller } from "react-hook-form";

const Login = () => {
    const navigation = useNavigation<StackTypes>();
    const { control, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = handleSubmit((data) => {
        if (!errors.email && !errors.password) {
            navigation.navigate('Home');
        }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
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
                rules={{ required: 'Email obrigatório', min: 10}}
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
                rules={{ required: 'Senha obrigatória' }}
            />
            {errors.password && <Text style = {styles.error} >{errors.password.message}</Text>}

            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
};
export default Login;

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
