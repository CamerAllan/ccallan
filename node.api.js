import React from 'react'
import { ServerStyleSheets } from '@material-ui/styles'
import { ThemeProvider } from '@material-ui/core'

import theme from './src/theme'

export default () => {

  return ({
    beforeRenderToHtml: (App, { meta }) => {
      meta.muiSheets = new ServerStyleSheets()

      return meta.muiSheets.collect(
        <ThemeProvider theme={theme}>
          {App}
        </ThemeProvider>
      )
    },
    headElements: (elements, { meta }) => [
      ...elements,
      meta.muiSheets.getStyleElement(),
    ],
  })
}