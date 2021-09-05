import { JobCleanStatus, JobCounts, JobStatus, QueueAdapterOptions, QueueJob } from '../../typings/app';
export declare abstract class BaseAdapter {
    readonly readOnlyMode: boolean;
    private formatters;
    protected constructor(options?: Partial<QueueAdapterOptions>);
    setFormatter(field: 'data' | 'returnValue', formatter: (data: any) => any): void;
    format(field: 'data' | 'returnValue', data: any): any;
    abstract clean(queueStatus: JobCleanStatus, graceTimeMs: number): Promise<void>;
    abstract getJob(id: string): Promise<QueueJob | undefined | null>;
    abstract getJobCounts(...jobStatuses: JobStatus[]): Promise<JobCounts>;
    abstract getJobs(jobStatuses: JobStatus[], start?: number, end?: number): Promise<QueueJob[]>;
    abstract getJobLogs(id: string): Promise<string[]>;
    abstract getName(): string;
    abstract getRedisInfo(): Promise<string>;
    abstract isPaused(): Promise<boolean>;
    abstract pause(): Promise<void>;
    abstract resume(): Promise<void>;
}
