import { Switch, Route } from 'react-router-dom'
import Auth from './components/Auth'
import Community from './components/Community'
import Messages from './components/Messages'
import Profile from './components/Profile'

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/profile' component={Profile} />
        <Route path='/community' component={Community} />
        <Route path='/messages' component={Messages} />
    </Switch>
)