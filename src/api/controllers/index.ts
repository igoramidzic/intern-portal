import { Router, Request, Response } from "express"

const routes: Router = Router()


// Public
routes.use('/auth', require('./_auth/auth.controller'));

routes.use((req: Request, res: Response, next: any) => {
    req.user ? next() : res.status(401).json({ errors: ['login is required'] });
});

// Auth Protected
routes.use('/company', require('./company/company.controller'));
routes.use('/self', require('./self/self.controller'));
routes.use('/setup', require('./setup/setup.controller'));
routes.use('/users', require('./user/user.controller'));
routes.use('/teams', require('./team/team.controller'));

routes.use('**', (req, res) => {
    res.status(404).json({
        errors: ['Api endpoint does not exist']
    })
})

module.exports = routes