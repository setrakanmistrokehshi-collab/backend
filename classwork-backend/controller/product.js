import { protect } from "../Middleware/authMiddleware.js"
import{  product } from "../Model/product.js"
// create product
export const createProduct = async(req, res) =>{
    try {
        const{ name, price, description, image, category} = req.body
        const newProduct = await product.create({
            name,
            price,
            description,
            image,
            category,

        })
        res.status(201).json({
            success:true,
            message:"product created successful",
            product:newProduct
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ success:false,
            message:"server Error", error})
    }
}

// get all products

export const getAllProducts = async(req, res) => {
    try {
        let Product = await product.find()
        res.status(200).json({success:true,Product})

    } catch (error) {
res.status(500).json({success:false,
    message:"server error",error
})
    }
}

   
export const getProductById = async (req, res) =>{
    
    try {
        const productId = req.params.id
        const product = await product.findById(productId)
    if(!product) return res.status(404).json({message:"product not found"})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
   }

   // delete project 

   //Delete user

export const deleteProduct = async (req, res) =>{
    const productId = req.params.id

    try {
        const product  = await product.findById(productId)
        if(!product) return res.status(404).json({
            message:"product doesnt exist"})
            await user.deleteOne()
    res.status(200).json({message:"product deleted Successfully",})

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}