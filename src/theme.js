
import { createMuiTheme } from '@material-ui/core'

const font = "'Raleway', sans-serif";

const dark = '#333333'
const yellow = '#F7A21B'
const green = '#54A88C'
const light = '#f9ffff'

export const theme = createMuiTheme({
  palette: {
    type: 'light',
    text: {
      primary: dark,
      secondary: light
    },
    primary: {
      main: yellow,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: green,
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
      xs: 500,
      sm: 800,
      md: 1100,
      lg: 1200,
      xl: 1920
    }
  },
  typography: {
    fontSize: 18,
    fontFamily: font
  }
}
);

export default theme;