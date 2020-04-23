import React from 'react'
import { ServerStyleSheets } from '@material-ui/styles'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'

import theme from './src/theme'

export default () => {
    
    return ({
  beforeRenderToHtml: (App, { meta }) => {
    meta.muiSheets = new ServerStyleSheets()

    return meta.muiSheets.collect(
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        {App}
      </MuiThemeProvider>
    )
  },
  headElements: (elements, { meta }) => [
    ...elements,
    meta.muiSheets.getStyleElement(),
  ],
})}