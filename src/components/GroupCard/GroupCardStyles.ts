import styled from "styled-components/native";

export const StyledView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #FFFDD0; /* Creme */
`

export const CardsContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

export const Card = styled.View`
    align-items: center;
    justify-content: center;
    margin: 10px; /* Adicionando espaçamento entre os cards */
    padding: 16px;
    background-color: #F5F5DC; /* Bege Claro */
    border-radius: 12px;
    border: 2px solid #5C3317; /* Adicionando contorno ao redor do card */
`

export const CardTitles = styled.View`
    align-items: center;
    justify-content: center;
`

export const TextStyled = styled.Text`
    color: white; 
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 4px;
`

export const TextTitles = styled.Text`
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 4px;
    font-weight: bold;
    color: #5C3317; /* Marrom Chocolate */
`

export const TextSubtitle = styled.Text`
    font-size: 12px;
    line-height: 16px;
    margin: 0;
    color: #5C3317; /* Marrom Chocolate */
`

export const StyledImage = styled.Image`
    border-radius: 50px;
    width: 80px;
    height: 80px;
`

export const StyledTouchableOpacity = styled.TouchableOpacity`
    height: 40px;
    width: 80px;
    align-items: center;
    justify-content: center;
    background-color: #5C3317; /* Marrom Chocolate */
    border-radius: 10px;
`
