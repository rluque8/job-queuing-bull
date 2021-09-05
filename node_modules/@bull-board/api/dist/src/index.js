"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBullBoard = void 0;
const queuesApi_1 = require("./queuesApi");
const path_1 = __importDefault(require("path"));
const routes_1 = require("./routes");
const error_1 = require("./handlers/error");
function createBullBoard({ queues, serverAdapter, }) {
    const { bullBoardQueues, setQueues, replaceQueues, addQueue, removeQueue } = queuesApi_1.getQueuesApi(queues);
    const uiBasePath = path_1.default.dirname(eval(`require.resolve('@bull-board/ui/package.json')`));
    serverAdapter
        .setQueues(bullBoardQueues)
        .setViewsPath(path_1.default.join(uiBasePath, 'dist'))
        .setStaticPath('/static', path_1.default.join(uiBasePath, 'dist/static'))
        .setEntryRoute(routes_1.appRoutes.entryPoint)
        .setErrorHandler(error_1.errorHandler)
        .setApiRoutes(routes_1.appRoutes.api);
    return { setQueues, replaceQueues, addQueue, removeQueue };
}
exports.createBullBoard = createBullBoard;
//# sourceMappingURL=index.js.map