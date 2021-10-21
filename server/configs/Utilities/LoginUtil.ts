import {Response, Request} from "express";
import {AxiosResponse} from "axios";

interface dataBody{
    username: string,
    token: string,
    expiresAt: string
}
export function loginCookiesAndRedirect<ResBody, Locals, P, ReqBody, ReqQuery>(data: dataBody, res: Response<ResBody, Locals>, req: Request<P, ResBody, ReqBody, ReqQuery, Locals>) {
    const {username, token, expiresAt} = data;
    res.cookie("username", (req.body as any).username, {httpOnly: true});
    res.cookie("token", token, {httpOnly: true});
    res.cookie("expiresAt", expiresAt, {httpOnly: true});
}