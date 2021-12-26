import { IChangedArgs } from '@jupyterlab/coreutils';
import { Kernel } from '@jupyterlab/services';
import { ISessionConnection } from '@jupyterlab/services/lib/session/session';
import { ISignal } from '@lumino/signaling';
export declare class SessionConnection implements ISessionConnection {
    readonly kernel: Kernel.IKernelConnection;
    private _id;
    constructor(kernel: Kernel.IKernelConnection);
    propertyChanged: ISignal<this, 'path' | 'name' | 'type'>;
    kernelChanged: ISignal<this, IChangedArgs<Kernel.IKernelConnection, Kernel.IKernelConnection, 'kernel'>>;
    get statusChanged(): any;
    get connectionStatusChanged(): any;
    get iopubMessage(): any;
    get unhandledMessage(): any;
    get anyMessage(): any;
    get id(): string;
    get path(): string;
    get name(): string;
    get type(): string;
    get serverSettings(): import("@jupyterlab/services").ServerConnection.ISettings;
    get model(): {
        id: string;
        name: string;
        path: string;
        type: string;
        kernel: Kernel.IModel;
    };
    setPath(_path: string): Promise<void>;
    setName(_name: string): Promise<void>;
    setType(_type: string): Promise<void>;
    changeKernel(_options: Partial<Kernel.IModel>): Promise<Kernel.IKernelConnection>;
    shutdown(): Promise<void>;
    get disposed(): any;
    get isDisposed(): boolean;
    dispose(): void;
}
