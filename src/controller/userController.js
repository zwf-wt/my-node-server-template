import Router from 'koa-router';
import { RequestMapping, Controller, RequestMethod } from "../utils/decorator"


@Controller('/user')
export default class UserController {

    @RequestMapping(RequestMethod.GET, '/all')
    async getAllUser(ctx) {
        ctx.body = 'ctx';
    };

}