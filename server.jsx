import React from 'react'
import ReactDOMServer from 'react-dom/server'

import { StaticRouter } from 'react-router-dom'

import Template from './template'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


import injectTapEventPlugin from 'react-tap-event-plugin'

import Root from './Root'

injectTapEventPlugin()
export default function serverRenderer ({ clientStats, serverStats }) {
  return (req, res, next) => {
    // cookie.plugToRequest(req, res)

    const muiTheme = getMuiTheme({userAgent: req.headers['user-agent']})
    const css = []
    const context = {
      insertCss: (styles) => css.push(styles._getCss()),
      status: 0

    }

    let html = ReactDOMServer.renderToString(<MuiThemeProvider muiTheme={muiTheme}><Root Router={StaticRouter}
      location={req.url}
      context={context} /></MuiThemeProvider>)
    console.log('Server rendering')
    //  console.log(req.headers)

    if (context.status === 404) {
      res.status(404).send(Template({css, html}))
    } else {
      res.status(200).send(Template({css, html}))
    }
  }
}

