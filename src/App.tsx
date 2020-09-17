import React from 'react'
import { Head, Root } from 'react-static'
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from 'components/Layout'
import Analytics from 'components/Analytics';
import './app.css';
function App() {

  return (
    <>
      <Head>
        <meta property="og:title" content="Cameron Allan" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="This is my website, where I put stuff." />
        <meta property="og:image" content="https://ccallan.dev/images/pp4.jpg" />
        <meta property="og:theme-color" content="#333333" />

      </Head>
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
