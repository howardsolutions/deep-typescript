import { NextFunction, Request, Response } from 'express';
import { AppRouter } from '../AppRouter';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403)
  res.send(`Not Permitted`)
}

const router = AppRouter.getInstance();


router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send("Welcome to protected route, logged in user")
})

export { router };
