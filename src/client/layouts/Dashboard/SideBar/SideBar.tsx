/* Framework imports ----------------------------------- */
import React, { useMemo, forwardRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { hot } from 'react-hot-loader';

/* Component imports ----------------------------------- */
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import AccountTreeIcon from '@material-ui/icons/AccountTreeOutlined';
import LayersIcon from '@material-ui/icons/LayersOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';

/* Type imports ---------------------------------------- */
import type { OverridableComponent } from '@material-ui/core/OverridableComponent';
import type { SvgIconTypeMap } from '@material-ui/core/SvgIcon';

/* Helpers imports ------------------------------------- */
import { getElectonPath } from 'client/ipc/IPCRenderer';

/* CSS styling for the layout -------------------------- */
import { colorMajor, colorMinor } from 'client/muiTheme';
const drawerWidth = 240;
const useStyles = makeStyles(
  (pTheme) => (
    {
      root: {
        display: 'flex',
      },
      drawerPaper: {
        overflow: 'hidden',
        position: 'relative',
        background: `linear-gradient(45deg, #020024 0%, ${colorMajor} 90%, ${colorMinor} 100%)`,
        whiteSpace: 'nowrap',
        border: 0,
        boxShadow: '0 3px 20px 4px rgba(185, 165, 139, .15)',
        width: drawerWidth,
        transition: pTheme.transitions.create(
          'width',
          {
            easing: pTheme.transitions.easing.sharp,
            duration: pTheme.transitions.duration.enteringScreen,
          }),
      },
      drawerPaperClose: {
        overflowX: 'hidden',
        transition: pTheme.transitions.create(
          'width',
          {
            easing: pTheme.transitions.easing.sharp,
            duration: pTheme.transitions.duration.leavingScreen,
          },
        ),
        width: pTheme.spacing(7),
        [pTheme.breakpoints.up('sm')]: {
          width: pTheme.spacing(9),
        },
      },
      menuRoot: {
        color: '#ffefc999',
        borderRadius: 15,
        marginLeft: 17,
        marginRight: 15,
        marginTop: 5,
        height: 55,
        transition: '0.4s',
        '&:hover': {
          marginLeft: 10,
          color: '#ffefc999',
        },
      },
      menuRootSelected: {
        color: `${colorMajor}`,
        backgroundColor: 'rgb(255 251 247) !important',
        borderRadius: 15,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        marginLeft: 10,
        marginRight: 15,
        '&:hover': {
          color: `${colorMajor}`,
        },
      },
      toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
      },
      toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...pTheme.mixins.toolbar,
      },
    }
  ),
);

const CustomLink = (pDestination: string) => useMemo(
  () => (
    forwardRef(
      (pLinkProps: any[], pRef: React.Ref<HTMLAnchorElement>) => {
        return (
          <Link
            ref={pRef}
            to={pDestination}
            {...pLinkProps}
          />
        );
      },
    )
  ),
  [pDestination],
);

/* SideBarItem component prop types -------------------- */
interface SideBarNavItemProps {
  path: string;
  text: string;
  IconComponent: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
  mustBeExact?: boolean;
  disabled?: boolean;
}

const SideBarNavItem: React.FC<SideBarNavItemProps> = ({ path, text, IconComponent, mustBeExact = false, disabled = false }) => {
  const classes = useStyles();
  const history = useHistory();

  const isActive = mustBeExact ? history.location.pathname === path : history.location.pathname.includes(path);

  return (
    <ListItem
      selected={isActive}
      classes={{ root: classes.menuRoot, selected: classes.menuRootSelected }}
      button
      component={CustomLink(path) as React.ElementType<any>}
      disabled={disabled}
    >
      <ListItemIcon>
        <IconComponent
          style={
            {
              color: `${isActive ? colorMajor : '#ffefc999'}`,
            }
          }
        />
      </ListItemIcon>
      <ListItemText
        style={{ fontWeight: 'bold' }}
        primary={text}
      />
    </ListItem>
  );
};

/* SideBar page component prop types ------------------- */
interface SideBarProps {
  open: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
}

/* SideBar page component ------------------------------ */
const SideBar: React.FC<SideBarProps> = ({ open, handleDrawerOpen, handleDrawerClose }) => {
  const classes = useStyles();

  getElectonPath()
    .then(
      () => {
        console.log(`[DEBUG] <SideBar> __dirname :`, __dirname);
      },
    )
    .catch(
      (pError) => {
        console.log(`[ERROR] <SideBar> getElectonPath failed :`, pError);
      },
    );

  return (
    <Drawer
      variant="permanent"
      classes={
        {
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }
      }
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
          {
            open ?
              <ChevronLeftIcon /> :
              <ChevronRightIcon />
          }
        </IconButton>
      </div>
      <div
        style={
          {
            width: '100%',
            textAlign: 'center',
          }
        }
      >
        <img
          src="/src/client/assets/reactIcons/logo512.png"
          style={
            {
              marginTop: 5,
              width: '70px',
              height: '69px',
            }
          }
        />
      </div>
      <Divider
        style={
          {
            background: 'rgba(255, 220, 149, 0.17)',
          }
        }
      />
      <List>
        <SideBarNavItem
          mustBeExact
          path="/"
          text="Général"
          IconComponent={DashboardIcon}
        />
        <SideBarNavItem
          path="/"
          text="Projets"
          IconComponent={LayersIcon}
        />
        <SideBarNavItem
          path="/"
          text="Nodes"
          IconComponent={AccountTreeIcon}
        />
        <SideBarNavItem
          path="/"
          text="Configuration"
          IconComponent={SettingsIcon}
        />
      </List>

    </Drawer>
  );
};

/* Export SideBar component ---------------------------- */
export default hot(module)(SideBar);
