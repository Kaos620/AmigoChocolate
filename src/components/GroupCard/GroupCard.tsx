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


const GroupCard = async (data: IGroup) => {
    const navigation = useNavigation<StackTypes>()
    return (
        <StyledView>
            <Card>
                <StyledImage source={{ uri: data.image || "" }} />
                <CardTitles>
                    <TextTitles>{data.groupName}</TextTitles>
                </CardTitles>
                {/* <StyledTouchableOpacity
                    onPress={() => { navigation.navigate("editGroup") }}
                >
                    <TextStyled>Ver</TextStyled>
                </StyledTouchableOpacity> */}
            </Card>
        </StyledView>
    )};

export default GroupCard;


