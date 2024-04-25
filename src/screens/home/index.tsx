import { useIsFocused, useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack";
import axios, { AxiosResponse } from "axios";
import { UserService } from '../../service/UserService/userService'
import { TouchableOpacity, View, Text, ImageBackground} from "react-native";
import { stylesHome } from "./styles";
import { StyledTouchableOpacity, Card, TextTitles, TextSubtitle, StyledImage, CardTitles, TextStyled } from "../../components/GroupCard/GroupCardStyles";
import GroupCard  from "../../components/GroupCard/GroupCard";
import { IGroup } from "../../types/types";
import { useEffect, useState } from "react";

const Home = () => {
    const navigation = useNavigation<StackTypes>();
    const [groups, setGroups] = useState<IGroup[]>([]);
    const focus = useIsFocused();


    const userService = new UserService();
    useEffect(() => {
        groupCards()
    }, [focus])
    
    const groupCards = async () => {
            try {
                const groupsData: IGroup[] | null = await userService.getGroup(); // Ajuste o método de busca de grupos conforme necessário
            if (groupsData) {
                setGroups(groupsData);
            } else {
                console.error("Erro ao buscar grupos.");
            }
        } catch (error) {
            console.error("Erro ao buscar grupos:", error);
        }
        };


    return(
        <View style={stylesHome.container}>
            <ImageBackground source={require('../../../assets/chocoracao.png')} style={stylesHome.container}>
                <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
                    <Text style={stylesHome.title}>Voltar</Text>
                </TouchableOpacity>

                {groups.map(group => (
                   <GroupCard key={group.id} data={group} />
               ))}

                <TouchableOpacity style = {stylesHome.button}onPress={() => { navigation.navigate("RegistrationGroup") }}>
                    <TextStyled >Cadastrar Grupo</TextStyled>
                </TouchableOpacity>
                
            </ImageBackground>
        </View>
    );
};

export default Home;
