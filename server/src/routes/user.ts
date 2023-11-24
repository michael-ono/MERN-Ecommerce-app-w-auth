import { Router, Request, Response } from "express";
import { UserModel } from "../models/user";
import { UserErrors } from "../errors"

const router = Router();

router.post("/register", async (req: Request, res: Response) => {
    const { username, password } = req.body; 

    const user = await UserModel.findOne({username});

    if (user) {
        return res.status(400).json({type: UserErrors.USERNME_ALREDY_EXISTS});
    }


});

export { router as userRouter };