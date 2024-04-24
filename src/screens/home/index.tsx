import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack";
import axios, { AxiosResponse } from "axios";
import { UserService } from '../../service/UserService/userService'
import { TouchableOpacity, View, Text, ImageBackground} from "react-native";
import { stylesHome } from "./styles";
import { StyledTouchableOpacity, Card, TextTitles, TextSubtitle, StyledImage, CardTitles, TextStyled } from "../../components/GroupCard/GroupCardStyles";
import GroupCard  from "../../components/GroupCard/GroupCard";
import { IGroup } from "../../types/types";
import { useState } from "react";

const Home = () => {
    const navigation = useNavigation<StackTypes>();
    const [groups, setGroups] = useState<IGroup>();
    
    const userService = new UserService();
    
    // const groupCards = async (data: IGroup) => {
    //         try {
    //             const groupsData: IGroup[] | null = await userService.getGroup(data.image, data.groupName); // Ajuste o método de busca de grupos conforme necessário
    //         if (groupsData) {
    //             setGroups(groupsData);
    //         } else {
    //             console.error("Erro ao buscar grupos.");
    //         }
    //     } catch (error) {
    //         console.error("Erro ao buscar grupos:", error);
    //     }
    //     };


    return(
        <View style={stylesHome.container}>
            <ImageBackground source={require('../../../assets/background.jpg')} style={stylesHome.container}>
                <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
                    <Text style={stylesHome.title}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate("RegistrationGroup") }}>
                    <TextStyled >Cadastrar Grupo</TextStyled>
                </TouchableOpacity>

                {/*COLOCAR OS CARDS AQUI
                 {groups.map(group => (
                    <GroupCard key={group.id} group={group} />
                ))}
                */ }

                
            </ImageBackground>
        </View>
    );
};

export default Home;
