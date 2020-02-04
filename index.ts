import Koa from "koa";
import pino from "pino";

const app = new Koa();
const logger = pino({
  name: "society-sheep-api",
  level: "debug"
});

app.listen(3000);
logger.info("Application running on port 3000");
