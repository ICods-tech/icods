import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './AlteredRoute'
import Home from '../pages/Home'
import SingUp from '../pages/SingUp'
import Dashboard from '../pages/Dashboard'
import QRCodes from '../pages/QRCodesDashboard'
import UploadContentQRCode from '../pages/UploadContentQRCode'

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Home}/>
    <Route path='/singup' exact component={SingUp}/>
    <Route path='/dashboard' exact component={Dashboard} isPrivate/>
    <Route path='/dashboard/qr_codes' exact component={QRCodes} isPrivate/>
    <Route path='/dashboard/qr_codes/:id' exact component={QRCodes} isPrivate/>
    <Route path='/dashboard/new' exact component={UploadContentQRCode} isPrivate/>
  </Switch>
)

export default Routes