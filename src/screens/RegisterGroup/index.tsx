import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack";
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Pressable, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import * as ImagePicker from 'expo-image-picker';
import { IGroup } from '../../types/types';
import DateTimePicker from '@react-native-community/datetimepicker';

const RegistrationGroup = () => {
    const navigation = useNavigation<StackTypes>();
    const [image, setImage] = useState('');    
    const { control, handleSubmit, formState: { errors }, watch } = useForm<IGroup>({
        defaultValues: {
            image: '',
            groupName: '',
            groupDescription: '',
            chocolateValue: '',
            groupMembersNum: '',
            revealDate: ''
        }
    });
    
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }

    const handleRegisterGroup = async (data: IGroup) => {
        data.image = image;
        try {
            await axios.post('http://localhost:3000/Grupo', {
                groupName: data.groupName,
                image: data.image,
                groupDescription: data.groupDescription,
                chocolateValue: data.chocolateValue,
                groupMembersNum: data.groupMembersNum,
                revealDate: data.revealDate
            });
            navigation.navigate('Home');
        } catch (err) {
            console.log("Erro ao enviar os dados: ", err);
        }
    };

    const showDatepicker = () => {
        setShow(true);
    };

    return (
        <ImageBackground source={require('../../../assets/chocoracao.png')} style={styles.container}>
            <Text style={styles.title}>ChocoAmigo Registrar</Text>

            <Pressable style={styles.button} onPress={pickImage}>
                <Text style={styles.buttonText}>Escolher foto</Text>
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
                rules={{ required: 'Nome do Grupo Obrigatório', }}
            />
            {errors.groupName && <Text style={styles.error}>{errors.groupName.message}</Text>}

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.textInput}
                        placeholder="Descrição do Grupo"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="groupDescription"
                rules={{ required: 'Descrição do Grupo Obrigatória', }}
            />
            {errors.groupDescription && <Text style={styles.error}>{errors.groupDescription.message}</Text>}

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.textInputSmall}
                        placeholder="Valor do Chocolate"
                        onBlur={onBlur}
                        onChangeText={(text) => onChange(text.replace(',', '.').replace(/[^\d.]/g, ''))}
                        value={value}
                        keyboardType='numeric'
                    />
                )}
                name="chocolateValue"
                rules={{ required: 'Valor do Chocolate Obrigatório', }}
            />
            {errors.chocolateValue && <Text style={styles.error}>{errors.chocolateValue.message}</Text>}

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.textInputSmall}
                        placeholder="Qtd. Membros"
                        onBlur={onBlur}
                        onChangeText={(text) => onChange(text.replace(/[^0-9]/g, ''))}
                        value={value}
                        keyboardType='numeric'
                    />
                )}
                name="groupMembersNum"
                rules={{ required: 'Quantidade de Membros Obrigatório', }}
            />
            {errors.groupMembersNum && <Text style={styles.error}>{errors.groupMembersNum.message}</Text>}

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View>
                        <TextInput
                            style={styles.textInputSmall}
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            maxLength={10}
                            placeholder="dd/mm/aaaa"
                            keyboardType='numeric'
                        />
                    </View>
                )}
                name="revealDate"
                rules={{ required: 'Data de Revelação Obrigatória', }}
            />
            {errors.revealDate && <Text style={styles.error}>{errors.revealDate.message}</Text>}

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
    textInputSmall: {
        width: '65%',
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
