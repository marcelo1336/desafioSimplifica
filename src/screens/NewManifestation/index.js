import React, { useEffect, useState } from 'react'

import {
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle
} from './styles';

import Card from '../../components/Card'


export default () => {
    return (
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>O que você quer fazer?</HeaderTitle>
                </HeaderArea>

                <Card name="Acesso à informação"
                    description="Solicite acesso a informações públicas"
                    color="#228b22" />

                <Card name="Denúncia"
                    description="Comunique um ato ilícito praticado contra a administração pública"
                    color="#a52a2a" />

                <Card name="Elogio"
                    description="Expresse se você está satisfeito com um atendimento público"
                    color="#ff1493" />

                <Card name="Reclamação"
                    description="Manifeste sua insatisfação com um serviço público"
                    color="#daa520" />

                <Card name="Simplifique"
                    description="Sugira alguma ideia para desburocratizar o serviço público"
                    color="#00bfff" />

                <Card name="Solicitação"
                    description="Peça um atendimento ou uma prestação de serviço"
                    color="#7cfc00" />

                <Card name="Sugestão"
                    description="Envie uma ideia ou proposta de melhoria dos serviços públicos"
                    color="#eee8aa" />


            </Scroller>
        </Container>
    )
}