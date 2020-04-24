
import { createMuiTheme } from '@material-ui/core'

const dark = '#25323A'
const medium = '#89AFA9'
const light = '#CFD2CD'

export const theme = createMuiTheme({
  palette: {
    type: 'light',
    text: {
      primary: dark,
      secondary: '#ffffff'
    },
    primary: {
      main: medium,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: dark,
    },
    info: {
      main: light
    },
    background: {
      paper: dark,
      default: light
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 650,
      md: 960,
      lg: 1200,
      xl: 1920
    }
  }
});

export default theme;