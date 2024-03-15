import { useNavigation } from "@react-navigation/native"
import { StackTypes } from "../../routes/stack";
import { TouchableOpacity, View, Text } from "react-native";


const Home = () => {
    const navigation = useNavigation<StackTypes>()

    return(
        <View>
            <Text>Home</Text>
            <TouchableOpacity onPress={() => { navigation.navigate("Login")}}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
} 

export default Home;