import React, { useContext } from 'react';
import { AuthContext } from 'contexts/AuthContext';

function UnauthenticatedApp() {
  const { setUser } = useContext(AuthContext);
  return (
    <>
      <div> nie jestes zalogowany</div>
      <button onClick={() => setUser(true)}>Login</button>
    </>
  );
}

export default UnauthenticatedApp;
