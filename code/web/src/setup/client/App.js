//****Annotate Me*****
//This is the main "app" itself

// Imports
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// App Imports
import { routes } from '../../setup/routes'
//these are the dynamic routes for navigation
import Layout from '../../modules/common/Layout'
//the basic structure of the page diagrammed it would seem
import NotFound from '../../modules/common/NotFound'
//this is the 404 error page or sad path handling for odd routes
import RoutePrivate from '../../modules/auth/RoutePrivate'
//this is what can be rendered after a user is authenticated

const App = () => (
  <Layout>
    <Switch>
      {Object.values(routes).map((route, index) => (
        route.auth
          ? <RoutePrivate {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path}/>
          : <Route {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path}/>
      ))}

      <Route component={NotFound}/>
    </Switch>
  </Layout>
)

export default App
