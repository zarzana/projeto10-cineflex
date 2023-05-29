import styled from "styled-components"

export default function Seat({ seat, selectedSeats, setSelectedSeats }) {

    const seatId = seat.name - 1;
    const currentSeatState = selectedSeats[seatId]

    const clickHandler = () => {
        if (currentSeatState === 0) {
            let updatedSelectedSeats = [...selectedSeats];
            updatedSelectedSeats[seatId] = 1;
            setSelectedSeats(updatedSelectedSeats);
        }
        else if (currentSeatState === 1) {
            let updatedSelectedSeats = [...selectedSeats];
            updatedSelectedSeats[seatId] = 0;
            setSelectedSeats(updatedSelectedSeats);
        }
        else {
            alert('Esse assento não está disponível');
        }
    }

    return (
        <SeatItem key={seat.id} onClick={clickHandler} currentSeatState={currentSeatState}>
            {String(seat.name).padStart(2, '0')}
        </SeatItem>
    )

}

const SeatItem = styled.div`
    border: ${(props) => (
        props.currentSeatState === 0 ? '1px solid #7B8B99' :
            props.currentSeatState === 1 ? '1px solid #0E7D71' : '1px solid #F7C52B'
    )};
    background-color: ${(props) => (
        props.currentSeatState === 0 ? '#C3CFD9' :
            props.currentSeatState === 1 ? '#1AAE9E' : '#FBE192'
    )};;
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`