import { Request, Response } from "express"
import { controller, get } from "./decorators"

@controller("")
export class RootController {

    @get("/")
    getRoot(req: Request, res: Response) {
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
    }
}