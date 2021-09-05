"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
const cleanAll_1 = require("./handlers/cleanAll");
const cleanJob_1 = require("./handlers/cleanJob");
const entryPoint_1 = require("./handlers/entryPoint");
const jobLogs_1 = require("./handlers/jobLogs");
const pauseQueue_1 = require("./handlers/pauseQueue");
const promotJob_1 = require("./handlers/promotJob");
const queues_1 = require("./handlers/queues");
const resumeQueue_1 = require("./handlers/resumeQueue");
const retryAll_1 = require("./handlers/retryAll");
const retryJob_1 = require("./handlers/retryJob");
exports.appRoutes = {
    entryPoint: {
        method: 'get',
        route: ['/', '/queue/:queueName'],
        handler: entryPoint_1.entryPoint,
    },
    api: [
        { method: 'get', route: '/api/queues', handler: queues_1.queuesHandler },
        {
            method: 'get',
            route: '/api/queues/:queueName/:jobId/logs',
            handler: jobLogs_1.jobLogsHandler,
        },
        {
            method: 'put',
            route: '/api/queues/:queueName/retry',
            handler: retryAll_1.retryAllHandler,
        },
        {
            method: 'put',
            route: '/api/queues/:queueName/clean/:queueStatus',
            handler: cleanAll_1.cleanAllHandler,
        },
        {
            method: 'put',
            route: '/api/queues/:queueName/pause',
            handler: pauseQueue_1.pauseQueueHandler,
        },
        {
            method: 'put',
            route: '/api/queues/:queueName/resume',
            handler: resumeQueue_1.resumeQueueHandler,
        },
        {
            method: 'put',
            route: '/api/queues/:queueName/:jobId/retry',
            handler: retryJob_1.retryJobHandler,
        },
        {
            method: 'put',
            route: '/api/queues/:queueName/:jobId/clean',
            handler: cleanJob_1.cleanJobHandler,
        },
        {
            method: 'put',
            route: '/api/queues/:queueName/:jobId/promote',
            handler: promotJob_1.promoteJobHandler,
        },
    ],
};
//# sourceMappingURL=routes.js.map