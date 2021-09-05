import { BaseAdapter } from './queueAdapters/base';
import { IServerAdapter } from '../typings/app';
export declare function createBullBoard({ queues, serverAdapter, }: {
    queues: ReadonlyArray<BaseAdapter>;
    serverAdapter: IServerAdapter;
}): {
    setQueues: (newBullQueues: readonly BaseAdapter[]) => void;
    replaceQueues: (newBullQueues: readonly BaseAdapter[]) => void;
    addQueue: (queue: BaseAdapter) => void;
    removeQueue: (queueOrName: string | BaseAdapter) => void;
};
