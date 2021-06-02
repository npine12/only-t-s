module.exports = {
    getCart: (req, res) => {

        const db = req.app.get('db')
        const { user } = req.session

        if (!user) {
            return res.status(511).send('User not logged in.')
        }

        db.cart.get_cart_items(user.cart_id).then(cart => {
            res.status(200).send(cart)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },
    addToCart: (req, res) => {

        const db = req.app.get('db')
        const { user } = req.session
        const { product_id } = req.params
        if (!user) {
            return res.status(511).send("User not logged in.")
        }

        db.cart.add_to_cart(user.cart_id, product_id)
            .then((cart) => {
                res.status(200).send(cart)
            }).catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    },
    deleteItemFromCart: (req, res) => {

        const db = req.app.get('db')
        const { user } = req.session
        const { product_id } = req.params
        if (!user) {
            return res.status(511).send('User not logged in.')
        }
        db.cart.delete_item_from_cart(user.cart_id, product_id)
            .then((cart) => {
                res.status(200).send(cart)
            }).catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    },
    changeCartQty: (req, res) => {
        const db = req.app.get('db')
        const { user } = req.session
        const { product_id } = req.params
        const { quantity } = req.body
        if (!user) {
            return res.status(511).send("User not logged in.")
        }
        db.cart.change_cart_qty(user.cart_id, product_id, quantity)
            .then((cartProducts) => {
                res.status(200).send(cartProducts)
            }).catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }
}