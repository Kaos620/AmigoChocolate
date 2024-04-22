import { Text, View, Image, ImageBackground } from "react-native";
import { Group } from "../../types/types";
import { useNavigation } from "@react-navigation/native"
import { StackTypes } from "../../routes/stack";
import {
    Card,
    CardTitles,
    StyledImage,
    StyledTouchableOpacity,
    StyledView,
    TextStyled,
    TextTitles
} from "./GroupCardStyles"


export function GroupCard(data: Group) {
    const navigation = useNavigation<StackTypes>()

    return (
        <StyledView>
            <Card>
                <StyledImage source={{ uri: data.image || "" }} />
                <CardTitles>
                    <TextTitles>{data.groupName}</TextTitles>
                </CardTitles>
                <StyledTouchableOpacity
                    onPress={() => { navigation.navigate('RegistrationGroup') }}
                >
                    <TextStyled>Ver</TextStyled>
                </StyledTouchableOpacity>
            </Card>
        </StyledView>
    )};
