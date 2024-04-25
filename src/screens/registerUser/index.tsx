import React, {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack";
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Pressable, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import axios, {AxiosResponse} from "axios";
import { useForm, Controller } from "react-hook-form";
import * as ImagePicker from 'expo-image-picker';
import { IUser } from '../../types/types';

const Register = () => {
    const navigation = useNavigation<StackTypes>();
    const [image, setImage] = useState('');    
    const { control, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm<IUser>({
        defaultValues: {
            photo: '',
            fullName: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        }
});


const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
        setImage(result.assets[0].uri);
    }
}

    const password = React.useRef({});
    password.current = watch("password", "");

    const handleRegister = ( async (data: IUser) => {
        data.photo = image;
        console.log("FOTO", data.photo)
            try {
                const resposta = await axios.post(
                'http://localhost:3000/User', {
                fullName: data.fullName,
                email: data.email,
                password: data.password,                     
                photo: data.photo
                });
            } catch (err) {
                console.log("Erro ao enviar os dados: ", err);
            }
            navigation.navigate('Login');
    });



    return (
        
        <ImageBackground source={require('../../../assets/chocoracao.png')} style={styles.container}>
            <Text style={styles.title}>ChocoAmigo Registrar</Text>

            <Pressable style = {styles.button} onPress={pickImage}>
                <Text style = {styles.buttonText}>Escolher foto</Text>
            </Pressable>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

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

    error: {
        color: 'yellow',
        alignSelf: 'flex-start',
        marginLeft: '15%',
        marginBottom: 5,
    },
});
