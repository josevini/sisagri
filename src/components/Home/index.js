import {
    Container,
    Panel,
    Box,
    DarkBox,
    Cnpj,
    Main,
    Logo,

} from './styles'
import logo from '../../assets/logo.png'

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
                
            </Main>
        </Container>
    )
}