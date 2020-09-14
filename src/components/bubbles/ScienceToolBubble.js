import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'components/pages/HomePage';
import AnnouncementPage from 'components/pages/AnnouncementPage';

function ScienceToolBubble() {
  return (
    <Switch>
      <Route exact path="/" render={() => <HomePage />} />
      <Route
        exact
        path="/announcements"
        render={() => <AnnouncementPage toolType="ART" />}
      />
    </Switch>
  );
}

export default ScienceToolBubble;
