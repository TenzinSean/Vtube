import express from "express";
import routes from "../routes";
import {
    users,
    userDetail,
    editProfile,
    changePassword
} from "../controller/userController";

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send("Users"));
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.userDetail(), userDetail);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
