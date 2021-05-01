/* Framework imports ----------------------------------- */
import React from 'react';
import { hot } from 'react-hot-loader';

/* Component imports ----------------------------------- */
import CopyrightFooter from './CopyrightFooter/CopyrightFooter';
import VersionFooter from './VersionFooter/VersionFooter';

/* Footer component ------------------------------------ */
const Footer: React.FC = () => {
  return (
    <>
      <VersionFooter />
      <CopyrightFooter />
    </>
  );
};

/* Export Footer component ----------------------------- */
export default hot(module)(Footer);
