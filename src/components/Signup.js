import React, { useState } from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { auth } from "../firebase"
import { useDispatch } from 'react-redux';
import { login } from "../features/userSlice"


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

  p{
    margin-top: 5px;
    color: #797e7b;
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

        &:focus {
            border: 1px solid #d6d6d6;
            transition: all .2s;
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
    const [fName, setFname] = useState("");
    const [lName, setLname] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signup = (e) => {
        e.preventDefault();

        if (!fName) {
            return alert("Please enter a first name! ")
        }

        if (!lName) {
            return alert("Please enter a first name! ")
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: fName
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: fName
                }))
                navigate("/teslaaccount")
            })
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
                    <h1>Create Account</h1>
                    <div>
                        <label htmlFor='fname'>FirstName</label>
                        <StyledInput type="text" value={fName} id='fname' onChange={(e) => setFname(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='lname'>LastName</label>
                        <StyledInput type="text" value={lName} id='lname' onChange={(e) => setLname(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <StyledInput type="email" value={email} id='email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <StyledInput type="password" value={password} id='lname' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <p>By continuing, I understand and agree to Tesla's <br /> Privacy Notice and Terms of use for creating a <br /> Tesla account.</p>
                    </div>
                    <StyledPrimaryButton type='submit' onClick={signup}>Submit</StyledPrimaryButton>
                </form>
                <FormStyleText>
                    <hr /> <span>Or</span> <hr />
                </FormStyleText>
                <Link to="/login"><StyledSecondaryButton type='button'>Sign In</StyledSecondaryButton></Link>
            </FormContainer>
        </Container >
    )
}

export default Login
