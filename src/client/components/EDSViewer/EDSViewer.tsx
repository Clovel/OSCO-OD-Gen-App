/* Framework imports ----------------------------------- */
import React from 'react';
import { hot } from 'react-hot-loader';

/* Component imports ----------------------------------- */
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import ini from 'react-syntax-highlighter/dist/esm/languages/prism/ini';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

/* Register the syntax highlighter language ------------ */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
SyntaxHighlighter.registerLanguage('ini', ini);
/* eslint-enable @typescript-eslint/no-unsafe-member-access */
/* eslint-enable @typescript-eslint/no-unsafe-call */

/* EDSViewer component prop types ---------------------- */
interface EDSViewerProps {
  edsFileContents: string;
}

/* EDSViewer component --------------------------------- */
const EDSViewer: React.FC<EDSViewerProps> = ({ edsFileContents }) => {
  return (
    <SyntaxHighlighter
      language="ini"
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      style={darcula}
      wrapLines
      showLineNumbers
    >
      {edsFileContents}
    </SyntaxHighlighter>
  );
};

/* Export EDSViewer component -------------------------- */
export default hot(module)(EDSViewer);
