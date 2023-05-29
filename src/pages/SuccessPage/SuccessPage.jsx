import styled from "styled-components"
import { Link } from "react-router-dom"

export default function SuccessPage({ movieInfo, setMovieInfo, selectedSeats, setSelectedSeats, userName, setuserName, cpf, setCpf }) {

    var seats = [], i = -1;
    while ((i = selectedSeats.indexOf(1, i + 1)) != -1) { seats.push(i) }
    for (let i = 0; i < seats.length; i++) { seats[i] += 1 }

    const resetData = () => {
        setMovieInfo([]);
        setSelectedSeats([]);
        setuserName('');
        setCpf('');
    }

    return (
        <PageContainer>
            <h1>Pedido feito <br /> com sucesso!</h1>

            <TextContainer data-test="movie-info">
                <strong><p>Filme e sessão</p></strong>
                <p>{movieInfo.movie.title}</p>
                <p>{movieInfo.day.date} - {movieInfo.name}</p>
            </TextContainer>

            <TextContainer data-test="seats-info">
                <strong><p>Ingressos</p></strong>
                {seats.map(seat => (<p key={seat}>Assento {String(seat).padStart(2, '0')}</p>))}
            </TextContainer>

            <TextContainer data-test="client-info">
                <strong><p>Comprador</p></strong>
                <p>{userName}</p>
                <p>CPF: {cpf}</p>
            </TextContainer>

            <Link to={'/'}>
                <button data-test="go-home-btn" onClick={resetData}>Voltar para Home</button>
            </Link>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    color: #293845;
    margin: 30px 20px;
    padding-bottom: 120px;
    padding-top: 70px;
    a {
        text-decoration: none;
    }
    button {
        margin-top: 50px;
    }
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #247A6B;
    }
`
const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    strong {
        font-weight: bold;
        margin-bottom: 10px;
    }
`