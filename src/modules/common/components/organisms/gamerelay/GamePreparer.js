import React, { useContext, useEffect, useState } from 'react';
import * as FourChoice from 'modules/adult/games/fourchoice/FourChoice';
import { GameContext } from 'contexts/GameContext';
import { RelayContext } from 'contexts/RelayContext';

function gameSwitcher({ gamename, gamedata }) {
  switch (gamename) {
    case 'FOURCHOICE':
      return (
        <>
          <FourChoice.Wizzard data={gamedata}>
            {gamedata.slajds.map((item) => {
              return (
                <FourChoice.Slajd key={item.id} data={item}></FourChoice.Slajd>
              );
            })}
          </FourChoice.Wizzard>
        </>
      );
    case 'NBACK':
      return (
        <>
          <h3>Gra Patrz wstecz jest w trakcie tworzenia</h3>
        </>
      );
    default:
      return 'Error, game name is not correct :( You could check that you mark game name. ';
  }
}

const GamesPreparer = () => {
  const { gamedata, setGamedata } = useContext(GameContext);
  const { relayState, relayDispatch } = useContext(RelayContext);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/games/gamerelay/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(relayState),
    })
      .then((response) => response.json())
      .then((data) => {
        setGamedata(data);
        setIsFetched(true);
      });
  }, []);

  if (isFetched == false) return <div>Przygotowanie gry...</div>;

  return gameSwitcher({ gamename: relayState.gamename, gamedata });
};

export default GamesPreparer;
