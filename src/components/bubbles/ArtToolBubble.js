import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'components/pages/HomePage';
import AnnouncementPage from 'components/pages/AnnouncementPage';

function ArtToolBubble() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route
        exact
        path="/announcements"
        render={() => <AnnouncementPage toolType="SCIENCE" />}
      />
    </Switch>
  );
}

export default ArtToolBubble;
