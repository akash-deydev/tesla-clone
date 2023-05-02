import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;


    li {
        list-style: none;
        padding: 0 10px;
        font-weight: 600;
        cursor: pointer;
    }
`

const Footer = () => {
    return (
        <Container>
            <li>Tesla ©2023</li>
            <li>Privacy & Legal</li>
            <li>Vehicle Recalls</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>News</li>
            <li>Engage</li>
            <li>Location</li>
        </Container>
    )
}

export default Footer
