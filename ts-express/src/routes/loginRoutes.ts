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

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === "hi@hi.com" && password === "password") {
    // mark user as logged in
    req.session = { loggedIn: true }
    res.redirect("/")
  } else {
    res.send("Invalid email or password")
  }
});

router.get("/", (req: Request, res: Response) => {
  if (req.session?.loggedIn) {
    res.send(`
        <div>
          <div>You're logged in</div>
          <a href="/logout">Logout</a>
        </div>
      `)
  } else {
    res.send(`
      <div>
        <div>You're NOT logged in</div>
        <a href="/login">Login</a>
      </div>
    `)
  }
})

router.post('/logout', (req: RequestWithBody, res: Response) => {
  req.session = undefined;
  res.redirect("/")
});

router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send("Welcome to protected route, logged in user")
})

export { router };
