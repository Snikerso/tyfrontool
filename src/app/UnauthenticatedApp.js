import React, { Suspense, useState } from 'react';
import { Route } from 'react-router-dom';
import { BaseContext } from 'contexts/BaseContext';
import { GameContext } from 'contexts/GameContext';

import UnauthenticatedTemplate from 'modules/common/components/templates/UnauthenticatedTemplate/UnauthenticatedTemplate';
import GameRelay from 'modules/common/components/organisms/gamerelay/GameRelay';
import RegisterPage from 'modules/adult/register/components/RegisterPage/RegisterPage';
import LoginPage from 'modules/adult/login/components/LoginPage/LoginPage';

const UnauthenticatedKidsApp = React.lazy(() =>
  import('app/UnauthenticatedKidsApp')
);
const HomePage = React.lazy(() =>
  import('modules/adult/home/components/HomePage/HomePage')
);
const GamesPage = React.lazy(() =>
  import('modules/adult/games/components/GamesPage/GamesPage')
);
const BasesPage = React.lazy(() =>
  import('modules/adult/bases/components/BasesPage/BasesPage')
);
const WordsPage = React.lazy(() =>
  import('modules/adult/words/components/WordsPage/WordsPage')
);
const GamesPreparer = React.lazy(() =>
  import('modules/common/components/organisms/gamerelay/GamePreparer')
);

function UnauthenticatedApp({ authState, authDispatch }) {
  const [basesState, setBasesState] = useState([]);

  return (
    <>
      {authState.isKids ? (
        // To jest niezalogowany uzytkownik dziecko
        <UnauthenticatedTemplate
          authState={authState}
          authDispatch={authDispatch}
        >
          <UnauthenticatedKidsApp />
        </UnauthenticatedTemplate>
      ) : (
        <>
          <BaseContext.Provider value={{ basesState, setBasesState }}>
            <GameContext.Provider value={{}}>
              <UnauthenticatedTemplate
                authState={authState}
                authDispatch={authDispatch}
              >
                <Suspense fallback={'Hello !!'}>
                  <Route exact path="/" render={() => <HomePage />} />
                  <Route exact path="/games" render={() => <GamesPage />} />
                  <Route
                    exact
                    path="/games/game"
                    render={() => <GamesPreparer />}
                  />
                  <Route exact path="/game-relay" component={GameRelay} />
                  <Route exact path="/base" render={() => <BasesPage />} />
                  <Route path="/base/:id" render={() => <WordsPage />} />
                  <Route path="/login" render={() => <LoginPage />} />
                  <Route path="/register" render={() => <RegisterPage />} />
                  <Route
                    exact
                    path="/kids"
                    render={() => <UnauthenticatedKidsApp />}
                  />
                </Suspense>
              </UnauthenticatedTemplate>
            </GameContext.Provider>
          </BaseContext.Provider>
        </>
      )}
    </>
  );
}

export default UnauthenticatedApp;
