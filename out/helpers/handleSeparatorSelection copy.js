"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSeparatorSelection = handleSeparatorSelection;
const vscode_1 = require("vscode");
const _constants_1 = require("@constants");
async function handleSeparatorSelection() {
    let separator;
    const separatorOptions = [
        'new line',
        'double new line',
        'custom',
    ];
    const selectedSeparator = (await vscode_1.window.showQuickPick(separatorOptions, {
        placeHolder: 'Choose the separator between code blocks',
    }));
    if (!selectedSeparator) {
        throw new Error('No separator option selected');
    }
    if (selectedSeparator === 'custom') {
        const inputtedSeparator = await vscode_1.window.showInputBox({
            placeHolder: 'Please provide a custom separator between code blocks to be sorted',
        });
        if (!inputtedSeparator) {
            throw new Error('No separator provided');
        }
        separator = inputtedSeparator;
    }
    else {
        separator = _constants_1.predefinedSeparatorMap[selectedSeparator];
    }
    return separator;
}
//# sourceMappingURL=handleSeparatorSelection%20copy.js.map