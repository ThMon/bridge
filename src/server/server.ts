require('dotenv').config();
const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;
import { userRoutes } from "./frameworks/express/routes/user";
import dependencies from "./config/dependencies";

export default {
    start: ()=>{
        //Middlewares
        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json()); 
        app.use(express.json());
        app.use(express.urlencoded({
            extended: true
        }))


        //Routes

        userRoutes(dependencies, app);

        app.listen(PORT, ()=>{
            console.log("Server runing on port "+PORT);
        })
    }
}