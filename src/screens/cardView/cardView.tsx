import React, { useEffect, useState } from 'react';
import { useRoute } from "@react-navigation/native";
import { UserService } from '../../service/UserService/userService';
import { IGroup } from "../../types/types";
import { Text, ImageBackground, View } from "react-native";
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
    const userService = new UserService();

    useEffect(() => {
        const fetchGroupData = async () => {
            const data = await userService.getGroupByID(groupId);
            if (data) {
                setGroupData(data);
            } else {
                console.error("Erro ao buscar dados do grupo.");
            }
        };
        fetchGroupData();
    }, [groupId]);

    if (!groupData) {
        return <Text>Carregando...</Text>;
    }

    // Format the date
    const revealDate = groupData.revealDate;
    const formattedDate = `${revealDate}`;

    // Dummy data for participants
    const participants = ['User 1', 'User 2', 'User 3', 'User 4'];

    return (
        <StyledView>
            <ImageBackground source={require('../../../assets/chocoracao.png')} style={{flex: 1, justifyContent: 'center'}}>
                <Card>
                    <StyledImage source={groupData.image ? { uri: groupData.image } : require('../../../assets/defaultImage.jpg')} />
                    <CardTitles>
                        <TextTitles>{groupData.groupName}</TextTitles>
                        <TextTitles>R${groupData.chocolateValue}</TextTitles>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 20}}>
                            <RevealDate>{formattedDate}</RevealDate>
                            <ParticipantsNumber>{groupData.groupMembersNum} Participantes</ParticipantsNumber>
                        </View>
                    </CardTitles>
                </Card>
            </ImageBackground>
            <ParticipantsWrapper>
                <ParticipantsContainer>
                    {participants.map((participant, index) => (
                        <ParticipantName key={index}>{participant}</ParticipantName>
                    ))}
                </ParticipantsContainer>
            </ParticipantsWrapper>
        </StyledView>
    );
}

export default CardView;
