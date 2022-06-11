import {
    Container,
    Cover,
    LoginForm,
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

export default function Login () {
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

                </LoginForm>
            <Cover />
        </Container>
    )
}