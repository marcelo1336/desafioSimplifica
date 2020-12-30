import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #2969bd;
    padding-bottom: 30px;
`;
export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 5px;
`;
export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const HeaderTitle = styled.Text`
    padding-top: 20px;
    padding-bottom: 20px;
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: #f0ffff;
`;