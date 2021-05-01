/* Framework imports ----------------------------------- */
import React from 'react';
import { withRouter } from 'react-router';

/* Component imports ----------------------------------- */
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

/* ErrorBoundary component ----------------------------- */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(pError) {
    console.log(pError);
    return { hasError: true };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.location && this.props.location && prevProps.location.pathname !== this.props.location.pathname && this.state.hasError) {
      this.setState({ hasError: false });
      console.log('Resetting error boundary because path changed.');
    }
  }

  componentDidCatch(pError, pErrorInfo) {
    console.error(pError, pErrorInfo);
  }

  render() {
    if(this.state.hasError) {
      return (
        <Grid
          container
          spacing={6}
        >
          <Grid
            item
            xs={3}
          >
            {' '}
          </Grid>
          <Grid
            item
            xs={6}
          >
            <Paper style={{ padding: 25, textAlign: 'center' }}>
              <h1>
                Oups... 😅
              </h1>
              <br />
              <h3 style={{ color: '#a0a0a0', fontWeight: 300 }}>
                Une erreur est survenue lors de l'affichage de cette page.
                <br />
                <br />
                Vous pouvez tenter de réessayer, ou bien contacter les développeurs.
              </h3>
            </Paper>
          </Grid>
          <Grid
            item
            xs={3}
          >
            {' '}
          </Grid>
        </Grid>
      );
    }
    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

/* Export ErrorBoundary component ---------------------- */
export default withRouter(ErrorBoundary);
