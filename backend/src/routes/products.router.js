
const { Router } = require('express')
const ProductsController = require('../controllers/products.controllers.js')
const { isAdminOrPremium } = require('../middlewars/roleverification.js')

const router = Router()
const {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
} = new ProductsController()

router
    .get('/', getProducts)
    .get('/:pid', getProductById)
    .post('/', addProduct)
    .put('/:pid', updateProduct)
    .delete('/:pid', deleteProduct)

module.exports = router
