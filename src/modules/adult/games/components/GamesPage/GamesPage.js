import React from 'react';
import styled from 'styled-components';
import GameCard from '../molecules/GameCard';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: left;
  width: 100%;
`;
const StyledWrapperGamesCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 30px;
  width: 100%;
`;

const gamesClassic = [
  {
    id: 1,
    gameName: 'FourChoice',
    description:
      'Klasyczna gra polegająca na wyborze słówka z pośród czterech możliwych, które pasuję do jednego docelowego.',
  },
];

const gamesWorkingMemory = [
  {
    id: 1,
    gameName: 'Patrz wstecz',
    description:
      'Jest to gra polegająca na wybieraniu tłumaczenia słowa które pojawiło się wcześniej',
  },
];

const gamesKids = [
  {
    id: 1,
    gameName: 'Wybierz literki',
    description:
      'Gra polega na wybraniu brakujących liter ze słowa w wybranym języku.',
  },
];

// const mnemotechniczne = [
//   { id: 1, gameName: 'Odgadnij czas', description: 'Twoim zadaniem jest wybranie czasu w jakim jest napisane zdanie' },
// ];
// const mnemotechniczne = [
//   { id: 1, gameName: 'Odgadnij czas', description: 'Twoim zadaniem jest wybranie czasu w jakim jest napisane zdanie' },
// ];
// const niewymagajace słówek = [
//   { id: 1, gameName: 'Odgadnij czas', description: 'Twoim zadaniem jest wybranie czasu w jakim jest napisane zdanie' },
// ];
// const gamesAttention = [
//   { id: 1, gameName: 'Wybierz literki', description: 'LetterChoice' },
// ];

// const gamesExecutionControl = [
//   { id: 1, gameName: 'Wybierz literki', description: 'LetterChoice' },
// ];

const GamePage = () => {
  return (
    <>
      <StyledWrapper>
        <h2>Games</h2>
        <div>Tu jest lista gier ich opis mozliwosc klikniecia i zagrania</div>

        <StyledWrapperGamesCards>
          {gamesClassic.map((game) => {
            return <GameCard game={game} />;
          })}
        </StyledWrapperGamesCards>
      </StyledWrapper>
    </>
  );
};

export default GamePage;
// Dodać: instrukcje, opisy poziomów trudności.
// ile razy grałeś w tą grę
//
