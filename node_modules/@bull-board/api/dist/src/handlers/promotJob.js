"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promoteJobHandler = void 0;
const queue_1 = require("../providers/queue");
const job_1 = require("../providers/job");
async function promoteJob(_req, job) {
    await job.promote();
    return {
        status: 204,
        body: {},
    };
}
exports.promoteJobHandler = queue_1.queueProvider(job_1.jobProvider(promoteJob));
//# sourceMappingURL=promotJob.js.map