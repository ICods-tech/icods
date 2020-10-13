import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './AlteredRoute'
import Home from '../pages/Home'
import SingUp from '../pages/SingUp'
import Dashboard from '../pages/Dashboard'

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Home}/>
    <Route path='/singup' exact component={SingUp}/>
    <Route path='/dashboard' exact component={Dashboard} isPrivate/>
  </Switch>
)

export default Routes