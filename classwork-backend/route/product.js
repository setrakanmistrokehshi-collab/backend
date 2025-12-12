import express from "express";
import { createProduct ,deleteProduct,getAllProducts} from "../controller/product.js";


const ProductRouter = express.Router()
ProductRouter.post('/', createProduct)
ProductRouter.get('/', getAllProducts)
ProductRouter.delete('/', deleteProduct)
export default ProductRouter
