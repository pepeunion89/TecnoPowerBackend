import {Request, Response} from 'express'

export const getProducts = (req: Request, res: Response) => {

    res.json({
        msg: 'Get products'
    })

}

export const getProduct  = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'Get products',
        id: id
    })

}