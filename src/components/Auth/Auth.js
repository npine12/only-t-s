import { useState } from 'react'
import axios from 'axios'
import { setUser } from '../../redux/authReducer'
import { setCart } from '../../redux/cartReducer'
import { useDispatch } from 'react-redux'

const Auth = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const handleRegister = () => {
        axios.post('/auth/register', { username, password })
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
        axios.post('/auth/login', { username, password })
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

        <div className="authContainer">
            <h1>Login/Register</h1>
            <h5>Email</h5>
            <input value={username} onChange={(e) => setUsername(e.target.value)} />
            <h5>Password</h5>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <h4>Don't have an accont? Hit the register button after you input your info!</h4>
            <button onClick={handleRegister}>Register</button>
        </div>

    )
}

export default Auth