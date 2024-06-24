import { Text, View, Image, ImageBackground } from "react-native";
import { IGroup } from "../../types/types";
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


type GroupType = {
    id: number,
    groupName: string,
    image: string,
    groupDescription: string,
    chocolateValue: number,
    groupMembersNum:number
}


export default function GroupCard(data: GroupType){
    const navigation = useNavigation<StackTypes>();
    return (
        <StyledView>
            <Card>
            <StyledImage source = { require('../../../assets/defaultImage.jpg')}/>
                <CardTitles>
                    <TextTitles>{data.data.groupName}</TextTitles>
                    <TextTitles>R${data.data.chocolateValue}</TextTitles>
                </CardTitles>
                <StyledTouchableOpacity
                    onPress={() => {
                        navigation.navigate('CardView');
                    }}
                >
                    <TextStyled>Ver</TextStyled>
                </StyledTouchableOpacity>
            </Card>
        </StyledView>
        
    )};
    



