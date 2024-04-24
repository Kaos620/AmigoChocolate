import React, {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack";
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Pressable, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import axios, {AxiosResponse} from "axios";
import { useForm, Controller } from "react-hook-form";
import * as ImagePicker from 'expo-image-picker';
import { IGroup } from '../../types/types';

const RegistrationGroup = () => {
    const navigation = useNavigation<StackTypes>();
    const [image, setImage] = useState('');    
    const { control, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm<IGroup>({
        defaultValues: {
            image: '',
            groupName: '',
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

const handleRegisterGroup = ( async (data: IGroup) => {
    
    
    data.image = image;
    console.log("FOTO", data.image)
    try {
        const resposta = await axios.post(
            'http://localhost:3000/Grupo', {
                groupName: data.groupName,
                image: data.image
            });
            
            navigation.navigate('Home');
        } catch (err) {
            console.log("Erro ao enviar os dados: ", err);
        }
        
    });
    
    return (
        
        <ImageBackground source={require('../../../assets/background.jpg')} style={styles.container}>
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
                        placeholder="Nome do Grupo"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="groupName"
                rules={{ required: 'Nome do Grupo Obrigatório ', }}
            />
            {errors.groupName && <Text style={styles.error}>{errors.groupName.message}</Text>}

            <TouchableOpacity onPress={handleSubmit(handleRegisterGroup)} style={styles.button}>
                <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </ImageBackground>
    );
};
export default RegistrationGroup;

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
        color: 'yellow',
        alignSelf: 'flex-start',
        marginLeft: '15%',
        marginBottom: 5,
    },
});
