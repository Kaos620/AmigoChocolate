import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { UserService } from '../../service/UserService/userService'
import { StackTypes } from "../../routes/stack";
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useForm, Controller } from "react-hook-form";
import {
    Card, 
    CardTitles,
    StyledImage,
    StyledTouchableOpacity,
    StyledView,
    TextStyled,
    TextTitles,
    ParticipantsNumber,
    RevealDate
} from "./cardViewStyles"

type CardType = {
    id: number,
    groupName: string,
    image: string,
    groupDescription: string,
    chocolateValue: number,
    groupMembersNum:number,
    revealDate: string
}

const CardView = (data: CardType) => {
    const navigation = () => useNavigation<StackTypes>()
    return (
        <StyledView>
            <ImageBackground source={require('../../../assets/chocoracao.png')}>
            <Card>
                <StyledImage source = { require('../../../assets/defaultImage.jpg')}/>
                <CardTitles>
                    <TextTitles>{data.data.groupName}</TextTitles>
                    <TextTitles>R${data.data.chocolateValue}</TextTitles>
                </CardTitles>
                <RevealDate>{data.data.revealDate}</RevealDate>
                <ParticipantsNumber>{data.data.groupMembersNum} Participantes</ParticipantsNumber>
            </Card>
            </ImageBackground>
        </StyledView>
    )
}

export default CardView;