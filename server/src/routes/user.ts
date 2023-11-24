import { Router, Request, Response } from "express";
import { UserModel } from "../models/user";
import { UserErrors } from "../errors"
import bcrypt from "bcrypt";

const router = Router();

router.post("/register", async (req: Request, res: Response) => {
    const { username, password } = req.body; 

    const user = await UserModel.findOne({username});

    if (user) {
        return res.status(400).json({type: UserErrors.USERNME_ALREDY_EXISTS});
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ username, psssword: hashedPassword })

});

export { router as userRouter };