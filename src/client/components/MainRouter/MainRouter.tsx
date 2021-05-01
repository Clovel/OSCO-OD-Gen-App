/* Framework imports ----------------------------------- */
import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

/* Component imports ----------------------------------- */

/* Helpers imports ------------------------------------- */

/* CSS styling for the layout -------------------------- */

/* MainRouter component -------------------------------- */
const MainRouter: React.FC = () => {
  return (
    <Switch>
      {/* <ConfigDependentRoute
        path="/app/projects/new"
        exact
        component={NewProjectDashboard}
      /> */}
    </Switch>
  );
};

/* Export MainRouter component ------------------------- */
export default MainRouter;
