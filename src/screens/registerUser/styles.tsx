import { StyleSheet } from "react-native";




export const stylesRegister= StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: "cover",
        width: "100%",
        height: "100%",
    },

    title: {
        fontSize: 30,
        marginBottom: 20,
        color: 'white',
        fontWeight: 'bold',
    },

    textInput: {
        width: '70%',
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 5,
        borderColor: 'brown',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        borderRadius: 5,
        borderColor: '#F5F5DC', /* Bege Claro */
        height: 40,
        backgroundColor: '#5C3317', /* Marrom Chocolate */
        marginVertical: 10,
        borderWidth: 1,
    },

    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

    error: {
        color: 'yellow',
        alignSelf: 'flex-start',
        marginLeft: '15%',
        marginBottom: 5,
    },
});