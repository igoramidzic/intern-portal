import { Router, Response, Request } from "express";
import { User, UserDocument, UserType } from "../../../models/user/user.model";
import { CompanyDocument } from "../../../models/company/company.model";
import { getCompanyById, getCompanyUsersById, updateCompany } from "../../../api/handlers/company/company.handler";
import { ClientErrorResponse } from "../../../api/helpers/helpers";
import { getUserByEmail, createNewUser, getUserById, updateUser } from "../../../api/handlers/user/user.handler";

const routes: Router = Router()

/**
 * Get users in company
 */
routes.get("/", async (req: Request, res: Response) => {
    const user: User = req.user;
    const userTypesToFilter: string = req.query.userTypes;

    if (user.userType != UserType.Admin && user.userType != UserType.Manager)
        return res.status(403).json(
            new ClientErrorResponse(["You do not have sufficient permissions."]));

    // Get company
    const company: CompanyDocument = await getCompanyById(user.company);

    if (!company)
        return res.status(500).json(new ClientErrorResponse(["Company not found."]));

    let users: UserDocument[] = await getCompanyUsersById(company.id);

    if (userTypesToFilter) {
        let filters = userTypesToFilter.split(',')
        users = users.filter(u => {
            for (let i = 0; i < filters.length; i++) {
                if (u.userType == filters[i])
                    return true;
            }
            return false;
        })
    }

    res.status(200).send(users);
});

/**
 * Add user to company
 */
routes.post("/", async (req: Request, res: Response) => {
    const user: User = req.user;
    const newUser: User = req.body;

    if (user.userType != UserType.Admin && user.userType != UserType.Manager)
        return res.status(403).json(
            new ClientErrorResponse(["You do not have sufficient permissions."]));

    newUser.firstName = newUser.firstName == null ? null : newUser.firstName.trim();
    newUser.lastName = newUser.lastName == null ? null : newUser.lastName.trim();
    newUser.email = newUser.email == null ? null : newUser.email.toLowerCase().trim();

    const credentialErrors: string[] = [];

    if (newUser.userType != UserType.Admin && newUser.userType != UserType.Manager
        && newUser.userType != UserType.Intern) credentialErrors.push("Invalid user type")
    if (!newUser.firstName) credentialErrors.push("First name cannot be empty.")
    if (!newUser.lastName) credentialErrors.push("Last name cannot be empty.")
    if (!newUser.email) credentialErrors.push("Email cannot be empty.")
    if (!newUser.password || newUser.password.length < 8)
        credentialErrors.push("Password must be at least 8 characters long.")

    // Check if email is already taken
    const emailAlreadyTaken: boolean = await getUserByEmail(newUser.email) == null ? false : true;
    if (emailAlreadyTaken) credentialErrors.push("Email is already taken.");

    if (credentialErrors.length > 0)
        return res.status(400).json(new ClientErrorResponse(credentialErrors));

    // Get company
    const company: CompanyDocument = await getCompanyById(user.company);

    if (!company)
        return res.status(500).json(new ClientErrorResponse(["Company not found."]));

    let userDoc: UserDocument = await createNewUser(newUser);

    company.users.push(userDoc);

    try {
        await updateCompany(company);
    } catch (err) {
        res.status(500).json(new ClientErrorResponse(["Something went wrong."]))
    }

    res.status(200).send(userDoc);
});

/**
 * Update user
 */
routes.put("/:id", async (req: Request, res: Response) => {
    const user: User = req.user;
    const updateUserId: string = req.params['id'];
    const newUser: User = req.body;

    if (user.userType != UserType.Admin && user.userType != UserType.Manager)
        return res.status(403).json(
            new ClientErrorResponse(["You do not have sufficient permissions."]));

    delete newUser._id;

    const userDoc: UserDocument = await getUserById(updateUserId);

    if (userDoc == null)
        return res.status(404).json(new ClientErrorResponse(["User not found."]));

    if (newUser.firstName) {
        newUser.firstName = newUser.firstName.trim();
        newUser.firstName = newUser.firstName == "" ? null : newUser.firstName;
    }
    if (newUser.lastName) {
        newUser.lastName = newUser.lastName.trim();
        newUser.lastName = newUser.lastName == "" ? null : newUser.lastName;
    }
    if (newUser.email) {
        newUser.email = newUser.email.trim();
        newUser.email = newUser.email == "" ? null : newUser.email;
    }
    if (newUser.userType) {
        newUser.userType = newUser.userType.trim();
        newUser.userType = newUser.userType == "" ? null : newUser.userType;
    }
    if (newUser.deactivated) {
        newUser.deactivated = newUser.deactivated;
    }

    const credentialErrors: string[] = [];

    // Check if email is already taken
    const userAlreadyExists: UserDocument = await getUserByEmail(newUser.email);
    if (userAlreadyExists && userAlreadyExists.id.toString() != updateUserId)
        credentialErrors.push("Email is already taken.");

    if (credentialErrors.length > 0)
        return res.status(400).json(new ClientErrorResponse(credentialErrors));

    const updatedUser: UserDocument = await updateUser(updateUserId, newUser);

    res.status(200).send(updatedUser);
});

module.exports = routes;