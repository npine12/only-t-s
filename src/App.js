import { useEffect } from 'react'
import './App.css';
import routes from './routes'
import Header from './components/Header'
import { useDispatch } from 'react-redux'
import { setUser } from './redux/authReducer'
import { setCart } from './redux/cartReducer'
import axios from 'axios'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('/auth/me').then(res => {
      dispatch(setUser(res.data.user))
      dispatch(setCart(res.data.cart))
    }).catch((err) => {
      console.log(err.response)
    })
  }, [])
  return (
    <div className="App">
      {/* Here we just render the Header as well as our routes. */}
      <Header />
      {routes}
    </div>
  );
}

export default App