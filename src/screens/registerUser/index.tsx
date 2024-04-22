import React, {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack";
import { Text, View, TouchableOpacity, TextInput, ImageBackground, Image, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useForm, Controller } from "react-hook-form";
import * as ImagePicker from 'expo-image-picker';
import { UserService } from '../../service/UserService/userService';
import {User} from '../../types/types'
import { stylesRegister } from './styles';

const Register = () => {
    const navigation = useNavigation<StackTypes>();
    const { control, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm();
    
    const password = React.useRef({});
    password.current = watch("password", "");

    const [image, setImage] = useState('');
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

    
    const handleRegister = handleSubmit(async (data) => {
        try {
            if (Object.keys(errors).length === 0 ) {
                const user: User = {
                    photo: data.photo,
                    fullName: data.fullName,
                    email: data.email,
                    password: data.password, // Defina a senha como necessário
                };
                navigation.navigate('Login');
            }

        } catch (error){
            console.error('Erro ao registrar', error);
        }
    });

    return (
        
        <ImageBackground source={require('../../../assets/background.jpg')} style={stylesRegister.container}>
            <Text style={stylesRegister.title}>ChocoAmigo Registrar</Text>
            
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={stylesRegister.textInput}
                        placeholder="Nome Completo"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="fullName"
                rules={{ required: 'Nome Completo Obrigatório ', }}
            />
            {errors.fullName && <Text style={stylesRegister.error}>{errors.fullName.message}</Text>}

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={stylesRegister.textInput}
                        placeholder="Email"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="email"
                rules={{ required: 'Email Obrigatório ', }}
            />
            {errors.email && <Text style={stylesRegister.error}>{errors.email.message}</Text>}

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={stylesRegister.textInput}
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
            {errors.password && <Text style={stylesRegister.error}>{errors.password.message}</Text>}

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={stylesRegister.textInput}
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
            {errors.passwordConfirmation && <Text style={stylesRegister.error}>{errors.passwordConfirmation.message}</Text>}

            <TouchableOpacity onPress={handleRegister} style={stylesRegister.button}>
                <Text style={stylesRegister.buttonText}>Registrar</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </ImageBackground>
    );
};
export default Register;


