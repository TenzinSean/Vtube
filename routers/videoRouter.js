import express from "express";
import routes from "../routes";

import { upload, editVideo } from '../controller/videoController';

const videoRouter = express.Router();

videoRouter.get(routes.upload, upload);
videoRouter.get(routes.editProfile, editVideo);


export default videoRouter;
