import React, { useEffect, useContext } from 'react'
import { Container, LoadingIcon } from './styles'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'

import Logo from '../../assets/logo.svg'
import Api from '../../Api'
import {UserContext} from '../../contexts/UserContext'


export default () => {

    const {dispatch: userDispatch} = useContext(UserContext)

    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token !== null) {
                let res = await Api.checkToken(token);
                if (res.token) {
                    await AsyncStorage.setItem('token', res.token);

                    userDispatch({
                        type: 'setAvatar',
                        payload: {
                            avatar: res.data.avatar
                        }
                    });

                    navigation.reset({
                        routes: [{ name: 'MainTab' }]
                    });


                } else {
                    navigation.navigate('SignIn')
                }
            } else {
                navigation.navigate('SignIn');
            }
        }
        checkToken();
    }, [])

    return (
        <Container>
            <Logo width="100%" height="260" />
            <LoadingIcon size="large" color="#FFFFFF" />
        </Container>
    )
}