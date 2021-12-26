// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
'use strict';
import { uuid } from '@jupyter-widgets/base';
export class SessionConnection {
    constructor(kernel) {
        this.kernel = kernel;
        this._id = uuid();
    }
    get statusChanged() {
        return this.kernel.statusChanged;
    }
    get connectionStatusChanged() {
        return this.kernel.connectionStatusChanged;
    }
    get iopubMessage() {
        return this.kernel.iopubMessage;
    }
    get unhandledMessage() {
        return this.kernel.unhandledMessage;
    }
    get anyMessage() {
        return this.kernel.anyMessage;
    }
    get id() {
        return this._id;
    }
    get path() {
        return ''; // This would be the path to the notebook file
    }
    get name() {
        return this.kernel.name;
    }
    get type() {
        return 'notebook';
    }
    get serverSettings() {
        return this.kernel.serverSettings;
    }
    get model() {
        return {
            id: this._id,
            name: this.name,
            path: '',
            type: 'notebook',
            kernel: this.kernel.model
        };
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
    changeKernel(_options) {
        throw new Error('Method not implemented.');
    }
    shutdown() {
        throw new Error('Method not implemented.');
    }
    get disposed() {
        return this.kernel.disposed;
    }
    get isDisposed() {
        return this.kernel.isDisposed;
    }
    dispose() {
        // Don't actually dispose. We control disposal
    }
}
//# sourceMappingURL=sessionConnection.js.map