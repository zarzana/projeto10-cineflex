import styled from "styled-components";

export default function Session({ session }) {

    return (
        <SessionContainer data-test="movie-day">
            {session.weekday} - {session.date}
            <ButtonsContainer>
                {session.showtimes.map(showtime => (
                    <button key={showtime.id} data-test="showtime">{showtime.name}</button>
                ))}
            </ButtonsContainer>
        </SessionContainer>
    )
}

const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    button {
        margin-right: 20px;
    }
    a {
        text-decoration: none;
    }
`