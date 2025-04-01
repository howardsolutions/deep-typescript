import { Request, Response } from 'express';
import { controller, get, post, bodyValidator } from './decorators';


@controller('/auth')
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response) {
    res.send(`
              <form method="POST">
                <div>
                  <label>Email</label>
                  <input name="email" />
                </div>
                <div>
                  <label>Password</label>
                  <input name="password" type="password" />
                </div>
                <button>Submit</button>
              </form>
            `);
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email === "hi@hi.com" && password === "password") {
      // mark user as logged in
      req.session = { loggedIn: true }
      res.redirect("/")
    } else {
      res.send("Invalid email or password")
    }
  }
}