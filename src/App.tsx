import React from 'react'
import { Root } from 'react-static'
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from 'components/Layout'
import Analytics from 'components/Analytics';
import './app.css';
function App() {

  return (
    <>
      <Root>
        <Analytics>
          <CssBaseline />
          <Layout />
        </Analytics>
      </Root>
    </>
  )
}

export default App
