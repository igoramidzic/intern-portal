import { Router, Response, Request } from "express";
import { User, UserType, UserDocument } from "../../../models/user/user.model";
import { ClientErrorResponse, serverError, asyncHandler } from "../../../api/helpers/helpers";
import { Company, CompanyDocument } from "../../../models/company/company.model";
import { createNewCompany, getCompanyById, updateCompany } from "../../../api/handlers/company/company.handler";
import { getUserById } from "../../../api/handlers/user/user.handler";
import { setupAdmin } from "../../../api/handlers/setup/setup.handler";

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
 * Setup Admin
 */
routes.post("/delete-later", async (req: Request, res: Response) => {
    let user: User = req.user;
    const company: Company = req.body;

    company.name = company.name == null ? null : company.name.trim();

    // Check if user is admin
    if (user.userType != UserType.Admin)
        return res.status(403).json(
            new ClientErrorResponse(["Only an admin can create a comopany."]));

    // Check if user already belongs to a company
    const companyExists: CompanyDocument = await getCompanyById(user.company);
    if (companyExists != null)
        return res.status(400).json(
            new ClientErrorResponse(["Company already exists. Not allowed to create multiple companies."]));

    const inputErrors: string[] = [];

    // Check if company from body is valid
    if (!company.name) inputErrors.push("Company name cannot be empty.")

    if (inputErrors.length > 0)
        return res.status(400).json(new ClientErrorResponse(inputErrors));

    let userDoc: UserDocument = await getUserById(user.id);

    await createNewCompany(company)
        .then(async (company: CompanyDocument) => {
            return res.status(200).json(company);
        })
        .catch(() => serverError(res))
});

module.exports = routes;