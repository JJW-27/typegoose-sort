"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSeparatorSelection = handleSeparatorSelection;
const vscode_1 = require("vscode");
const constants_1 = require("../constants");
async function handleSeparatorSelection() {
    let separator;
    const separatorOptions = [
        'new line',
        'double new line',
        'custom',
    ];
    const selectedSeparator = (await vscode_1.window.showQuickPick(separatorOptions, {
        placeHolder: 'Choose a separator to split selected code into blocks',
        title: 'Select separator',
    }));
    if (!selectedSeparator) {
        throw new Error('No separator option selected');
    }
    if (selectedSeparator === 'custom') {
        const inputtedSeparator = await vscode_1.window.showInputBox({
            placeHolder: 'Input a separator to split selected code into blocks',
            title: 'Input custom separator',
        });
        if (!inputtedSeparator) {
            throw new Error('No separator provided');
        }
        separator = inputtedSeparator;
    }
    else {
        separator = constants_1.predefinedSeparatorMap[selectedSeparator];
    }
    return separator;
}
//# sourceMappingURL=handleSeparatorSelection.js.map