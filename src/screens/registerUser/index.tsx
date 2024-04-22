import React, {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack";
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import axios, {AxiosResponse} from "axios";
import { useForm, Controller } from "react-hook-form";
import { IUser } from '../../types/types';

const Register = () => {
    const navigation = useNavigation<StackTypes>();
    const [newImage, setNewImage] = useState('');    
    const { control, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm<IUser>({
        defaultValues: {
            photo: '',
            fullName: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        }
});

    const password = React.useRef({});
    password.current = watch("password", "");

    const handleRegister = ( async (data: IUser) => {
        if (Object.keys(errors).length === 0 ) {
            data.photo = newImage;
            }  else {
                try {
                    const resposta = await axios.post(
                        'http://localhost:3000/User', {
                            photo: data.photo,
                            fullName: data.fullName,
                            email: data.email,
                            password: data.password                     
                    });
        
                    if (resposta.status === 200) {
                        navigation.navigate('Login');
                    }
                } catch (err) {
                    console.log("Erro ao enviar os dados: ", err);
                }
        }
    }
);



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
                name="fullName"
                rules={{ required: 'Nome Completo Obrigatório ', }}
            />
            {errors.fullName && <Text style={styles.error}>{errors.fullName.message}</Text>}

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

            <TouchableOpacity onPress={handleSubmit(handleRegister)} style={styles.button}>
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
