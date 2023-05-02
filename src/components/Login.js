import React, { useState } from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import InfoIcon from '@mui/icons-material/Info';
import { auth } from "../firebase"
import { useDispatch } from 'react-redux';
import { login } from "../features/userSlice"

const toolText = "If your account is linked to an email you no longer have access to, sign in to your account and update your email under account settings."

const Container = styled.div`
    height: 100vh;
`

const HeaderContainer = styled.div`
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`

const LanguageContainer = styled.div`
    padding: 10px 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 18px;
    border-radius: 5px;
    transition: all 0.2s;

    &:hover{
        background-color: hsla(0,0%, 50.2%, 0.125);
    }
`



const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        margin-bottom: 40px;
    }

  input, label {
        display: block;
        margin-bottom: 8px;
  }
`

const StyledInput = styled.input`
        border: 1px solid #f4f4f4;
        width: 300px;
        padding: 12px 20px;
        background-color: #f4f4f4;
        margin-bottom: 30px;
        border-radius: 4px;
        outline: none;
        font-size: 18px;

        &:focus {
            border: 1px solid #d6d6d6;
            transition: all .2s;
        }
`

const FormText = styled.div`
    margin: 20px 0;
    
    p{
        border-bottom: 1px solid black;
        font-size: 18px;
        transition: all .3s;

        &:hover {
            border-bottom-width: 1.5px;
            color: black;
        }
    }
`

const FormStyleText = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    hr{
        width: 40%;
        opacity: 0.7;
        height: 0;
    }

    span {
        font-weight: 500;
        color: #5c5e62;
    }
`

const StyledPrimaryButton = styled.button`
        margin: 20px 0;
        background-color: #3e6ae1;
        cursor: pointer;
        color: white;
        width: 300px;
        padding: 12px 40px;
        font-size: 18px;
        border-radius: 3px;
        border: none;
        outline: none;
        transition: all .4s;
        &:hover {
            background-color: #3457b1;
        }
`

const StyledSecondaryButton = styled.button`
        margin: 20px 0;
        width: 100%;
        background-color: #f4f4f4;
        color: #171a20;
        width: 300px;
        padding: 10px 40px;
        font-size: 18px;
        border-radius: 3px;
        border: none;
        cursor: pointer;
        transition: all .2s ease-in-out;

        &:hover {
            background-color: #f1f1f1;
            color: #171a20;
        }

      
`


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName
            }))
            navigate("/teslaaccount")
        })
            .catch((err) => alert(err.message))
    }


    return (
        <Container>
            <HeaderContainer>
                <Link to="/">
                    <img src="/images/logo.svg" alt="logo" />
                </Link>
                <LanguageContainer>
                    <LanguageOutlinedIcon />
                    <span style={{ marginLeft: "5px" }}>en-US</span>
                </LanguageContainer>
            </HeaderContainer>
            <FormContainer>
                <form>
                    <h1>Sign In </h1>
                    <div>
                        <label htmlFor='email'>Email<span><Tooltip title={toolText}><InfoIcon sx={{ fontSize: "15px", marginLeft: "5px" }} /></Tooltip></span></label>
                        <StyledInput type="text" value={email} id='email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <StyledInput type="password" value={password} id='password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <StyledPrimaryButton type='submit' onClick={handleSubmit}>Submit</StyledPrimaryButton>
                </form>
                <FormText>
                    <Link to="/"><p>Trouble Signing In?</p></Link>
                </FormText>
                <FormStyleText>
                    <hr /> <span>Or</span> <hr />
                </FormStyleText>
                <Link to="/signup"><StyledSecondaryButton type='button'>Create Account</StyledSecondaryButton></Link>
            </FormContainer>
        </Container >
    )
}

export default Login
