import { Router, Response, Request } from "express";
import { User, UserType } from "../../../models/user/user.model";
import { ClientErrorResponse } from "../../../api/helpers/helpers";
import { TeamDocument, Team } from "../../../models/team/team.model";
import { getTeams, createNewTeam, getTeamById, getTeamByName, updateTeam, deleteTeam } from "../../../api/handlers/team/team.handler";
import { CompanyDocument } from "../../../models/company/company.model";
import { getCompanyById, updateCompany } from "../../../api/handlers/company/company.handler";

const routes: Router = Router()

/**
 * Get teams
 */
routes.get("/", async (req: Request, res: Response) => {
    const user: User = req.user;

    try {
        const teams: TeamDocument[] = await getTeams(user.company);
        return res.status(200).json(teams);
    } catch (e) {
        return res.status(500).json(new ClientErrorResponse(["Something went wrong."]));
    }
});

/**
 * Add team to company
 */
routes.post("/", async (req: Request, res: Response) => {
    const user: User = req.user;
    const newTeam: Team = req.body;

    if (user.userType != UserType.Admin && user.userType != UserType.Manager)
        return res.status(403).json(
            new ClientErrorResponse(["You do not have sufficient permissions."]));

    newTeam.name = newTeam.name == null ? null : newTeam.name.trim();

    const credentialErrors: string[] = [];

    if (!newTeam.name) credentialErrors.push("Name cannot be empty.")

    // Check if team name is already taken
    const existingTeam: TeamDocument = await getTeamByName(newTeam.name);
    if (existingTeam != null && existingTeam.company.equals(user.company)) credentialErrors.push("This name is already used by another team.");

    if (credentialErrors.length > 0)
        return res.status(400).json(new ClientErrorResponse(credentialErrors));

    // Get company
    const company: CompanyDocument = await getCompanyById(user.company);

    if (!company)
        return res.status(500).json(new ClientErrorResponse(["Company not found."]));

    newTeam.company = company.id;

    let teamDoc: TeamDocument;
    try {
        teamDoc = await createNewTeam(newTeam);
        res.status(200).send(teamDoc);
    } catch (e) {
        return res.status(500).json(new ClientErrorResponse(["Something went wrong."]));
    }
});

/**
 * Update user
 */
routes.put("/:id", async (req: Request, res: Response) => {
    const user: User = req.user;
    const updateTeamId: string = req.params['id'];
    const newTeam: Team = req.body;

    delete newTeam._id;

    const teamDoc: TeamDocument = await getTeamById(updateTeamId);

    if (teamDoc == null)
        return res.status(404).json(new ClientErrorResponse(["Team not found."]));

    if (user.userType != UserType.Admin && user.userType != UserType.Manager)
        return res.status(403).json(
            new ClientErrorResponse(["You do not have sufficient permissions."]));

    const credentialErrors: string[] = [];

    if (newTeam.name) {
        newTeam.name = newTeam.name.trim();
        if (newTeam.name == "")
            credentialErrors.push("Name cannot be empty");
    }
    if (newTeam.department) {
        newTeam.department = newTeam.department.trim();
    }
    if (newTeam.deactivated) {
        newTeam.deactivated = newTeam.deactivated;
    }

    // Check if team name is already taken
    const existingTeam: TeamDocument = await getTeamByName(newTeam.name);
    if (existingTeam != null && existingTeam.company.equals(user.company) &&
        !existingTeam._id.equals(teamDoc._id))
        credentialErrors.push("This name is already used by another team.");

    if (credentialErrors.length > 0)
        return res.status(400).json(new ClientErrorResponse(credentialErrors));

    try {
        const updatedTeam: TeamDocument = await updateTeam(updateTeamId, newTeam);
        return res.status(200).send(updatedTeam);
    } catch (e) {
        return res.status(500).json(new ClientErrorResponse(["Something went wrong."]));
    }
});

/**
 * Delete team
 */
routes.delete("/:id", async (req: Request, res: Response) => {
    const user: User = req.user;
    const deleteTeamId: string = req.params['id'];

    const teamDoc: TeamDocument = await getTeamById(deleteTeamId);

    if (teamDoc == null)
        return res.status(404).json(new ClientErrorResponse(["Team not found."]));

    if (user.userType != UserType.Admin && user.userType != UserType.Manager)
        return res.status(403).json(new ClientErrorResponse(["You do not have sufficient permissions."]));


    try {
        const deletedTeam: TeamDocument = await deleteTeam(deleteTeamId);
        return res.status(200).send(deletedTeam);
    } catch (e) {
        return res.status(503).json(new ClientErrorResponse(["Something went wrong."]));
    }
});

module.exports = routes;