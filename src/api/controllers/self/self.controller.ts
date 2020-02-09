import { Router, Response, Request } from "express";

const routes: Router = Router()

/**
 * Get current user details
 */
routes.get("/", (req: Request, res: Response) => {
    res.status(200).json(req.user);
});

module.exports = routes;