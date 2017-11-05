import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import ContextProvider from '../ContextProvider'

import Home from './features/Tests/home'
const Root = ({ Router, location, context }) => (


    <Router location={location} context={context}>
      <ContextProvider context={context}>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </ContextProvider>
    </Router>
)

Root.propTypes = {
  Router: PropTypes.func.isRequired
}

export default Root
