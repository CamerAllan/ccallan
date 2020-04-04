import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from '@reach/router'
import Dynamic from 'containers/Dynamic'
import { ThemeProvider, Tabs, Tab } from '@material-ui/core'
import { theme } from './styles/Theme'
import Bio from 'components/Bio'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <ThemeProvider theme={theme}>
        <Bio altText='Cameron Allan' src='/images/pp.jpg'/>
        <Tabs component='div' value={false} orientation='vertical'>
          <Tab>
            <Link to="/">Home</Link>
          </Tab>
          <Tab>
            <Link to="/about">About</Link>
          </Tab>
          <Tab>
            <Link to="/blog">Blog</Link>
          </Tab>
          <Tab>
            <Link to="/dynamic">Dynamic</Link>
          </Tab>         
        </Tabs>
        <div className="content">
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Dynamic path="dynamic" />
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
      </ThemeProvider>
    </Root>
  )
}

export default App
