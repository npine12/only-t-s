import { useState } from 'react'
import axios from 'axios'
import { setUser } from '../redux/authReducer'
import { setCart } from '../redux/cartReducer'
import { useDispatch } from 'react-redux'

const Auth = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const handleRegister = () => {
        axios.post('/auth/register', { email, password })
            .then((res) => {
                dispatch(setUser(res.data))
                axios.get('/api/cart').then((response) => {
                    dispatch(setCart(response.data))
                    props.history.push('/products')
                })
            })
            .catch(err => console.log(err))
    }
    const handleLogin = () => {
        axios.post('/auth/login', { email, password })
            .then((res) => {
                console.log(res.data)
                dispatch(setUser(res.data))
                axios.get('/api/cart').then((response) => {
                    dispatch(setCart(response.data))
                    props.history.push('/products')
                })
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Auth Page</h1>
            {/* Here are the input fields for email and password as well has buttons
      for register and login. */}
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            <input value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Register</button>
        </div>
    )
}

export default Auth