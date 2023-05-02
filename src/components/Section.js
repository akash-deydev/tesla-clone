import React from 'react'
import styled from 'styled-components'
import { Slide } from 'react-awesome-reveal'


const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-y.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("images/${props.bgImage}")`};
`

const ItemText = styled.div`
    text-align: center;
    padding-top: 15vh;

    p{
        border-bottom: 1px solid #393c41;
        cursor: pointer;
    }

    p:hover {
        border-bottom-width: 2px;
        color: black;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    opacity: 0.85;
    font-size: 18px;
    cursor: pointer;
    margin: 8px;
    
    @media (max-width: 768px) {
        width: 90vw;
    }
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`


const Section = ({ title, description, backgroundImg, leftBtn, rightBtn }) => {
    return (
        <Wrap bgImage={backgroundImg}>
            <Slide direction='up'>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Slide>

            <Slide direction='up'>
                <ButtonGroup>
                    <LeftButton>{leftBtn}</LeftButton>
                    {
                        rightBtn && <RightButton>{rightBtn}</RightButton>
                    }

                </ButtonGroup>
            </Slide>
        </Wrap>

    )
}

export default Section
