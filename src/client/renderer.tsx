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

/* Notes ----------------------------------------------- */
/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

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
