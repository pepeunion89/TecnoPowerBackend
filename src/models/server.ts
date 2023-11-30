import express, { Application, Request, Response} from 'express';
import cors from  'cors';
import routesProduct from '../routes/product';
import routesCategory from '../routes/category';
import routesMaker from '../routes/maker';
import db from '../db/connection';

class Server {
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`App corriendo en puerto ${this.port}`);
        });
    }

    routes(){
        this.app.get('/', (req: Request, res: Response) => {
            res.json({ 
                msg: 'Api working' 
            }) 
        })

        this.app.use('/api/products', routesProduct)
        this.app.use('/api/categorys', routesCategory)
        this.app.use('/api/makers', routesMaker)
    }

    midlewares(){

        //Parseamos el body
        this.app.use(express.json());

        // CORS
        this.app.use(cors());

    }

    async dbConnect(){

       try {

        await db.authenticate();
        console.log("Database connected");

        
       } catch (error) {
        
        console.log("Error: "+error);

       }
    }
    

}

export default Server;