import React, { useContext } from 'react'
import styled from 'styled-components/native'

import { UserContext } from '../contexts/UserContext'

import ManifestIcon from '../assets/manifest.svg'
import PlusIcon from '../assets/plus.svg'
import LockIcon from '../assets/manifest.svg'


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

const AvatarIcon = styled.Image`
    width: 34px;
    height: 34px;
    border-radius: 12px;
`;

export default ({ state, navigation }) => {

    const { state: user } = useContext(UserContext);


    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem onPress={() => goTo('Manifestation')}>
                <ManifestIcon style={{ opacity: state.index === 0 ? 1 : 0.5 }}
                    width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItemCenter onPress={() => goTo('NewManifestation')}>
                <PlusIcon width="32" height="32" fill="#4EADBE" />
            </TabItemCenter>
            <TabItem onPress={() => goTo('Profile')}>
                {user.avatar != '' ?
                    <AvatarIcon source={{ uri: user.avatar }} style={{ opacity: state.index === 2 ? 1 : 0.5 }}
                        width="24" height="24" fill="#FFFFFF" />
                    :
                    <LockIcon style={{ opacity: state.index === 2 ? 1 : 0.5 }}
                        width="24" height="24" fill="#FFFFFF" />}
            </TabItem>
        </TabArea>
    )
}