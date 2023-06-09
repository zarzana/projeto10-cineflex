import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styled from "styled-components"
import Seat from './Seat';

export default function SeatsPage({ movieInfo, setMovieInfo, selectedSeats, setSelectedSeats, userName, setuserName, cpf, setCpf }) {

    const { idSessao } = useParams();
    const navigate = useNavigate()

    const getSeats = () => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`;
        const promise = axios.get(URL);
        promise.then((response) => {
            setMovieInfo(response.data);
            let updatedSelectedSeats = [];
            response.data.seats.forEach(seat => {
                if (seat.isAvailable === true) { updatedSelectedSeats.push(0) }
                else { updatedSelectedSeats.push(2) }
            });
            setSelectedSeats(updatedSelectedSeats);
        });
        promise.catch((error) => { console.log(error.response.data) });
    }

    useEffect(getSeats, [])

    const submitData = (e) => {

        e.preventDefault();

        var seatIds = [], i = -1;
        while ((i = selectedSeats.indexOf(1, i + 1)) != -1) { seatIds.push(i) }
        for (let i = 0; i < seatIds.length; i++) { seatIds[i] = movieInfo.seats[seatIds[i]]['id'] }

        const request = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", {
            'ids': seatIds,
            'name': userName,
            'cpf': cpf
        })

        request.then(() => navigate("/sucesso")) 

    }

    if (movieInfo.seats === undefined) { return; }  // stops execution

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                {movieInfo.seats.map(seat => (
                    <Seat key={seat.id} seat={seat}
                        selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
                ))}
            </SeatsContainer>

            <CaptionContainer>
                <CaptionItem>
                    <CaptionCircle state={1} />
                    Selecionado
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle state={0} />
                    Disponível
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle state={2} />
                    Indisponível
                </CaptionItem>
            </CaptionContainer>

            <FormContainer>

                <form onSubmit={submitData}>
                    Nome do Comprador:
                    <input type="text" value={userName} onChange={e => setuserName(e.target.value)} data-test="client-name" />
                    CPF do Comprador:
                    <input type="number" value={cpf} onChange={e => setCpf(e.target.value)} data-test="client-cpf" />
                    <button type="submit" data-test="book-seat-btn">Reservar Assento(s)</button>
                </form>

            </FormContainer>

            <FooterContainer data-test="footer">
                <div>
                    <img src={movieInfo.movie.posterURL} alt={movieInfo.movie.title} />
                </div>
                <div>
                    <p>{movieInfo.movie.title}</p>
                    <p>{movieInfo.day.weekday} - {movieInfo.name}</p>
                </div>
            </FooterContainer>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`
const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const FormContainer = styled.div`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`
const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const CaptionCircle = styled.div`
    border: ${(props) => (
        props.state === 0 ? '1px solid #7B8B99' :
            props.state === 1 ? '1px solid #0E7D71' : '1px solid #F7C52B'
    )};
    background-color: ${(props) => (
        props.state === 0 ? '#C3CFD9' :
            props.state === 1 ? '#1AAE9E' : '#FBE192'
    )};;
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`
const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`