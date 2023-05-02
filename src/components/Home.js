import React from 'react'
import styled from 'styled-components'
import Section from './Section';
import Header from './Header';


const Container = styled.div`
    height: 100vh;
`

const Home = () => {
    return (
        <Container>
            <Header />
            <Section title="Model Y" description="View Inventory" backgroundImg="model-y.jpg" leftBtn="Order Now" rightBtn="Demo Drive" />

            <Section title="Model 3" description="View Inventory" backgroundImg="model-3.jpg" leftBtn="Order Now" rightBtn="Demo Drive" />

            <Section title="Model S" description="View Inventory" backgroundImg="model-s.jpg" leftBtn="Order Now" rightBtn="Demo Drive" />

            <Section title="Model X" description="View Inventory" backgroundImg="model-x.jpg" leftBtn="Order Now" rightBtn="Demo Drive" />

            <Section title="Solar Panels" description="Lowest Cost Solar Panels In America" backgroundImg="solar-panel.jpg" leftBtn="Order Now" rightBtn="Learn More" />

            <Section title="Solar Roof" description="Produce Clear Energy From Your Roof" backgroundImg="solar-roof.jpg" leftBtn="Order Now" rightBtn="Learn More" />

            <Section title="Accessories" backgroundImg="accessories.jpg" leftBtn="Shop Now" />
        </Container>
    )
}

export default Home
