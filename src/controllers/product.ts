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

    console.log(body);

    try {
        await Product.create(body);
        console.log("LO CREO EN TEORIA");

        res.json({
            msg: 'Product added'
            //msg: body
        })
    } catch (error) {
        console.log("NO PAPU NO ENTRO, MIRA EL ERROR: ");
        console.log("====================================================");
        console.log(error);
        console.log("====================================================");
        res.json({
            msg:'Error adding new product'
        })
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