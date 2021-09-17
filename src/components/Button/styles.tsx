import styled from "styled-components/native"
import colors from "../../styles/colors"

export const ButtonStyle = styled.TouchableOpacity`
    width: 286px;
    height: 61px;
    background-color: ${colors.purple};
    margin-top: 10px;
    left:40px;
    top: 40px;
`

export const ButtonStyleText = styled.Text`
    font-family: NovaFlat_400Regular;
    color: ${colors.grayLight};
    font-size: 18px;
    text-align: center;
    padding: 16px;

`