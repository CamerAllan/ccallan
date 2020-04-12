import React, { useEffect } from 'react'
import { Root } from 'react-static'
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from 'components/Layout'
import ReactGA from 'react-ga';

function App() {

  useEffect(() => {
    ReactGA.initialize('UA-163465341-1');
  }, []);

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
