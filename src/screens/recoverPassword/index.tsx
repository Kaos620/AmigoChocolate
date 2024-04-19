import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "..//../routes/stack";
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Modal, ImageBackground } from "react-native";
import { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { useForm, Controller } from "react-hook-form";

const RecoverPassword = () => {
    const navigation = useNavigation<StackTypes>();
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [modalVisible, setModalVisible] = useState(false);
    const [emailEntered, setEmailEntered] = useState(false);
    const [email, setEmail] = useState<string>('');

    const handleRecoverPassword = (() => {
        
        if (emailEntered && Object.keys(errors).length === 0) {
            navigation.navigate('Login')
        }
    });

    return (
        <ImageBackground source={require('../../../assets/background.jpg')} style={styles.container}>
            <Text style={styles.title}>Digite o seu Email</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        onChangeText={(txtEmail) =>{ 
                            setEmail(txtEmail);
                            setEmailEntered(true);
                        }
                    }
                        value={value}
                    />
                )}
                name="email"
                rules={{ required: 'Email Obrigatório ', }}
            />
            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

            <TouchableOpacity onPress={() => {
                 if (emailEntered && Object.keys(errors).length === 0) {
                    setModalVisible(true);
                }      
            }} style={styles.button}>
                <Text style={styles.buttonText}>Recuperar Senha.</Text>
            </TouchableOpacity>
            
            
            {
            modalVisible ? 
            
            <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(!modalVisible)}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Email de Recuperação Enviado</Text>
                            <TouchableOpacity onPress={handleRecoverPassword} style={styles.buttonModal}>
                                <Text style={styles.buttonText}>Retornar à Página de Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal> 
            
            : 
            
            <></>
            
            }
            <StatusBar style="auto" />
        </ImageBackground>
    );
};
export default RecoverPassword;

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

    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },

    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },

    buttonModal: {
        backgroundColor: 'brown',
        borderRadius: 5,
        padding: 10,
        elevation: 2,
    },
});
