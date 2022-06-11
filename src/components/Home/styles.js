import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
`

export const Panel = styled.div`
    width: 300px;
    height: 100vh;
    background-color: #00A69A;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`

export const Logo = styled.img`
    width: 180px;
    height: 84px;
    border-bottom: 1px solid #e6e7e933;
`

export const Box = styled.section`
    width: calc(100% - 20px);
    border-radius: 8px;
    font-size: 14px;
    padding: 5px 10px;
`
export const DarkBox = styled(Box)`
    background-color: #1A877F;
    font-weight: 500;
    margin: 12px 0;
    padding: 10px;
`
export const Cnpj = styled.p`
    font-size: 12px;
    color: rgba(255, 255, 255, 0.42);
`

export const Main = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: #F5F5F5;
`