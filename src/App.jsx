import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"

export default function App() {

    axios.defaults.headers.common['Authorization'] = 'Fxjk1r6zE4PiUsz1zfhA34GZ';

    return (
        <>
            <NavContainer>CINEFLEX</NavContainer>
            
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<HomePage />} />
                    {/* <Route path="/sessoes/:idFilme" element={<SeatsPage />} /> */}
                    {/* <Route path="/assentos/:idSessao" element={<SessionsPage />} /> */}
                    {/* <Route path="/sucesso" element={<SuccessPage />} /> */}
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
