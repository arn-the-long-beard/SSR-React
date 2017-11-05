import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import ContextProvider from '../ContextProvider'
import AppBar from './features/Session/features/AppBar/index'
import Footer from './features/BottomSide/Footer'
import Home from './features/Tests/home'
const Root = ({ store, Router, location, context }) => (


    <Router location={location} context={context}>
      <ContextProvider context={context}>
        <div>
          <AppBar />
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
          <Footer />
        </div>
      </ContextProvider>
    </Router>
)

Root.propTypes = {
  Router: PropTypes.func.isRequired
}

export default Root
