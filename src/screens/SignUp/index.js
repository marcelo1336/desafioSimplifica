import React, { useState } from 'react'
import {useNavigation} from '@react-navigation/native'
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
import CpfIcon from '../../assets/cpf.svg'
import SignInput from '../../components/SignInput'
import Api from '../../Api'
import AsyncStorage from '@react-native-community/async-storage'
import {UserContext} from '../../contexts/UserContext'



export default () => {

    const {dispatch: userDispatch} = useContext(UserContext)

    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('teste');
    const [passwordField, setPassordField] = useState('');

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        })
    }

    const handleSignClick = async () => {
        if(nameiFeld != '' && emailField != '' && passwordField != '' ){
            let res = await Api.signUp(nameField, emailField, passwordField)

            if(res.token){
                await AsyncStorage.setItem('token', res.token);

                userDispatch({
                    type: 'setAvatar',
                    payload: {
                        avatar: res.data.avatar
                    }
                });

                navigation.reset({
                    routes:[{name: 'MainTab'}]
                });

            }else{
                alert("Erro: " + res.error)
            }
        } else {
            alert("Preencha os campos");
        }
    }

    return (
        <Container>
            <Logo width="100%" height="160" />

            <InputArea>

                <SignInput IconSvg={CpfIcon}
                    placeholder="Digite seu CPF"
                    value={cpfField}
                    onChangeText={t => setNameField(t)}
                />

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
                    <CustonButtonText>Cadastrar</CustonButtonText>
                </CustonButton>

            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
            </SignMessageButton>


        </Container>
    )
}