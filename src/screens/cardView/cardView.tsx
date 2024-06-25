import React, { useEffect, useState } from 'react';
import { useRoute } from "@react-navigation/native";
import { UserService } from '../../service/UserService/userService';
import { IGroup, ISorteio } from "../../types/types";
import { Text, View, ScrollView, TouchableOpacity, StyleSheet, Alert } from "react-native";
import {
    Card,
    CardTitles,
    StyledImage,
    StyledView,
    TextTitles,
    ParticipantsNumber,
    RevealDate,
    ParticipantsContainer,
    ParticipantName,
    ParticipantsWrapper
} from "./cardViewStyles";
import { CardViewRouteProp } from '../../routes/stack';

const CardView: React.FC = () => {
    const route = useRoute<CardViewRouteProp>();
    const { groupId } = route.params;
    const [groupData, setGroupData] = useState<IGroup | null>(null);
    const [sorteio, setSorteio] = useState<ISorteio | null>(null);
    const [isSorteioDone, setIsSorteioDone] = useState(false);
    const userService = new UserService();

    useEffect(() => {
        const fetchGroupData = async () => {
            const data = await userService.getGroupByID(groupId);
            if (data) {
                setGroupData(data);
                if (data.sorteio) {
                    setSorteio(data.sorteio);
                    setIsSorteioDone(true);
                }
            } else {
                console.error("Erro ao buscar dados do grupo.");
            }
        };
        fetchGroupData();
    }, [groupId]);

    if (!groupData) {
        return <Text>Carregando...</Text>;
    }

    const participants = ['User 1', 'User 2', 'User 3', 'User 4'];

    const handleSorteio = async () => {
        if (isSorteioDone) {
            Alert.alert("Sorteio já realizado");
            return;
        }

        const shuffled = [...participants].sort(() => Math.random() - 0.5);
        const result = shuffled.reduce((acc, participant, index) => {
            acc[participant] = shuffled[(index + 1) % shuffled.length];
            return acc;
        }, {} as ISorteio);

        setSorteio(result);

        // Salvar resultado do sorteio no JSON do grupo
        try {
            await userService.saveSorteio(groupId.toString(), result);
            console.log("Sorteio salvo com sucesso!");
            setIsSorteioDone(true);
            Alert.alert("Sorteio realizado com sucesso!");
        } catch (error) {
            console.error("Erro ao salvar o sorteio:", error);
        }
    };

    return (
        <StyledView>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <Card>
                    <StyledImage source={groupData.image ? { uri: groupData.image } : require('../../../assets/defaultImage.jpg')} />
                    <CardTitles>
                        <TextTitles>{groupData.groupName}</TextTitles>
                        <TextTitles>R${groupData.chocolateValue}</TextTitles>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 20, alignItems: 'center' }}>
                            <RevealDate>{groupData.revealDate}</RevealDate>
                            <ParticipantsNumber>{groupData.groupMembersNum} Participantes</ParticipantsNumber>
                        </View>
                        <ParticipantsWrapper>
                            <ParticipantsContainer>
                                {participants.map((participant, index) => (
                                    <ParticipantName key={index}>{participant}</ParticipantName>
                                ))}
                            </ParticipantsContainer>
                        </ParticipantsWrapper>
                    </CardTitles>
                    <TouchableOpacity 
                        onPress={handleSorteio} 
                        style={[styles.button, isSorteioDone && styles.buttonDisabled]} 
                        disabled={isSorteioDone}
                    >
                        <Text style={styles.buttonText}>Sortear</Text>
                    </TouchableOpacity>
                    {sorteio && (
                        <View>
                            {Object.entries(sorteio).map(([giver, receiver], index) => (
                                <TextTitles key={index}>{giver} &rarr; {receiver}</TextTitles>
                            ))}
                        </View>
                    )}
                </Card>
            </ScrollView>
        </StyledView>
    );
}

export default CardView;


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        borderRadius: 5,
        borderColor: '#F5F5DC', /* Bege Claro */
        height: 40,
        backgroundColor: 'white',
        marginVertical: 10,
        borderWidth: 1,
    },
    buttonDisabled: {
        backgroundColor: '#A9A9A9', /* Cinza para desativado */
    },
    buttonText: {
        color: '5C3317',
        fontSize: 16,
        fontWeight: 'bold',
    },
});