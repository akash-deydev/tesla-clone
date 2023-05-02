import React from 'react'
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../features/userSlice'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PaymentIcon from '@mui/icons-material/Payment';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link, useNavigate } from "react-router-dom"
import { auth } from '../firebase';

const Container = styled.div`
    display: flex;
    height: 100vh;
`

const LeftContainer = styled.div`
    width: 280px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    margin: 80px 30px;

    div {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 40px;
        cursor: pointer;
        font-size: 20px;
    }
    @media(max-width: 768px) {
        display: none;
    }
`

const RightContainer = styled.div`

`

const Dashboard = () => {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signout = () => {
        auth.signOut().then(() => {
            dispatch(logout())
            navigate("/")
        })
            .catch((err) => alert(err.message))
    }

    return (
        <Container>
            <LeftContainer>
                <Link to="/teslaaccount"><div><HomeIcon /><span>Dashboard</span></div></Link>
                <div><PersonOutlineIcon /> <span>Profile Settings</span> </div>
                <div><PaymentIcon /> <span>Payment Method</span></div>
                <div> <HomeRepairServiceIcon /> <span>Loot Box</span> </div>
                <div> <WorkHistoryIcon /> <span>Order History</span> </div>
                <div onClick={signout}> <ExitToAppIcon /> <span>Sign Out</span> </div>
            </LeftContainer>
            <RightContainer>
                <h1>{user?.displayName + "'s "}Dashboard</h1>
            </RightContainer>
        </Container>
    )
}

export default Dashboard
