/* Framework imports ----------------------------------- */
import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { hot } from 'react-hot-loader';

/* Component imports ----------------------------------- */
import ODPage from 'pages/ODPage/ODPage';

/* Helpers imports ------------------------------------- */

/* CSS styling for the layout -------------------------- */

/* MainRouter component -------------------------------- */
const MainRouter: React.FC = () => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        component={ODPage}
      />
    </Switch>
  );
};

/* Export MainRouter component ------------------------- */
export default hot(module)(MainRouter);
