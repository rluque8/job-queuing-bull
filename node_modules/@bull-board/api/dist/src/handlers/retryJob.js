"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retryJobHandler = void 0;
const job_1 = require("../providers/job");
const queue_1 = require("../providers/queue");
async function retryJob(_req, job) {
    await job.retry();
    return {
        status: 204,
        body: {},
    };
}
exports.retryJobHandler = queue_1.queueProvider(job_1.jobProvider(retryJob));
//# sourceMappingURL=retryJob.js.map