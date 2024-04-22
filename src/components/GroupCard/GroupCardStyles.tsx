import styled from "styled-components/native";


export const StyledView = styled.View`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #FFFDD0; /* Creme */
`

export const Card = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 360px;
  height: 140px;
  padding: 32px 24px;
  margin: 15px;
  
  background-color: #F5F5DC; /* Bege Claro */
  border-radius: 12px;

  color: #5C3317; /* Marrom Chocolate */
  text-decoration: none;
`

export const CardTitles = styled.View`
  color: #5C3317; /* Marrom Chocolate */
  text-align: center;
`

export const TextStyled = styled.Text`
  color: white; 
  font-size: 24px;
  line-height: 38px;
  margin-bottom: 4px;
`

export const TextTitles = styled.Text`
  font-size: 24px;
  line-height: 38px;
  margin-bottom: 4px;
  font-weight: bold;
  color: #5C3317; /* Marrom Chocolate */
`

export const TextSubtitle = styled.Text`
  font-size: 14px;
  line-height: 18px;
  margin: 0;
  color: #5C3317; /* Marrom Chocolate */
`

export const StyledImage = styled.Image`
  color: white;
  border-radius: 50px;
  width: 100px;
  height: 100px;
`

export const StyledTouchableOpacity = styled.TouchableOpacity`
    height: 50px;
    width: 100px;
    align-items: center;
    justify-content: center;
    background-color: #5C3317; /* Marrom Chocolate */
    padding: 32px 24px;
    border-radius: 15px;
`
