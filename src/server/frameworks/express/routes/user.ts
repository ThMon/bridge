const express = require('express');
import { userControllers } from "../../../controllers/user";

export const userRoutes = (dependencies, app) => {
   
    const router = express.Router();
    const { 
       loginUserController
        
    } = userControllers(dependencies);

    app.post("/api/v1/login", loginUserController)

   
}