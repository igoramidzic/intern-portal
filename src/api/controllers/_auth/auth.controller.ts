import { Router, Response, Request } from "express"
import { User, UserDocument, UserType } from "../../../models/user/user.model";
import { serverError, ClientErrorResponse } from "../../helpers/helpers"
import { createNewUser, getUserByEmail } from "../../handlers/user/user.handler";
import { SECRET } from "../../../util/secrets";
import jwt from 'jsonwebtoken';

const routes: Router = Router()

/**
 * Create a new admin user
 */
routes.post('/register', async (req: Request, res: Response) => {
    const user: User = req.body;

    user.firstName = user.firstName == null ? null : user.firstName.trim();
    user.lastName = user.lastName == null ? null : user.lastName.trim();
    user.email = user.email == null ? null : user.email.toLowerCase().trim();
    user.userType = UserType.Admin;
    user.company = null;

    const credentialErrors: string[] = [];

    if (!user.firstName) credentialErrors.push("First name cannot be empty.")
    if (!user.lastName) credentialErrors.push("Last name cannot be empty.")
    if (!user.email) credentialErrors.push("Email cannot be empty.")
    if (!user.password || user.password.length < 8)
        credentialErrors.push("Password must be at least 8 characters long.")

    // Check if email is already taken
    const emailAlreadyTaken: boolean = await getUserByEmail(user.email) == null ? false : true;
    if (emailAlreadyTaken) credentialErrors.push("Email is already taken.");

    if (credentialErrors.length > 0)
        return res.status(400).json(new ClientErrorResponse(credentialErrors));

    await createNewUser(user)
        .then((newUser: UserDocument) => {
            const token = jwt.sign({ userId: newUser.id }, SECRET);
            return res.status(200).json({ user: newUser, token });
        })
        .catch(() => serverError(res))
})

/**
 * Authenticate a user
 */
routes.post('/login', (req: Request, res: Response) => {

    const { email, password } = req.body;

    User.findOne({ email })
        .then((user: UserDocument) => {
            if (!user)
                return res.status(401)
                    .json(new ClientErrorResponse(["Unable to log in with provided credentials."]));

            // Compare passwords
            user.comparePassword(password, (err: Error, isMatch: boolean) => {
                if (err) return serverError(res);

                if (!isMatch)
                    return res.status(401)
                        .json(new ClientErrorResponse(["Unable to log in with provided credentials."]));

                const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: 1000 * 60 * 60 });
                return res.status(200).json({ user, token });
            });
        })
        .catch(err => serverError(res));
})

module.exports = routes;