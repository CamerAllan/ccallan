import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

// Your top level component
import App from './App'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
const Theme = require('./theme')

// Export your top level component as JSX (for static rendering)
export default App

// Render your app
if (typeof document !== 'undefined') {
  
  const target = document.getElementById('root')

  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render

  const muiTheme = createMuiTheme(Theme)


  const render = (Comp: Function) => {
    renderMethod(
      <MuiThemeProvider theme={muiTheme} >
        <AppContainer>
          <Comp />
        </AppContainer>
      </MuiThemeProvider>,
      target
    )
  }

  // Render!
  render(App)

  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept('./App', () => {
      render(App)
    })
  }
}
