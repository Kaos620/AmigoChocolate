import { Text, View, Image, ImageBackground } from "react-native";
import { IGroup } from "../../types/types";
import { useIsFocused, useNavigation } from "@react-navigation/native"
import { StackTypes } from "../../routes/stack";
import { UserService } from "../../service/UserService/userService";
import { useEffect, useState } from "react";
import {
    Card, 
    CardTitles,
    StyledImage,
    StyledTouchableOpacity,
    StyledView,
    TextStyled,
    TextTitles
} from "./GroupCardStyles"


type GroupType = {
    data: IGroup;
    onPress: (id: number) => void;
};

const GroupCard: React.FC<GroupType> = ({ data, onPress }) => {
    return (
        <StyledView>
            <Card>
                <StyledImage source={data.image ? { uri: data.image } : require('../../../assets/defaultImage.jpg')} />
                <CardTitles>
                    <TextTitles>{data.groupName}</TextTitles>
                    <TextTitles>R${data.chocolateValue}</TextTitles>
                </CardTitles>
                <StyledTouchableOpacity onPress={() => onPress(data.id)}>
                    <TextStyled>Ver</TextStyled>
                </StyledTouchableOpacity>
            </Card>
        </StyledView>
    );
};

export default GroupCard;

