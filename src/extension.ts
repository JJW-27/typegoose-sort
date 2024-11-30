// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { window } from 'vscode';
import { handleSortOrderSelection, sortCode } from './helpers';

const { showInformationMessage: infoMessage, showErrorMessage: errorMessage } =
  window;

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "typegoose-sort" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand(
    'typegoose-sort.typegooseSort',
    async () => {
      try {
        const textEditor = window.activeTextEditor;

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

        const selectedSortOrder = await handleSortOrderSelection();

        const sortedCode = sortCode(highlightedCode, selectedSortOrder);

        textEditor.edit(editBuilder => {
          editBuilder.replace(selection, sortedCode);
        });

        return infoMessage('Sort successful!');
      } catch (e: unknown) {
        if (e instanceof Error) {
          return errorMessage(e.message);
        } else {
          return errorMessage(JSON.stringify(e));
        }
      }
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
