// IMPORTS
require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')

const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env

// CONTROLLERS
const authCtrl = require('./controllers/authController')
const productCtrl = require('./controllers/productController')
const cartCtrl = require('./controllers/cartController')


// APP INSTANCE CREATED
const app = express()

// TOP LEVEL MIDDLEWARE
app.use(express.static('front'))
app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
}))

// DATABASE CONNECTION
massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
})
    .then(db => {
        app.set('db', db)
        console.log("Database Connected")
        app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`))
    }).catch(err => console.log(err))


// ENDPOINTS
// AUTH
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/logout', authCtrl.logout)
app.get('/auth/me', authCtrl.getUser)

// PRODUCTS
app.get('/api/products', productCtrl.getProducts)

// CART
app.get('/api/cart', cartCtrl.getCart)
app.post('/api/cart/:product_id', cartCtrl.addToCart)
app.delete('/api/cart/:product_id', cartCtrl.deleteItemFromCart)
app.put('/api/cart/:product_id', cartCtrl.changeCartQty)

