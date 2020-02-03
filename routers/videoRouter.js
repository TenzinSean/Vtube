import express from "express";
import routes from "../routes";

import { upload, editVideo, videoDetail, getUpload, postUpload } from '../controller/videoController';

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editProfile, editVideo);


export default videoRouter;
