/* Framework imports ----------------------------------- */
import React from 'react';
import { hot } from 'react-hot-loader';
import { makeStyles } from '@material-ui/core';

/* Component imports ----------------------------------- */
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

/* CSS styling ----------------------------------------- */
const useStyles = makeStyles(
  (pTheme) => (
    {
      backdrop: {
        zIndex: 999,
        color: '#ffffff',
      },
    }
  ),
);

/* Loading component prop types ------------------------ */
interface LoadingProps {
  isLoading: boolean;
}

/* Loading component ----------------------------------- */
const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  const classes = useStyles();

  return (
    <Backdrop
      className={classes.backdrop}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

/* Export Loading component ----------------------------- */
export default hot(module)(Loading);
