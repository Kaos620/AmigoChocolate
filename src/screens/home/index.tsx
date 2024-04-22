import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack";
import { TouchableOpacity, View, Text, ImageBackground } from "react-native";
import { stylesHome } from "./styles";
import { StyledTouchableOpacity, Card, TextTitles, TextSubtitle, StyledImage, CardTitles, TextStyled } from "../../components/GroupCard/GroupCardStyles"; // Importando os estilos dos cards
import { GroupCard } from "../../components/GroupCard/GroupCard";

const Home = () => {
    const navigation = useNavigation<StackTypes>();

    return(
        <View style={stylesHome.container}>
            <ImageBackground source={require('../../../assets/background.jpg')} style={stylesHome.container}>
                <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
                    <Text style={stylesHome.title}>Voltar</Text>
                </TouchableOpacity>

                <StyledTouchableOpacity onPress={() => { navigation.navigate("RegistrationGroup") }}>
                    <TextStyled >Cadastrar Grupo</TextStyled>
                </StyledTouchableOpacity>

                <Card>
                    {/*<StyledImage source={require('../../../assets/grupo2.jpg')} /> */}
                    <CardTitles>
                        <TextTitles>Grupo 1</TextTitles>
                        <TextSubtitle>Descrição do Grupo 1</TextSubtitle>
                    </CardTitles>
                </Card>

                <Card>
                    {/*<StyledImage source={require('../../../assets/grupo2.jpg')} /> */}
                    <CardTitles>
                        <TextTitles>Grupo 2</TextTitles>
                        <TextSubtitle>Descrição do Grupo 2</TextSubtitle>
                    </CardTitles>
                </Card>

                <Card>
                    {/*<StyledImage source={require('../../../assets/grupo2.jpg')} /> */}
                    <CardTitles>
                        <TextTitles>Grupo 3</TextTitles>
                        <TextSubtitle>Descrição do Grupo 3</TextSubtitle>
                    </CardTitles>
                </Card>

            </ImageBackground>
        </View>
    );
};

export default Home;
