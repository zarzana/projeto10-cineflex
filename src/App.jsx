import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import { useState } from 'react';

export default function App() {

    axios.defaults.headers.common['Authorization'] = 'Fxjk1r6zE4PiUsz1zfhA34GZ';

    const [movieInfo, setMovieInfo] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [userName, setuserName] = useState('');
    const [cpf, setCpf] = useState('');

    return (
        <BrowserRouter>

            <NavContainer>CINEFLEX</NavContainer>

            <Routes>

                <Route path="/" element={<HomePage />} />
                <Route path="/sessoes/:idFilme" element={<SessionsPage />} />
                <Route path="/assentos/:idSessao" element={<SeatsPage
                    movieInfo={movieInfo} setMovieInfo={setMovieInfo}
                    selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}
                    userName={userName} setuserName={setuserName}
                    cpf={cpf} setCpf={setCpf} />} />
                <Route path="/sucesso" element={<SuccessPage
                    movieInfo={movieInfo} setMovieInfo={setMovieInfo}
                    selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}
                    userName={userName} setuserName={setuserName}
                    cpf={cpf} setCpf={setCpf} />} />

            </Routes>

        </BrowserRouter>
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
