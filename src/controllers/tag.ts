import {Request, Response} from 'express'
import Tag from '../models/tags'

export const getTags = async(req: Request, res: Response) => {

    const listtags = await Tag.findAll()

    res.json(listtags)

}

export const getTag  = async (req: Request, res: Response) => {

    const { id } = req.params;
    const tag = await Tag.findByPk(id)

    if(tag){
        res.json(tag)
    } else {
        res.json({
            msg:'Tag doesn´t exists'
        })
    }

}

export const addTag  = async (req: Request, res: Response) => {

    const { body } = req;

    try {
        await Tag.create(body);

        res.json({
            msg: 'Tag added'
        })
    } catch (error) {
        res.json({
            msg:'Error adding new tag'
        })
    }
}

export const updateTag  = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {
        const tag = await Tag.findByPk(id);

        if(tag){     
            await tag.update(body);
            res.json({
                msg:'Tag updated'
            })    
        }else{    
            res.status(404).json({
                msg:'Tag doesn´t exists'
            })    
       }
    
    } catch (error) {
        res.json({
            msg:'Error updating tag'
        })
    }
   
}

export const deleteTag  = async (req: Request, res: Response) => {

    const { id } = req.params;
    const tag = await Tag.findByPk(id);

    if(!tag){
        res.status(404).json({
            msg: 'Tag doesn´t exists'
        })
    }else{
        await tag.destroy();
        res.json({
            msg: 'Tag deleted'
        })
    }

    
}