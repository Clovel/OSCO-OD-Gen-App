/* Framework imports ----------------------------------- */
import React from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { hot } from 'react-hot-loader';

/* Helpers imports ------------------------------------- */

/* Component imports ----------------------------------- */
import MUIAppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';

/* CSS styling for the layout -------------------------- */
const drawerWidth = 240;
const useStyles = makeStyles(
  (pTheme) => (
    {
      root: {
        display: 'flex',
      },
      toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
      },
      appBar: {
        zIndex: pTheme.zIndex.drawer - 1,
        background: 'white',
        height: '79px',
        boxShadow: '0 3px 20px 4px rgba(185, 165, 139, .15)',
        transition: pTheme.transitions.create(
          ['width', 'margin'],
          {
            easing: pTheme.transitions.easing.sharp,
            duration: pTheme.transitions.duration.leavingScreen,
          },
        ),
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: pTheme.transitions.create(
          ['width', 'margin'],
          {
            easing: pTheme.transitions.easing.sharp,
            duration: pTheme.transitions.duration.enteringScreen,
          },
        ),
      },
      menuButton: {
        marginRight: 36,
      },
      menuButtonHidden: {
        display: 'none',
      },
      projectSearch: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...pTheme.mixins.toolbar,
      },
      title: {
        flexGrow: 1,
      },
      buttonShadow: {
        transition: '0.5s',
        boxShadow: '0 3px 12px 2px rgba(255, 105, 135, .2)',
        '&:hover': {
          boxShadow: '0 3px 12px 2px rgba(255, 105, 135, .5)',
        },
      },
      buttonActive: {
        transition: '0.3s',
        color: 'white',
        background: 'linear-gradient(45deg, #ea8b32 30%, #e8b22c 90%)',
        boxShadow: '0 3px 12px 2px rgba(255, 105, 135, .08)',
      },
      buttonIconActive: {
        transition: '0.3s',
        background: '#ffedd4',
        boxShadow: '0 3px 12px 2px rgba(255, 105, 135, .08)',
      },
      divider: {
        height: '2px',
      },
    }
  ),
);

/* AppBar page component prop types -------------------- */
interface AppBarProps {
  open: boolean;
}

/* AppBar page component ------------------------------- */
const AppBar: React.FC<AppBarProps> = ({ open }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handleSettingsClick = (pEvent: React.BaseSyntheticEvent) => {
    setAnchorEl(pEvent.currentTarget);
  };

  const handleNewProjectClick = () => {
    history.push('/app/projects/new');
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseAndNavigate = (pPath: string) => {
    handleClose();
    history.push(pPath);
  };

  const isPathActive = (pPath: string): boolean => {
    return history.location.pathname === pPath;
  };

  return (
    <MUIAppBar
      position="absolute"
      className={clsx(classes.appBar, open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h1"
          variant="h6"
          color="primary"
          noWrap
          className={classes.title}
        >
          {history.location.pathname}
        </Typography>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          {' '}
        </Typography>
        <div style={{ paddingTop: 8 }}>
          <Button
            onClick={handleNewProjectClick}
            classes={{ text: isPathActive('/app/projects/new') ? classes.buttonActive : classes.buttonShadow }}
            style={{ marginRight: 50, paddingRight: 35, paddingLeft: 35 }}
          >
            Nouveau Projet +
          </Button>
          <IconButton
            color="primary"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleSettingsClick}
            classes={(isPathActive('/app/myaccount') || isPathActive('/app/usermanagement')) ? { root: classes.buttonIconActive } : {}}
          >
            <SettingsIcon />
          </IconButton>
        </div>
      </Toolbar>
    </MUIAppBar>
  );
};

/* Export AppBar component ----------------------------- */
export default hot(module)(AppBar);
