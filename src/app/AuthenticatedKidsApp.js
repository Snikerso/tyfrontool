import React, { Suspense } from 'react';

import { Route } from 'react-router-dom';
import styled from 'styled-components';

const HomeKidsPage = React.lazy(() =>
  import('modules/kids/home/components/pages/HomeKidsPage')
);
const ChooseLetters = React.lazy(() =>
  import('modules/kids/games/choose_letters/ChooseLetters')
);

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const StyledWrapperKids = styled.div`
  display: flex;
`;
const StyledKid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  width: 200px;
  height: 200px;
  :hover {
    cursor: pointer;
  }
`;

function AuthenticatedKidsApp({ authState, authDispatch }) {
  return (
    <>
      <div>
        <Suspense fallback={'Hello !'}>
          <Route exact path="/" render={() => <HomeKidsPage />} />
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

export default AuthenticatedKidsApp;
