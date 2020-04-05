import React from 'react'
import { Root, addPrefetchExcludes } from 'react-static'
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from 'components/Layout'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

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
