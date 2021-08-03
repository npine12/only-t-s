import { Link, useLocation } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const Header = () => {
    const { pathname } = useLocation()
    console.log(pathname)
    return (
        <header className="showcase">
            <Link to='/' ><h1>KESLER SURF</h1></Link>
            <Link to='/tops' >Tops</Link>
            <Link to='/bottoms' >Bottoms</Link>
            <Link to='/hats' >Hats</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to='/cart'><div className="cart-icon-container">  <ShoppingCartIcon style={{ fontSize: 70, color: 'white' }} /></div></Link>
        </header>
    )
}
export default Header



