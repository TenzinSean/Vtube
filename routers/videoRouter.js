import express from "express";
import routes from "../routes";

import { upload, editVideo, videoDetail } from '../controller/videoController';

const videoRouter = express.Router();

videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editProfile, editVideo);


export default videoRouter;
