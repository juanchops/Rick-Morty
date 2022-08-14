import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import api from '../service/api';
import { CardGrid, Card, Header, Spinner } from './css';

const Titulo = styled.h1`
    text-align: center;
    font-family: 'Get Schwifty';
    text-transform: uppercase;
    font-size: 4rem;
    color: #0FAAD5;
    -webkit-text-stroke: 1px #f5f5f5;

    @media only screen and (max-width: 600px) {
      text-align: center;
      font-size: 2.5em;
    }

    span {
      color: #21d8ff;
    }
`;

// function getClickablePages(actualPage) {
//     const offsets = [0, 1, 2, 3, 4];
//     return offsets.map(number => parseInt(actualPage, 10) + number);
// }

// function getPage(direction, actualPage) {
//     const nextPage = parseInt(actualPage, 10) + direction;
//     return nextPage >= 0 ? nextPage : 1;
// }

export default function Episodios({ match }) {

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  // const clickablePages = getClickablePages(Number(match.params.page) || 1);
  const page = Number(match.params.page) || 1;

    useEffect(() => {
        async function loadData() {
            setLoading(true);
            const apiResponse = await api.get(`/?page=${page}`);

            setCharacters(apiResponse.data.results);
            setLoading(false);
        }

        loadData();
    }, [match.params.page, page]);

    function setDisplayEpisodes(id) {
      setCharacters(
        characters.map(char =>
                char.id === id
                ? { ...char, displayEpisodes: !char.displayEpisodes } : char
            )
        );
    }

    return ( 
        <>
        <Header>
            <Titulo>Ricky and Morty</Titulo>
          {/* <ul>
            <Link to={`/${getPage(-1, page)}`}>
              <li> Anterior </li>
            </Link>
            {clickablePages.map(pageNumber => (
              <Link to={`/${pageNumber}`} key={pageNumber}>
                <PageNumber actualPage={pageNumber === page}>
                  {pageNumber}
                </PageNumber>
              </Link>
            ))}
            <Link to={`/${getPage(1, page)}`}>
              <li> Siguiente </li>
            </Link>
          </ul> */}
        </Header>
        <CardGrid loading={loading}>
        {loading ? (
          <Spinner />
        ) : (
          characters.map(char => (
            <Card
              key={char.id}
              onClick={() => setDisplayEpisodes(char.id)}
              displayEpisodes={char.displayEpisodes}
            >
              <img src={char.image} alt={char.name} />
              <section>
                <header>
                  <h2>
                    <span>{char.id} - {char.name}</span> 
                  </h2>
                  <h3>
                    {char.species} - {char.status}
                  </h3>
                </header>
              </section>
              <ul>
                <p>Episodes:</p>
                {char.episode
                  .map(epi => epi.split('/episode/')[1])
                  .map(epi => (
                    <li key={char.id + epi}>{epi}</li>
                  ))}
              </ul>
            </Card>
          ))
        )}
      </CardGrid>
      </>
    );
}