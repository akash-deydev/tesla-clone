import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    a{
        font-weight: 600;
        padding: 5px 10px;
        border-radius: 4px;
        flex-wrap: nowrap;
        transition: 0.3s ease-in-out;
    }

    a:hover {
        background-color: #f4f4f4;
    }


    @media(max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    a{
        border-radius: 4px;
        font-weight: 600;
        padding: 5px 10px;
        flex-wrap: nowrap;
        transition: 0.3s ease-in-out;
    }

    a:hover{
        background-color: #f4f4f4;
    }

    @media(max-width: 768px) {
       
    }
`

const SideNav = styled.div`
    position: fixed;
    top:0;
    bottom:0;
    right:0;
    background: white;
    width: 300px;
    z-index: 100;
    list-style: none;
    padding: 20px;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    overflow-y: scroll;

        li {
            padding: 15px 0;
        }
        
        a{
            font-weight: 600;
            padding: 10px;
            transition: all .3s;
        }

        a:hover {
            background: #f4f4f4;
            width: 256px;
            border-radius: 4px;
        }

        @media(max-width: 768px) {
            width: 256px;
        }
    

`

const CustomClose = styled.div`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`


const Header = () => {

    const [sideNavOpen, setSideNavOpen] = useState(false);

    return (
        <Container>
            <Link to="/">
                <img src="/images/logo.svg" alt="logo" />
            </Link>
            <Menu>
                <Link to='/'>Model S</Link>
                <Link to='/'>Model 3</Link>
                <Link to='/'>Model X</Link>
                <Link to='/'>Model Y</Link>
                <Link to='/'>Solar Roof</Link>
                <Link to='/'>Solar Panel</Link>
                <Link to='/'>Power wall</Link>
            </Menu>
            <RightMenu>
                <Link to=''>Shop</Link>
                <Link to='/login'>Account</Link>
                <Link to='' onClick={() => setSideNavOpen(true)}>Menu</Link>
            </RightMenu>
            <SideNav show={sideNavOpen}>
                <CloseWrapper>
                    <CustomClose onClick={() => setSideNavOpen(false)}><CloseIcon /></CustomClose>
                </CloseWrapper>
                <div className='menu-items'>
                    <li><Link href=''>Existing Inventory</Link></li>
                    <li><Link href=''>Used Inventory</Link></li>
                    <li><Link href=''>Trade-In</Link></li>
                    <li><Link href=''>Demo Drive</Link></li>
                    <li><Link href=''>Insurance</Link></li>
                    <li><Link href=''>Fleet</Link></li>
                    <li><Link href=''>Cybertruck</Link></li>
                    <li><Link href=''>Roadster</Link></li>
                    <li><Link href=''>Semi</Link></li>
                    <li><Link href=''>Charging</Link></li>
                    <li><Link href=''>Commercial Energy</Link></li>
                    <li><Link href=''>Utilities</Link></li>
                    <li><Link href=''>Find Us</Link></li>
                    <li><Link href=''>Support</Link></li>
                    <li><Link href=''>Investor Relations</Link></li>
                </div>
            </SideNav>
        </Container>
    )
}

export default Header
