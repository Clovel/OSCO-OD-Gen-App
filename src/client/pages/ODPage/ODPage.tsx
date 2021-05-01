/* Framework imports ----------------------------------- */
import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import { makeStyles, Theme } from '@material-ui/core/styles';

/* Component imports ----------------------------------- */
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

/* CSS styling ----------------------------------------- */
const useStyles = makeStyles(
  (pTheme: Theme) => (
    {
      root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: pTheme.palette.background.paper,
      },
    }
  ),
);

/* Internal variables ---------------------------------- */
interface TabInfo {
  label: React.ReactNode;
  component: React.ReactNode;
}

const sTabs: TabInfo[] = [
  {
    label: 'EDS file',
    component: 'EDS file',
  },
  {
    label: 'Item Two',
    component: 'Item Two',
  },
  {
    label: 'Item Three',
    component: 'Item Three',
  },
  {
    label: 'Item Four',
    component: 'Item Four',
  },
  {
    label: 'Item Five',
    component: 'Item Five',
  },
  {
    label: 'Item Six',
    component: 'Item Six',
  },
  {
    label: 'Item Seven',
    component: 'Item Seven',
  },
];

/* Helper functions ------------------------------------ */
const a11yProps = (index: any) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
};

/* TabPanel component prop types ----------------------- */
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
  rest?: any[];
}

/* TabPanel component ---------------------------------- */
const TabPanel: React.FC<TabPanelProps> = (
  {
    children,
    index,
    value,
    rest,
  },
) => {
  return (
    <div
      role="tabpanel"
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...rest}
    >
      <Box p={3}>
        {children}
      </Box>
    </div>
  );
};

/* ODPage component prop types ------------------------- */
interface ODPageProps {}

/* ODPage component ------------------------------------ */
const ODPage: React.FC<ODPageProps> = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<Record<string, unknown>>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="default"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {
            sTabs.map(
              (pTabInfo, pIndex) => {
                return (
                  <Tab
                    key={pIndex}
                    label={pTabInfo.label}
                    {...a11yProps(pIndex)}
                  />
                );
              },
            )
          }
        </Tabs>
      </AppBar>
      <Box
        id={`scrollable-auto-tabpanel-${value}`}
        aria-labelledby={`scrollable-auto-tab-${value}`}
        role="tabpanel"
        p={3}
      >
        {sTabs[value].component}
      </Box>
    </div>
  );
};

/* Export ODPage component ----------------------------- */
export default hot(module)(ODPage);
