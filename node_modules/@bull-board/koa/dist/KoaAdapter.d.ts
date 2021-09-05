import { AppControllerRoute, AppViewRoute, BullBoardQueues, ControllerHandlerReturnType, IServerAdapter } from '@bull-board/api/dist/typings/app';
import Koa from 'koa';
export declare class KoaAdapter implements IServerAdapter {
    private basePath;
    private bullBoardQueues;
    private errorHandler;
    private statics;
    private viewPath;
    private entryRoute;
    private apiRoutes;
    setBasePath(path: string): KoaAdapter;
    setStaticPath(staticsRoute: string, staticsPath: string): KoaAdapter;
    setViewsPath(viewPath: string): KoaAdapter;
    setErrorHandler(handler: (error: Error) => ControllerHandlerReturnType): this;
    setApiRoutes(routes: AppControllerRoute[]): KoaAdapter;
    setEntryRoute(routeDef: AppViewRoute): KoaAdapter;
    setQueues(bullBoardQueues: BullBoardQueues): KoaAdapter;
    registerPlugin(): Koa.Middleware<Koa.DefaultState, Koa.DefaultContext, any>;
}
