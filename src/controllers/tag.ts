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
    let flag = 0;

    const listTags = await Tag.findAll();

    const tags = listTags.map((tag) => {
        return tag.toJSON();
    });

    for (let tag of tags) {
        if (tag.tag_name === body.tag_name && tag.tag_detail === body.tag_detail) {
            flag = 1;
            console.log("==================================")
            console.log("La tag existente es:")
            console.log(tag);
            console.log("==================================")
            console.log("La tag a guardar es:")
            console.log(body);
            console.log("==================================")
        }
    }

    if(flag===1){

        try{

            res.json({
                msg: 'Tag already exists.'
            })

        } finally{
            // Nothing to do.
        }
       

    } else {

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