import express from "express";
import routes from "../routes";
import { home, search } from '../controller/videoController';
import { 
    logout, 
    postJoin, 
    getJoin,
    postLogin,
    getLogin,
} from '../controller/userController';


const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
// globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);


export default globalRouter;