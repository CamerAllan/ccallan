import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'
import { ThemeProvider } from '@material-ui/core'
import Theme from './theme'

// Export top level component as JSX (for static rendering)
export default App

if (typeof document !== 'undefined') {

  const target = document.getElementById('root')
  document.title = "Cameron Allan"

  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render

  const render = (Comp: Function) => {
    renderMethod(
      <ThemeProvider theme={Theme} >
        <AppContainer>
          <Comp />
        </AppContainer>
      </ThemeProvider>,
      target
    )
  }

  render(App)

  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept('./App', () => {
      render(App)
    })
  }
}
