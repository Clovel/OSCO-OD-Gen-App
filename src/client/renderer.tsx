/* Framework imports ----------------------------------- */
import React from 'react';
import ReactDOM from 'react-dom';

/* Module imports -------------------------------------- */
import { ThemeProvider } from '@material-ui/core/styles';
import MUITheme from './muiTheme';

/* Helper imports -------------------------------------- */
import { isDev } from 'helpers/isDev';

/* Component imports ----------------------------------- */
import App from './App/App';

/* Say something */
console.log('[INFO ] <renderer> Renderer execution started');

/* Render application in DOM */
ReactDOM.render(
  <ThemeProvider theme={MUITheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('react-target'),
);

// Hot module replacement
if(isDev() && module.hot) module.hot.accept();
