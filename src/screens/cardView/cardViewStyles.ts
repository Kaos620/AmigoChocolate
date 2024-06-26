import styled from "styled-components/native";

export const StyledView = styled.View`
    flex: 1;
    background-color: #F5F5DC; /* Bege Claro para o fundo */
    flex: 1;
    justify-content: 'center';
    align-items: 'center';
    resize: "cover";
    width: "100%";
    height: "100%";
`;

export const CardsContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
`;

export const Card = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    margin: 10px;
    padding: 20px;
    background-color: #5C3317; /* Marrom Chocolate */
    border-radius: 12px;
    border: 2px solid #F5F5DC; /* Bege Claro */
    width: 90%; /* Ajuste a largura conforme necessário */
    max-width: 500px; /* Defina um valor máximo para a largura */
`;

export const CardTitles = styled.View`
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
`;

export const TextStyled = styled.Text`
    color: white; 
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 4px;
`;

export const TextTitles = styled.Text`
    font-size: 22px;
    line-height: 32px;
    margin-bottom: 4px;
    font-weight: bold;
    color: #F5F5DC; /* Bege Claro */
`;

export const TextSubtitle = styled.Text`
    font-size: 16px;
    line-height: 24px;
    margin: 0;
    color: #F5F5DC; /* Bege Claro */
`;

export const StyledImage = styled.Image`
    border-radius: 50px;
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity`
    height: 50px;
    width: 150px;
    align-items: center;
    justify-content: center;
    background-color: #5C3317; /* Marrom Chocolate */
    border-radius: 10px;
    margin-top: 20px;
`;

export const ParticipantsNumber = styled.Text`
    font-size: 16px;
    color: #F5F5DC; /* Bege Claro */
    flex: 1;
    text-align: right;
`;

export const RevealDate = styled.Text`
    font-size: 16px;
    color: #F5F5DC; /* Bege Claro */
    flex: 1;
    text-align: left;
`;

export const ParticipantsWrapper = styled.View`
    width: 100%;
    background-color: #F5F5DC; /* Bege Claro */
    padding: 20px;
    margin-top: 20px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export const ParticipantsContainer = styled.View`
    background-color: #FFF8DC; /* Ligeiramente mais escuro que o fundo */
    padding: 10px;
    border-radius: 12px;
    width: 100%;
    max-width: 300px; /* Tamanho fixo para o contêiner */
`;

export const ParticipantName = styled.Text`
    font-size: 18px;
    line-height: 28px;
    color: #5C3317; /* Marrom Chocolate */
    margin-bottom: 4px;
`;
