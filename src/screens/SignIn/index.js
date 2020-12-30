import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    Container,
    InputArea,
    CustonButton,
    CustonButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles'
import Logo from '../../assets/logo.svg'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'
import SignInput from '../../components/SignInput'
import Api from '../../Api'
import AsyncStorage from '@react-native-community/async-storage'
import {UserContext} from '../../contexts/UserContext'



export default () => {

    const {dispatch: userDispatch} = useContext(UserContext)
    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPassordField] = useState('');

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'SignUp' }]
        })
    }

    const handleSignClick = async() => {
        if (emailField != '' && passwordField != '') {
            let json = await Api.signIn(emailField, passwordField);
            console.log(json)

            if (json.token) {
                await AsyncStorage.setItem('token', json.token);

                userDispatch({
                    type: 'setAvatar',
                    payload: {
                        avatar: json.data.avatar
                    }
                });

                navigation.reset({
                    routes:[{name: 'MainTab'}]
                });

            } else {
                alert('informações erradas')
            }
        } else {
            alert("Preencha os campos")
        }
    }

    return (
        <Container>
            <Logo width="100%" height="160" />

            <InputArea>

                <SignInput IconSvg={EmailIcon}
                    placeholder="Digite seu Email"
                    value={emailField}
                    onChangeText={t => setEmailField(t)}
                />

                <SignInput IconSvg={LockIcon}
                    placeholder="Digite sua Senha"
                    value={passwordField}
                    onChangeText={t => setPassordField(t)}
                    password={true}
                />

                <CustonButton onPress={handleSignClick}>
                    <CustonButtonText>Login</CustonButtonText>
                </CustonButton>

            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>


        </Container>
    )
}