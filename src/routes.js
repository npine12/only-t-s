import { Switch, Route } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Cart from './components/Cart/Cart'
import Tops from './components/Tops/Tops'
import AboutUs from './components/AboutUs/AboutUs'
import Home from './components/Home/Home'
import Bottoms from './components/Bottoms/Bottoms'
import Hats from './components/Hats/Hats'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/auth' component={Auth} />
        <Route path='/cart' component={Cart} />
        <Route path="/tops" component={Tops} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/bottoms" component={Bottoms} />
        <Route path="/hats" component={Hats} />
    </Switch>
)