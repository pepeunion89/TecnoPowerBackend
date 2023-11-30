import {Request, Response} from 'express'
import Category from '../models/category'

export const getCategorys = async(req: Request, res: Response) => {

    const listcategorys = await Category.findAll()

    res.json(listcategorys)

}

export const getCategory  = async (req: Request, res: Response) => {

    const { id } = req.params;
    const category = await Category.findByPk(id)

    if(category){
        res.json(category)
    } else {
        res.json({
            msg:'Category doesn´t exists'
        })
    }

}

export const addCategory  = async (req: Request, res: Response) => {

    const { body } = req;

    try {
        await Category.create(body);

        res.json({
            msg: 'Category added'
        })
    } catch (error) {
        res.json({
            msg:'Error adding new category'
        })
    }
}

export const updateCategory  = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {
        const category = await Category.findByPk(id);

        if(category){     
            await category.update(body);
            res.json({
                msg:'Category updated'
            })    
        }else{    
            res.status(404).json({
                msg:'Category doesn´t exists'
            })    
       }
    
    } catch (error) {
        res.json({
            msg:'Error updating category'
        })
    }
   
}

export const deleteCategory  = async (req: Request, res: Response) => {

    const { id } = req.params;
    const category = await Category.findByPk(id);

    if(!category){
        res.status(404).json({
            msg: 'Category doesn´t exists'
        })
    }else{
        await category.destroy();
        res.json({
            msg: 'Category deleted'
        })
    }

    
}