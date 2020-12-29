import React,{useContext} from 'react'
import {UserContext} from '../contexts/UserContext'
import styled from 'styled-components/native'

import CpfIcon from '../assets/cpf.svg'
import EmailIcon from '../assets/email.svg'
import LockIcon from '../assets/lock.svg'


const TabArea = styled.View`
    height: 60px;
    background-color: #4EADBE;
    flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 35px;
    border: 3px solid #4EADBE;
    margin-top: -20px;
`;

export default ({ state, navigation }) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem onPress={() => goTo('Manifestation')}>
                <CpfIcon style={{ opacity: state.index === 0 ? 1 : 0.5 }}
                    width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItemCenter onPress={() => goTo('NewManifestation')}>
                <EmailIcon width="32" height="32" fill="#4EADBE" />
            </TabItemCenter>
            <TabItem onPress={() => goTo('Profile')}>
                <LockIcon style={{ opacity: state.index === 2 ? 1 : 0.5 }}
                    width="24" height="24" fill="#FFFFFF" />
            </TabItem>
        </TabArea>
    )
}