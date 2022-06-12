import {
    Container,
    Panel,
    Logo,
    Box,
    DarkBox,
    Cnpj,
    Main,
    DivSearch,
    Input,
    DivSocial,
    Icon,
} from './styles'
import logo from '../../assets/logo.png'
import iconFace from '../../assets/icon-face.png'
import iconInsta from '../../assets/icon-insta.png'
import iconWhats from '../../assets/icon-whatsapp.png'

export default function Home () {
    return (
        <Container>
            <Panel>
                <Logo src={logo} />
                <DarkBox>
                    Lagos Agropecuaria LTDA
                    <Cnpj>
                        12.345.678/0001-23
                    </Cnpj>
                </DarkBox>
                <DarkBox>Painel de controle</DarkBox>
                <Box>Propriedades</Box>
                <Box>Cultivos</Box>
                <Box>Serviços</Box>
                <Box>Insumos</Box>
                <Box>Clientes</Box>
                <Box>Safras</Box>
                <Box>Aplicações</Box>
                <Box>Vendas</Box>
                <Box>Perdas</Box>
                <Box>Movimentos</Box>
                <Box>Relatórios</Box>
                <Box>Estoque</Box>
            </Panel>
            <Main>
                <DivSearch>
                    <h1>Olá</h1>
                    <Input placeholder='Faça sua pesquisa' />
                    <DivSocial>
                        <Icon src={iconFace} />
                        <Icon src={iconInsta} />
                        <Icon src={iconWhats} />
                    </DivSocial>
                </DivSearch>
            </Main>
        </Container>
    )
}