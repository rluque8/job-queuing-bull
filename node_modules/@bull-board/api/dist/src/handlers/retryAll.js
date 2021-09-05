"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retryAllHandler = void 0;
const queue_1 = require("../providers/queue");
const statuses_1 = require("../constants/statuses");
async function retryAll(_req, queue) {
    const jobs = await queue.getJobs([statuses_1.STATUSES.failed]);
    await Promise.all(jobs.map((job) => job.retry()));
    return { status: 200, body: {} };
}
exports.retryAllHandler = queue_1.queueProvider(retryAll);
//# sourceMappingURL=retryAll.js.map