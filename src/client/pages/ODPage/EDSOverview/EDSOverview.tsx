/* Framework imports ----------------------------------- */
import React from 'react';
import { hot } from 'react-hot-loader';

/* Component imports ----------------------------------- */
import Grid from '@material-ui/core/Grid';
import EDSViewer from 'components/EDSViewer/EDSViewer';

/* CSS styling ----------------------------------------- */

/* Example data ---------------------------------------- */
import { exampleEDSFileContents } from './eds-example-string';

/* EDSViewer component prop types ---------------------- */
interface EDSViewerProps {}

/* EDSViewer component --------------------------------- */
const EDSOverview: React.FC<EDSViewerProps> = () => {
  return (
    <Grid
      container
    >
      <Grid
        item
        xs={6}
      >
        <EDSViewer edsFileContents={exampleEDSFileContents} />
      </Grid>
      <Grid
        item
        xs={6}
      >
        <div className="view-pane">
          Object Dictionary overview
        </div>
      </Grid>

    </Grid>
  );
};

/* Export EDSViewer component -------------------------- */
export default hot(module)(EDSOverview);
