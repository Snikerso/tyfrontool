import React, { Suspense, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate';
import MyComponent from 'components/molecules/MyComponents';
import { AuthContext } from 'contexts/AuthContext';
import { ToolContext } from 'contexts/ToolContext';

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));

function App() {
  const [user, setUser] = useState(false);
  const [toolType, setToolType] = useState('SCIENCE');

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <ToolContext.Provider value={{ toolType, setToolType }}>
        <BrowserRouter>
          <MainTemplate>
            <Suspense fallback={<h1>Witaj w Toolu</h1>}>
              {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}

              {/* <MyComponent render={(data) => <div>{data}</div>} /> */}
            </Suspense>
          </MainTemplate>
        </BrowserRouter>
      </ToolContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
