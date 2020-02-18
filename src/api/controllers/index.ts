import { Router, Request, Response } from "express"

const routes: Router = Router()


// Public
routes.use('/auth', require('./_auth/auth.controller'));
routes.use('/sample', require('./sample/sample.controller'));

routes.use((req: Request, res: Response, next: any) => {
    req.user ? next() : res.status(401).json({ errors: ['login is required'] });
});

// Auth Protected
routes.use('/self', require('./self/self.controller'));
routes.use('/company', require('./company/company.controller'));
routes.use('/setup', require('./setup/setup.controller'));

routes.use('**', (req, res) => {
    res.status(404).json({
        errors: ['Api endpoint does not exist']
    })
})

module.exports = routes