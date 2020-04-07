import React from 'react'
import { Root } from 'react-static'
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from 'components/Layout'

function App() {
  return (
    <>
      <header/>
      <Root>
        <body>
            <CssBaseline />
            <Layout/>
        </body>
      </Root>
    </>
  )
}

export default App
