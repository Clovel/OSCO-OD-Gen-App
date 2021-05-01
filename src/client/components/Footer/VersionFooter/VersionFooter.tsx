/* Framework imports ----------------------------------- */
import React from 'react';
import { hot } from 'react-hot-loader';

/* Module imports -------------------------------------- */
import { isDev } from 'helpers/isDev';
import { getVersion } from 'helpers/getVersion';

/* Component imports ----------------------------------- */
import Typography from '@material-ui/core/Typography';

/* VersionFooter component ----------------------------- */
const VersionFooter: React.FC = () => {
  const lVersion: string = isDev() ? 'development' : getVersion();
  return (
    <Typography
      variant="body2"
      style={{ color: '#c1c1c1' }}
      align="center"
    >
      {`OSCO OD Generator (${lVersion})`}
    </Typography>
  );
};

/* Export VersionFooter component ---------------------- */
export default hot(module)(VersionFooter);
