import { Router, Response, Request } from "express";
import { User } from "../../../models/user/user.model";
import { ClientErrorResponse, serverError, asyncHandler } from "../../../api/helpers/helpers";
import { Company, CompanyDocument } from "../../../models/company/company.model";
import { getCompanyById, updateCompany } from "../../../api/handlers/company/company.handler";

const routes: Router = Router()

/**
 * Get company by Id
 */
routes.get("/", async (req: Request, res: Response) => {
    const user: User = req.user;

    const company: CompanyDocument = await getCompanyById(user.company);

    if (!company)
        return res.status(404).json(new ClientErrorResponse(['Company not found']));

    res.status(200).json(company);
});

/**
 * Update company
 */
routes.put("/", asyncHandler(async (req: Request, res: Response) => {
    const companyDetailsToUpdate: Company = req.body;
    const user: User = req.user;

    // Get CompanyDocument
    const company: CompanyDocument = await getCompanyById(user.company);
    if (company == null)
        return res.status(404).json(new ClientErrorResponse(["Not found."]));

    company.name = companyDetailsToUpdate.name == null ? null : companyDetailsToUpdate.name.trim();

    const inputErrors: string[] = [];

    // Check if company from body is valid
    if (!company.name) inputErrors.push("Company name cannot be empty.")

    if (inputErrors.length > 0)
        return res.status(400).json(new ClientErrorResponse(inputErrors));

    updateCompany(company)
        .then((company: CompanyDocument) => {
            res.status(200).json(company)
        })
        .catch(err => serverError(res))
}));

module.exports = routes;