"use strict";
/*
 * extension.ts
 *
 * Provides client for inkling language server. This portion runs
 * in the context of the VS Code process and talks to the server, which
 * runs in another process.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const fs = require("fs");
const path = require("path");
const vscode_1 = require("vscode");
const node_1 = require("vscode-languageclient/node");
function activate(context) {
    const bundlePath = context.asAbsolutePath(path.join('server.bundle.js'));
    const nonBundlePath = context.asAbsolutePath(path.join('server', 'server.js'));
    const debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };
    // If the extension is launched in debug mode, then the debug server options are used.
    // Otherwise the run options are used.
    const serverOptions = {
        run: { module: bundlePath, transport: node_1.TransportKind.ipc },
        // In debug mode, use the non-bundled code if it's present. The production
        // build includes only the bundled package, so we don't want to crash if
        // someone starts the production extension in debug mode.
        debug: {
            module: fs.existsSync(nonBundlePath) ? nonBundlePath : bundlePath,
            transport: node_1.TransportKind.ipc,
            options: debugOptions,
        },
    };
    // Options to control the language client
    const clientOptions = {
        // Register the server for plain text documents
        documentSelector: [
            {
                scheme: 'file',
                language: 'inkling',
            },
        ],
        synchronize: {
            // Synchronize the setting section 'languageServerExample' to the server
            configurationSection: 'inkling',
            // Notify the server about file changes to '.clientrc files contain in the workspace
            fileEvents: vscode_1.workspace.createFileSystemWatcher('**/.clientrc'),
        },
    };
    // Create the language client and start the client.
    const languageClient = new node_1.LanguageClient('inkling', 'Inkling', serverOptions, clientOptions);
    const disposable = languageClient.start();
    // Push the disposable to the context's subscriptions so that the
    // client can be deactivated on extension deactivation.
    context.subscriptions.push(disposable);
    // Register our custom command.
    context.subscriptions.push(vscode_1.commands.registerTextEditorCommand('inkling.formatDocument', (editor) => {
        const cmd = {
            command: 'inkling.formatDocument',
            arguments: [
                {
                    text: editor.document.getText(),
                },
            ],
        };
        languageClient.sendRequest('workspace/executeCommand', cmd).then((formattedText) => {
            if (formattedText) {
                const start = new vscode_1.Position(0, 0);
                const end = new vscode_1.Position(editor.document.lineCount + 1, 0);
                const docRange = editor.document.validateRange(new vscode_1.Range(start, end));
                const edit = new vscode_1.WorkspaceEdit();
                edit.replace(editor.document.uri, docRange, formattedText);
                vscode_1.workspace.applyEdit(edit);
            }
        });
    }, () => {
        // Error received. For now, do nothing.
    }));
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map