import React, { Suspense, useContext } from 'react';
import AuthenticatedTemplate from '../components/templates/AuthenticatedTemplate';
import { ToolContext } from 'contexts/ToolContext';

const ScienceToolBubble = React.lazy(() =>
  import('components/bubbles/ScienceToolBubble')
);
const ArtToolBubble = React.lazy(() =>
  import('components/bubbles/ArtToolBubble')
);

function AuthenticatedApp() {
  const { toolType } = useContext(ToolContext);

  return (
    <>
      <AuthenticatedTemplate>
        <Suspense fallback={<h1>Witaj w Toolu</h1>}>
          {toolType === 'SCIENCE' ? <ScienceToolBubble /> : <ArtToolBubble />}
        </Suspense>
      </AuthenticatedTemplate>
    </>
  );
}

export default AuthenticatedApp;
