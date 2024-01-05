import {Request, Response} from 'express'
import Product from '../models/product'

export const getProducts = async(req: Request, res: Response) => {

    const listproducts = await Product.findAll()

    res.json(listproducts)

}

export const getProduct  = async (req: Request, res: Response) => {

    const { id } = req.params;
    const product = await Product.findByPk(id)

    if(product){
        res.json(product)
    } else {
        res.json({
            msg:'Product doesn´t exists'
        })
    }

}

export const addProduct  = async (req: Request, res: Response) => {

    const { body } = req;
    let flag = 0;
    
    const listProducts = await Product.findAll();

    const products = listProducts.map((product) => {
        return product.toJSON();
    });

    for (let product of products) {
        if (product.product_name === body.product_name) {
            flag = 1;
        }
    }

    if(flag===1){

        try{

            res.json({
                msg: 'Product already exists.'
            })

        } finally{
            // Nothing to do.
        }
       

    } else {
        try {
            await Product.create(body);
    
            res.json({
                msg: 'Product added'
                //msg: body
            })
        } catch (error) {
            res.json({
                msg:'Error adding new product'
            })
        }
    }

    
}

export const updateProduct  = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {
        const product = await Product.findByPk(id);

        if(product){     
            await product.update(body);
            res.json({
                msg:'Product updated'
            })    
        }else{    
            res.status(404).json({
                msg:'Product doesn´t exists'
            })    
       }
    
    } catch (error) {
        res.json({
            msg:'Error updating product'
        })
    }
   
}

export const deleteProduct  = async (req: Request, res: Response) => {

    const { id } = req.params;
    const product = await Product.findByPk(id);

    if(!product){
        res.status(404).json({
            msg: 'Product doesn´t exists'
        })
    }else{
        await product.destroy();
        res.json({
            msg: 'Product deleted'
        })
    }

    
}