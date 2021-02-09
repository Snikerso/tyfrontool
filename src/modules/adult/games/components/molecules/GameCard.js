import React, { useState } from 'react';
import styled from 'styled-components';
import GameRelay from 'modules/common/components/organisms/gamerelay/GameRelay';

const StyledWrapper = styled.div`
  width: 300px;
  height: 200px;
  border: 2px solid black;
  margin: 20px;
`;

const GameCard = ({ game }) => {
  const [isGameChooseForm, setIsGameChooseForm] = useState(false);

  const handleGameChooseForm = () => {
    setIsGameChooseForm(!isGameChooseForm);
  };

  return (
    <>
      <StyledWrapper>
        <h3>{game.gameName}</h3>
        <p>{game.description}</p>
        <button onClick={() => handleGameChooseForm()}>Zagraj</button>
        <button onClick={() => handleGameChooseForm()}>Statystyki</button>
        <button onClick={() => handleGameChooseForm()}>Więcej</button>

        {isGameChooseForm ? (
          <>
            <GameRelay typeGameRelay={game.gameName} />
          </>
        ) : null}
      </StyledWrapper>
    </>
  );
};

export default GameCard;
