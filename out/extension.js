"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __importStar(require("vscode"));
const vscode_1 = require("vscode");
const helpers_1 = require("./helpers");
const { showInformationMessage: infoMessage, showErrorMessage: errorMessage } = vscode_1.window;
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "typegoose-sort" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    const disposable = vscode.commands.registerCommand('typegoose-sort.typegooseSort', async () => {
        try {
            const textEditor = vscode_1.window.activeTextEditor;
            if (!textEditor) {
                throw new Error('Unable to locate text editor');
            }
            const selection = textEditor.selection;
            const document = textEditor.document;
            if (!document) {
                throw new Error('Unable to locate document');
            }
            const highlightedCode = document.getText(selection);
            if (!highlightedCode) {
                throw new Error('No code selected');
            }
            const selectedSortOrder = await (0, helpers_1.handleSortOrderSelection)();
            const sortedCode = (0, helpers_1.sortCode)(highlightedCode, selectedSortOrder);
            textEditor.edit(editBuilder => {
                editBuilder.replace(selection, sortedCode);
            });
            return infoMessage('Sort successful!');
        }
        catch (e) {
            if (e instanceof Error) {
                return errorMessage(e.message);
            }
            else {
                return errorMessage(JSON.stringify(e));
            }
        }
    });
    context.subscriptions.push(disposable);
}
// This method is called when your extension is deactivated
function deactivate() { }
//# sourceMappingURL=extension.js.map