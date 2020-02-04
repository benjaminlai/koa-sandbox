import Router from "koa-router";

import favourites from "./favourites";

const router = new Router();

router.use(favourites.routes());
router.use(favourites.allowedMethods());

export default router;
