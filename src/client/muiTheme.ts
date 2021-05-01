/* Framework imports ----------------------------------- */
import { createMuiTheme, Theme } from '@material-ui/core/styles';

/* Internal variables ---------------------------------- */
export const colorMajor: string = '#090979'; /* Get these through the pThem.palette.primary/secondary */
export const colorMinor: string = '#0079ff'; /* Get these through the pThem.palette.primary/secondary */

/* Material UI theme ----------------------------------- */
const theme: Theme = createMuiTheme(
  {
    overrides: {
    // Style sheet name ⚛️
      MuiButton: {
      // Name of the rule
        text: {
        // Some CSS
          background: `linear-gradient(45deg, #020024 0%, ${colorMajor} 30%, ${colorMinor} 100%)`,
          borderRadius: 15,
          border: 0,
          color: 'white',
          height: 48,
          fontWeight: 'bold',
          padding: '0 30px',
          boxShadow: '0 3px 12px 2px rgba(255, 105, 135, .3)',
          textTransform: 'none',
        },
      },
      MuiCheckbox: {
        colorSecondary: {
          '&$checked': {
            color: colorMajor,
          /* linear-gradient doesn't work here */
          // color: colorGradient,
          },
        },
      },
      MuiFilledInput: {
        root: {
          backgroundColor: '#fcfcfc',
          borderRadius: 15,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          border: '5px',
          borderColor: '#a8a8a8',
          color: '#7a7a7a',
          height: 50,
          padding: '0 15px',
          boxShadow: '0 3px 20px 4px rgba(185, 165, 139, .15)',
          paddingBottom: '14px',
          textTransform: 'none',
          transition: '0.24s',
          '&:hover': {
            backgroundColor: '#FFF',
            color: '#303030',
            boxShadow: '0 3px 25px 4px rgba(185, 165, 139, .2)',
          },
          '&$focused': {
            backgroundColor: '#FFF',
            color: '#303030',
            boxShadow: '0 3px 25px 4px rgba(185, 165, 139, .2)',
          },
        },
      },
      MuiPaper: {
        elevation1: {
          boxShadow: '0 3px 25px 4px rgba(185, 165, 139, .10)',
        },
        elevation8: {
          boxShadow: '0 3px 25px 4px rgba(185, 165, 139, .4)',
        },
        rounded: {
          borderRadius: 15,
        },
      },
    },
    typography: {
      fontFamily: [
        'Poppins',
      ].join(','),
    },
    palette: {
      primary: {
      // light: will be calculated from palette.primary.main,
        main: colorMajor,
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
        contrastText: '#fff',
      },
      secondary: {
        main: colorMinor,
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
  },
);

/* Export MUI theme ------------------------------------ */
export default theme;
