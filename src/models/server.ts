import express, {Application, Request, Response} from 'express';
import routesProduct from '../routes/product';
import db from '../db/connection'

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

        this.app.use('/api/productos', routesProduct)
    }

    midlewares(){

        //Parseamos el body
        this.app.use(express.json());

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