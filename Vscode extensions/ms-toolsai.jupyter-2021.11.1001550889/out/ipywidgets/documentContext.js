// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
'use strict';
import { NotebookModel } from '@jupyterlab/notebook/lib';
import { Signal } from './signal';
import { SessionConnection } from './sessionConnection';
// tslint:disable: no-any
export class DocumentContext {
    constructor(kernel) {
        // We are the session context
        this.kernel = kernel;
        this.pathChanged = new Signal();
        this.fileChanged = new Signal();
        this.saveState = new Signal();
        this.disposed = new Signal();
        this.sessionContext = this;
        this.terminated = new Signal();
        this.kernelChanged = new Signal();
        this.sessionChanged = new Signal();
        this.propertyChanged = new Signal();
        // Create a 'session connection' from the kernel
        this.sessionConnection = new SessionConnection(this.kernel);
        // Generate a dummy notebook model
        this.model = new NotebookModel();
    }
    rename(_newName) {
        throw new Error('Method not implemented.');
    }
    download() {
        throw new Error('Method not implemented.');
    }
    get session() {
        return this.sessionConnection;
    }
    initialize() {
        throw new Error('Method not implemented.');
    }
    get isTerminating() {
        return this.kernel.status == 'terminating';
    }
    get isRestarting() {
        return this.kernel.status == 'restarting' || this.kernel.status == 'autorestarting';
    }
    get connectionStatusChanged() {
        return this.kernel.connectionStatusChanged;
    }
    get statusChanged() {
        return this.kernel.statusChanged;
    }
    get iopubMessage() {
        return this.kernel.iopubMessage;
    }
    get unhandledMessage() {
        return this.kernel.unhandledMessage;
    }
    get status() {
        return this.kernel.status;
    }
    get kernelPreference() {
        return {
            name: this.kernel.name
        };
    }
    get kernelDisplayName() {
        return this.kernel.name;
    }
    get hasNoKernel() {
        return false;
    }
    get kernelDisplayStatus() {
        return this.status;
    }
    get prevKernelName() {
        return this.kernel.name;
    }
    get sessionManager() {
        throw new Error('Method not implemented.');
    }
    get specsManager() {
        throw new Error('Method not implemented.');
    }
    restartKernel() {
        throw new Error('Method not implemented.');
    }
    changeKernel(_options) {
        throw new Error('Method not implemented.');
    }
    shutdown() {
        throw new Error('Method not implemented.');
    }
    selectKernel() {
        throw new Error('Method not implemented.');
    }
    restart() {
        throw new Error('Method not implemented.');
    }
    setPath(_path) {
        throw new Error('Method not implemented.');
    }
    setName(_name) {
        throw new Error('Method not implemented.');
    }
    setType(_type) {
        throw new Error('Method not implemented.');
    }
    addSibling(_widget, _options) {
        throw new Error('Method not implemented.');
    }
    save() {
        throw new Error('Method not implemented.');
    }
    saveAs() {
        throw new Error('Method not implemented.');
    }
    revert() {
        throw new Error('Method not implemented.');
    }
    createCheckpoint() {
        throw new Error('Method not implemented.');
    }
    deleteCheckpoint(_checkpointID) {
        throw new Error('Method not implemented.');
    }
    restoreCheckpoint(_checkpointID) {
        throw new Error('Method not implemented.');
    }
    listCheckpoints() {
        throw new Error('Method not implemented.');
    }
    dispose() {
        throw new Error('Method not implemented.');
    }
}
//# sourceMappingURL=documentContext.js.map