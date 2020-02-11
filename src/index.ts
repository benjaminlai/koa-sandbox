import Koa from "koa";
import pino from "pino";

import routes from "./routes";

const logger = pino({
  name: "koa-sandbox",
  level: "debug"
});
const app = new Koa();

app.use(routes.routes());
app.use(routes.allowedMethods());

app.listen(3000);
logger.info("Application running on port 3000");
