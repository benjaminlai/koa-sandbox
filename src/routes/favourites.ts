import { Context } from "koa";
import Router from "koa-router";

const favouritesRouter = new Router();

favouritesRouter.get("/testing", (ctx: Context) => {
  ctx.body = "hello world";
});

export default favouritesRouter;
