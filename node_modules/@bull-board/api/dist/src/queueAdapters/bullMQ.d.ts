import { Job, Queue } from 'bullmq';
import { JobCleanStatus, JobCounts, JobStatus, QueueAdapterOptions } from '../../typings/app';
import { BaseAdapter } from './base';
export declare class BullMQAdapter extends BaseAdapter {
    private queue;
    private readonly LIMIT;
    constructor(queue: Queue, options?: Partial<QueueAdapterOptions>);
    getRedisInfo(): Promise<string>;
    getName(): string;
    clean(jobStatus: JobCleanStatus, graceTimeMs: number): Promise<void>;
    getJob(id: string): Promise<Job | undefined>;
    getJobs(jobStatuses: JobStatus[], start?: number, end?: number): Promise<Job[]>;
    getJobCounts(...jobStatuses: JobStatus[]): Promise<JobCounts>;
    getJobLogs(id: string): Promise<string[]>;
    isPaused(): Promise<boolean>;
    pause(): Promise<void>;
    resume(): Promise<void>;
}
