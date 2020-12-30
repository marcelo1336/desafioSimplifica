import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    background-color: #2969bd;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const InputArea = styled.View`
    width: 100%;
    padding: 40px
`;

export const CustonButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #268596;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;
export const CustonButtonText = styled.Text`
    font-size: 18px;
    color: #FFF
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;
export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: #FF9 ;
`;
export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: #FF0;
    font-weight: bold;
    margin-left: 5px;
`;


