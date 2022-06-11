import styled from 'styled-components'

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    background-image: url('${props => props.background}');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Cover = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
`

export const LoginForm = styled.div`
    width: 300px;
    height: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 2;
`

export const TitleForm = styled.h2`
    font-weight: 400;
    margin-bottom: 50px;
`

export const Input = styled.input`
    width: calc(100% - 60px);
    padding: 5px;
    border-radius: 8px;
    border: 2px solid #dbdbdb;
    color: grey;
    outline: none;
    margin-bottom: 15px;
    font-size: 12px;
`

export const ButtonLogin = styled.button`
    width: calc(100% - 60px);
    padding: 9px;
    border: none;
    border-radius: 4px;
    outline: none;
    background-color: #1A877F;
    color: white;
    font-weight: 500;
    margin-top: 30px;
`

export const DivContent = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: white;
    position: relative;
    z-index: 2;
`

export const Logo = styled.img`
    width: 65%;
`

export const ContentText = styled.div`
    text-align: center;
`

export const Title = styled.h1`
    max-width: 350px;
    line-height: 1.2em;
    font-size: 1.5em;
`

export const Text = styled.p`
    max-width: 350px;
    margin-top: 10px;
`

export const DivSocial = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
`

export const Icon = styled.img`
    width: 45px;
`