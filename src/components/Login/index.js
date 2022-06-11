import React, { useState } from 'react'
import {
    Container,
    Cover,
    LoginForm,
    TitleForm,
    Input,
    ButtonLogin,
    DivContent,
    Logo,
    ContentText,
    Title,
    Text,
    DivSocial,
    Icon,
} from './styles'
import background from '../../assets/background.png'
import logo from '../../assets/logo.png'
import iconFace from '../../assets/icon-face.png'
import iconInsta from '../../assets/icon-insta.png'
import iconWhats from '../../assets/icon-whatsapp.png'

export default function Login ({ setLogged }) {
    const [empresa, setEmpresa] = useState('')
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    return (
        <Container background={background}>
            <DivContent>
                    <Logo src={logo} />
                    <ContentText>
                        <Title>
                            Tecnologia com soluções para agronegócios
                        </Title>
                        <Text>
                            Facilitamos a adequação ás legislações referentes a rastreabilidade vegetal, garantido a segurança dos alimentos.
                        </Text>
                        <DivSocial>
                            <Icon src={iconFace} />
                            <Icon src={iconInsta} />
                            <Icon src={iconWhats} />
                        </DivSocial>
                    </ContentText>
                </DivContent>
                <LoginForm>
                    <TitleForm>
                        Acesse sua conta
                    </TitleForm>
                    <Input
                        onBlur={(event) => {
                            setEmpresa(event.target.value)
                        }}
                    placeholder='Empresa' />
                    <Input
                        onBlur={(event) => {
                            setUsuario(event.target.value)
                        }}
                    placeholder='Usuário' />
                    <Input
                        onBlur={(event) => {
                            setSenha(event.target.value)
                        }}
                    placeholder='Senha' />
                    <ButtonLogin
                        onClick={() => {
                            if (empresa.length && usuario.length && senha.length) {
                                if (empresa === '1' && usuario === '4' && senha === '123456') {
                                    setLogged(true)
                                } else {
                                    alert('Dados inválidos!')
                                }
                            } else {
                                alert('Preencha todos os dados!')
                            }
                        }}
                    >
                        Login
                    </ButtonLogin>
                </LoginForm>
            <Cover />
        </Container>
    )
}