import {Request, Response} from 'express'
import Maker from '../models/maker'

export const getMakers = async(req: Request, res: Response) => {

    const listmakers = await Maker.findAll()

    res.json(listmakers)

}

export const getMaker  = async (req: Request, res: Response) => {

    const { id } = req.params;
    const maker = await Maker.findByPk(id)

    if(maker){
        res.json(maker)
    } else {
        res.json({
            msg:'Maker doesn´t exists'
        })
    }

}

export const addMaker  = async (req: Request, res: Response) => {

    const { body } = req;
    let flag = 0;
    
    const listMakers = await Maker.findAll();

    const makers = listMakers.map((maker) => {
        return maker.toJSON();
    });

    for (let maker of makers) {
        if (maker.maker_name === body.maker_name) {
            flag = 1;
        }
    }

    if(flag===1){

        try{

            res.json({
                msg: 'Maker already exists.'
            })

        } finally{
            // Nothing to do.
        }
       

    } else {

        try {
            await Maker.create(body);

            res.json({
                msg: 'Maker added'
            })
        } catch (error) {
            res.json({
                msg:'Error adding new maker'
            })
        }
    }
}

export const updateMaker  = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {
        const maker = await Maker.findByPk(id);

        if(maker){     
            await maker.update(body);
            res.json({
                msg:'Maker updated'
            })    
        }else{    
            res.status(404).json({
                msg:'Maker doesn´t exists'
            })    
       }
    
    } catch (error) {
        res.json({
            msg:'Error updating maker'
        })
    }
   
}

export const deleteMaker  = async (req: Request, res: Response) => {

    const { id } = req.params;
    const maker = await Maker.findByPk(id);

    if(!maker){
        res.status(404).json({
            msg: 'Maker doesn´t exists'
        })
    }else{
        await maker.destroy();
        res.json({
            msg: 'Maker deleted'
        })
    }

    
}