
import { createMuiTheme } from '@material-ui/core'

const dark = '#25323A'
const accent = '#54A88C'
const light = '#f9ffff'

export const theme = createMuiTheme({
  palette: {
    type: 'light',
    text: {
      primary: dark,
      secondary: '#ffffff'
    },
    primary: {
      main: accent,
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
      xs: 500,
      sm: 800,
      md: 1100,
      lg: 1200,
      xl: 1920
    }
  },
  typography: {
    fontSize: 15,
    fontFamily: [
      'Roboto',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      '-apple-system',
      'BlinkMacSystemFont',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
}
);

export default theme;