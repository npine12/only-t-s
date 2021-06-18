import { Switch, Route } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Cart from './components/Cart/Cart'
import Products from './components/Products/Products'
import AboutUs from './components/AboutUs/AboutUs'
import Home from './components/Home/Home'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/auth' component={Auth} />
        <Route path='/cart' component={Cart} />
        <Route path="/products" component={Products} />
        <Route path="/aboutus" component={AboutUs} />
    </Switch>
)