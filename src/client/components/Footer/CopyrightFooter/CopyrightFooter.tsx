/* Framework imports ----------------------------------- */
import React from 'react';

/* Component imports ----------------------------------- */
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

/* CopyrightFooter component --------------------------- */
const CopyrightFooter: React.FC = () => {
  return (
    <Typography
      variant="body2"
      style={{ color: '#c1c1c1' }}
      align="center"
    >
      {'Developed with ❤️ by '}
      <Link
        color="inherit"
        href="https://github.com/Clovel"
      >
        {'Clovel'}
      </Link>
      {', © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

/* Export CopyrightFooter component -------------------- */
export default CopyrightFooter;
