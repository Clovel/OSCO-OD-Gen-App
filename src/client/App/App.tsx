/* Framework imports ----------------------------------- */
import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { hot } from 'react-hot-loader';

/* Layout imports -------------------------------------- */

/* Component imports ----------------------------------- */
import CssBaseline from '@material-ui/core/CssBaseline';
import Grow from '@material-ui/core/Grow';
import { SnackbarProvider } from 'notistack';
import Dashboard from 'layouts/Dashboard/Dashboard';

/* Type imports ---------------------------------------- */
import type { TransitionProps } from '@material-ui/core/transitions/transition';

/* App component --------------------------------------- */
const App: React.FC = () => {
  return (
    <main>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={6}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={3000}
        TransitionComponent={Grow as React.ComponentType<TransitionProps>}
      >
        <Router>
          <Switch>
            <Route
              path="/"
              component={Dashboard}
            />
          </Switch>
        </Router>
      </SnackbarProvider>
    </main>
  );
};

/* Export App component -------------------------------- */
export default hot(module)(App);
