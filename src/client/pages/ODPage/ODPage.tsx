/* Framework imports ----------------------------------- */
import React, { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

/* Component imports ----------------------------------- */
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
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
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...rest}
    >
      {
        value === index && (
          <Box p={3}>
            <Typography>
              {children}
            </Typography>
          </Box>
        )
      }
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
          <Tab
            label="Item One"
            {...a11yProps(0)}
          />
          <Tab
            label="Item Two"
            {...a11yProps(1)}
          />
          <Tab
            label="Item Three"
            {...a11yProps(2)}
          />
          <Tab
            label="Item Four"
            {...a11yProps(3)}
          />
          <Tab
            label="Item Five"
            {...a11yProps(4)}
          />
          <Tab
            label="Item Six"
            {...a11yProps(5)}
          />
          <Tab
            label="Item Seven"
            {...a11yProps(6)}
          />
        </Tabs>
      </AppBar>
      <TabPanel
        value={value}
        index={0}
      >
        Item One
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
      >
        Item Two
      </TabPanel>
      <TabPanel
        value={value}
        index={2}
      >
        Item Three
      </TabPanel>
      <TabPanel
        value={value}
        index={3}
      >
        Item Four
      </TabPanel>
      <TabPanel
        value={value}
        index={4}
      >
        Item Five
      </TabPanel>
      <TabPanel
        value={value}
        index={5}
      >
        Item Six
      </TabPanel>
      <TabPanel
        value={value}
        index={6}
      >
        Item Seven
      </TabPanel>
    </div>
  );
};

/* Export ODPage component ----------------------------- */
export default ODPage;
