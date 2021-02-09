import React, { Suspense } from 'react';

import { Route } from 'react-router-dom';

const HomeKidsPage = React.lazy(() =>
  import('modules/kids/home/components/pages/HomeKidsPage')
);

const ChooseLetters = React.lazy(() =>
  import('modules/kids/games/choose_letters/ChooseLetters')
);

function UnauthenticatedKidsApp() {
  return (
    <>
      <div>
        <Suspense fallback={'Hello !'}>
          <Route exact path="/" render={() => <HomeKidsPage />} />
          <Route
            exact
            path="/games"
            render={() => <div>tu bedzie lista gier</div>}
          />
          <Route
            exact
            path="/games/choose-letters"
            render={() => <ChooseLetters />}
          />
        </Suspense>
      </div>
    </>
  );
}

export default UnauthenticatedKidsApp;
