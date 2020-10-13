import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import SingUp from '../pages/SingUp'
import UserPage from '../pages/UserPage'

const Routes: React.FC = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/singup' component={SingUp} />
    <Route exact path='/user' component={UserPage} />
  </Switch>
)

export default Routes