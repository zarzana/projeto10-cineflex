import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from "styled-components";
import MoviePoster from './MoviePoster';
import { Link } from "react-router-dom"

export default function HomePage() {

    const [movies, setMovies] = useState([])

    const getMovies = () => {
        const URL = 'https://mock-api.driven.com.br/api/v8/cineflex/movies';
        const promise = axios.get(URL);
        promise.then((response) => { setMovies(response.data) });
        promise.catch((error) => { console.log(error.response.data) });
    }

    useEffect(getMovies, [])

    return (
        <PageContainer>
            Selecione o filme

            <ListContainer>

                {movies.map(movie => (
                    <Link key={movie.id} to={`/sessoes/${movie.id}`}>
                        <MoviePoster src={movie.posterURL} alt={movie.title} />
                    </Link>
                ))}

            </ListContainer>

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
    padding-top: 70px;
`
const ListContainer = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`