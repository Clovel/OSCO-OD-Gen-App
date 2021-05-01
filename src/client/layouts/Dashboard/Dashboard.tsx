/* Framework imports ----------------------------------- */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

/* Component imports ----------------------------------- */
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import SideBar from './SideBar/SideBar';
import AppBar from './AppBar/AppBar';
import { withScrollToTopDeclaration } from './ScrollToTop/ScrollToTop';
import ErrorBoundary from 'pages/ErrorBoundary/ErrorBoundary';
import Footer from 'components/Footer/Footer';
import MainRouter from 'layouts/Dashboard/MainRouter/MainRouter';

/*
 * Cloned from https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/dashboard
 */

/* CSS styling for the layout -------------------------- */
const useStyles = makeStyles(
  (pTheme) => (
    {
      root: {
        display: 'flex',
        background: 'rgb(255 251 247)',
      },
      toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
      },
      appBarSpacer: pTheme.mixins.toolbar,
      content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      },
      container: {
        padding: pTheme.spacing(6),
      },
    }
  )
);

interface DashboardProps {
  addToScrollToTop?: React.LegacyRef<HTMLElement>;
}

/* Dashboard layout component -------------------------- */
const Dashboard: React.FC<DashboardProps> = ({ addToScrollToTop }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar
        open={open}
      />
      <SideBar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />

      <main
        className={classes.content}
        ref={addToScrollToTop}
      >
        <div className={classes.appBarSpacer} />
        <Container
          maxWidth={false}
          className={classes.container}
        >
          <ErrorBoundary>
            <MainRouter />
          </ErrorBoundary>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
};

/* Export Dashboard layout component ------------------- */
export default withScrollToTopDeclaration(Dashboard) as React.FC;
