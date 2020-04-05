import React from 'react'
import { Root, addPrefetchExcludes } from 'react-static'
import { ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './styles/Theme'
import Layout from 'components/Layout'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <>
      <header/>
      <Root>
        <body>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout/>
          </ThemeProvider>
        </body>
      </Root>
    </>
  )
}

export default App
