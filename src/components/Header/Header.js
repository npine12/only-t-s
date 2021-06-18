import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const { pathname } = useLocation()
    console.log(pathname)
    return (
        <header className="showcase">
            <h1>ONLY-T'S</h1>
            {pathname !== '/products' && <Link to='/products' ><div className="shop-tri">Shop</div></Link>}
            {pathname !== '/cart' && <Link to='/cart' ><div className="cart-tri">Cart</div></Link>}
            {pathname !== '/auth' && <Link to='/auth' ><div className="log-tri">Login</div></Link>}
            {pathname !== '/' && <Link to='/' ><div className="log-tri">Home</div></Link>}
        </header>
    )
}

export default Header