import {Response, Request} from "express";
import {AxiosResponse} from "axios";

export function loginCookiesAndRedirect<ResBody, Locals, P, ReqBody, ReqQuery>(data: AxiosResponse<any>, res: Response<ResBody, Locals>, req: Request<P, ResBody, ReqBody, ReqQuery, Locals>) {
    const {token, expiresAt} = data.data;
    res.cookie("username", (req.body as any).username, {httpOnly: true});
    res.cookie("token", token, {httpOnly: true});
    res.cookie("expiresAt", expiresAt, {httpOnly: true});
    return res.redirect("/home");
}