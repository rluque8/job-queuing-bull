import { BullBoardRequest, ControllerHandlerReturnType, QueueJob } from '../../typings/app';
import { BaseAdapter } from '../queueAdapters/base';
export declare function jobProvider(next: (req: BullBoardRequest, job: QueueJob) => Promise<ControllerHandlerReturnType>): (req: BullBoardRequest, queue: BaseAdapter) => Promise<ControllerHandlerReturnType>;
