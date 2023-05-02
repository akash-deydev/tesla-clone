import React from 'react'
import styled from 'styled-components'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { Link } from "react-router-dom";


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

const CarDetails = styled.div`
    display: flex;
    
`

const CarImage = styled.div`
    width: 70vw;
    height: 70vh;

    img {
        height: 100%;
        background-size: cover;
    }
`

const CarInfo = styled.div`
    width: 330px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const CarAnnouncement = styled.div`
    padding: 25px;
    border-radius: 4px;
    background-color: #282828;
    text-align: left;
    
    h3{
        color: white;
    }

    p{
        margin-top: 5px;
        color: white;
        line-height: 1.4;
    }
`

const CarName = styled.div`
    text-align: center;
    margin: 40px 0;
`

const ButtonGroup = styled.div`

`

const CarSpeed = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    span {
        font-size: 20px;
        margin-bottom: 5px;
    }
`

const Car = () => {

    return (
        <div>
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
                <CarDetails>
                    <CarImage>
                        <img src="/images/model-y.jpg" alt="model-y" />
                    </CarImage>
                    <CarInfo>
                        <CarAnnouncement>
                            <h3>$7,500 Federal Tax Credit</h3>
                            <p>All new Model Y vehicles qualify for <br /> a federal tax credit for eligible <br /> buyers.See Details</p>
                        </CarAnnouncement>
                        <CarName>
                            <h2>Model Y</h2>
                            <p>Est. Delivery: May – Jun 2023</p>
                        </CarName>
                        <ButtonGroup>
                            <button>Purchase Price</button>
                            <button>Potential Savings</button>
                        </ButtonGroup>
                        <CarSpeed>
                            <div><span>330 mi</span> <p>Range (est.)</p> </div>
                            <div><span>135 mph</span> <p>Top Speed</p> </div>
                            <div><span>4.8 sec</span> <p>0-60 mph</p></div>
                        </CarSpeed>
                    </CarInfo>
                </CarDetails>
            </Container>
        </div>
    )
}

export default Car
