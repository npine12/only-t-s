import { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setCart } from '../redux/cartReducer'

const Cart = (props) => {
    const { cart } = useSelector((store) => store.cartReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('/api/cart')
            .then((res) => {
                console.log(res.data)
                dispatch(setCart(res.data))
            }).catch(err => {
                console.log(err)
                if (err.response.status === 511) {
                    props.history.push('/auth')
                }
            })
    }, [dispatch])

    const handleDeleteFromCart = (product_id) => {
        axios.delete(`/api/cart/${product_id}`)
            .then((res) => {
                dispatch(setCart(res.data))
            })
            .catch(err => {
                console.log(err)
                if (err.response.status === 511) {
                    props.history.push('/auth')
                }
            })
    }

    const handleChangeQty = (product_id, quantity) => {
        if (quantity <= 0) {
            handleDeleteFromCart(product_id)
        } else {
            axios.put(`/api/cart/${product_id}`, { quantity })
                .then(res => {
                    dispatch(setCart(res.data))
                })
                .catch(err => {
                    console.log(err)
                    if (err.response.status === 511) {
                        props.history.push('/auth')
                    }
                })
        }
    }

    return (
        <div>
            <h1>Cart Page</h1>
            {/* Here we map over our cart and display each item in the cart as well
      as a button to delete the item from the cart, reduce the quantity of that item
      in our cart, or increase the quantity of that item in our cart (the functions
      up above) */}
            {cart.map((product) => {
                return (
                    <div key={product.product_cart_id}>
                        <h4>{product.product_name}</h4>
                        <h5>Qty: {product.quantity}</h5>
                        <button onClick={() => handleDeleteFromCart(product.product_id)}>X</button>
                        {/* to change the quantity we take the current quantity of that item and add one or
            subtract one and pass that new value into handleChangeQty. */}
                        <button onClick={() => handleChangeQty(product.product_id, product.quantity - 1)}>-</button>
                        <button onClick={() => handleChangeQty(product.product_id, product.quantity + 1)}>+</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Cart