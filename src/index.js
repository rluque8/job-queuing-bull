const Koa = require("koa");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();
const bodyParser = require('koa-bodyparser');

const { ordersQueue, createNewOrder } = require("./queues/orders-queue");
const { createBullBoard } = require('@bull-board/api');
const { BullAdapter } = require('@bull-board/api/bullAdapter');
const { KoaAdapter } = require('@bull-board/koa');

const serverAdapter = new KoaAdapter();
serverAdapter.setBasePath("/admin");

createBullBoard({
  queues: [new BullAdapter(ordersQueue)],
  serverAdapter,
});


router.get("/health", (ctx) => {
  ctx.body = {
    status: "ok",
    data: "Server is working",
  };
});

router.post("/order", async (ctx) => {
  await createNewOrder(ctx.request.body);
  ctx.body = {
    status: "ok",
    data: {
      msg: "Order processed successfully!",
      order: ctx.request.body,
    },
  };
});

app.use(serverAdapter.registerPlugin());

app.use(bodyParser()).use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log("Server up and running!"));
