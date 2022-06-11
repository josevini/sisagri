import styled from 'styled-components'

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    background-image: url('${props => props.background}');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`

export const Cover = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(0, 0, 0, 0.5);
`

export const LoginForm = styled.form`
    width: 280px;
    height: 420px;
    padding: 5px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`

export const DivContent = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
    color: white;
`

export const Logo = styled.img`
    width: 65%;
`

export const ContentText = styled.div`
    text-align: center;
`

export const Title = styled.h1`
    max-width: 300px;
    line-height: 1.2em;
    font-size: 1.5em;
`

export const Text = styled.p`
    max-width: 300px;
    margin-top: 10px;
`

export const DivSocial = styled.div`
    display: flex;
`

export const Icon = styled.img`
    width: 50px;
`