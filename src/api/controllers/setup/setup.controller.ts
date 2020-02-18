import { Router, Response, Request } from "express";
import { User, UserType, UserDocument } from "../../../models/user/user.model";
import { ClientErrorResponse, serverError, asyncHandler } from "../../../api/helpers/helpers";
import { Company, CompanyDocument } from "../../../models/company/company.model";
import { createNewCompany, getCompanyById, updateCompany } from "../../../api/handlers/company/company.handler";
import { getUserById } from "../../../api/handlers/user/user.handler";
import { setupAdmin, setupManager } from "../../../api/handlers/setup/setup.handler";

const routes: Router = Router()

/**
 * Setup Admin
 */
routes.post("/admin", async (req: Request, res: Response) => {
    let user: User = req.user;
    let { company } = req.body;

    if (user.userType != UserType.Admin)
        return res.status(403).json(
            new ClientErrorResponse(["Only an admin can perform admin setup."]));

    if (user.setupCompleted)
        return res.status(400).json(
            new ClientErrorResponse(["Setup was already completed."]));

    company.name = company.name == null ? null : company.name.trim();

    const inputErrors: string[] = [];

    // Check if company from body is valid
    if (!company.name) inputErrors.push("Company name cannot be empty.")

    if (inputErrors.length > 0)
        return res.status(400).json(new ClientErrorResponse(inputErrors));

    try {
        let result = await setupAdmin(user, { company });
        return res.status(200).json(result);
    } catch (e) {
        return res.status(400).json(new ClientErrorResponse([e]))
    }
});

/**
 * Setup Manager
 */
routes.post("/manager", async (req: Request, res: Response) => {
    let user: User = req.user;
    let { } = req.body;

    if (user.userType != UserType.Manager)
        return res.status(403).json(
            new ClientErrorResponse(["Only a manager can perform manager setup."]));

    if (user.setupCompleted)
        return res.status(400).json(
            new ClientErrorResponse(["Setup was already completed."]));

    const inputErrors: string[] = [];

    // Check input from body is valid
    // ..

    if (inputErrors.length > 0)
        return res.status(400).json(new ClientErrorResponse(inputErrors));

    try {
        let result = await setupManager(user, {});
        return res.status(200).json(result);
    } catch (e) {
        return res.status(400).json(new ClientErrorResponse([e]))
    }
});

/**
 * Setup Manager
 */
routes.post("/intern", async (req: Request, res: Response) => {
    let user: User = req.user;
    let { } = req.body;

    if (user.userType != UserType.Intern)
        return res.status(403).json(
            new ClientErrorResponse(["Only an intern can perform intern setup."]));

    if (user.setupCompleted)
        return res.status(400).json(
            new ClientErrorResponse(["Setup was already completed."]));

    const inputErrors: string[] = [];

    // Check input from body is valid
    // ..

    if (inputErrors.length > 0)
        return res.status(400).json(new ClientErrorResponse(inputErrors));

    try {
        let result = await setupManager(user, {});
        return res.status(200).json(result);
    } catch (e) {
        return res.status(400).json(new ClientErrorResponse([e]))
    }
});

module.exports = routes;