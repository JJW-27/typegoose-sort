"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRegexSelection = handleRegexSelection;
const vscode_1 = require("vscode");
const _constants_1 = require("@constants");
async function handleRegexSelection(selectedMatchType) {
    let regex;
    if (selectedMatchType === 'custom') {
        const inputtedString = await vscode_1.window.showInputBox({
            placeHolder: 'Please provide a regex to distinguish code blocks to be sorted',
        });
        if (!inputtedString) {
            throw new Error('No regex provided');
        }
        regex = new RegExp(inputtedString || '');
    }
    else {
        regex = _constants_1.regexMap[selectedMatchType];
    }
    return regex;
}
//# sourceMappingURL=handleRegexSelection%20copy.js.map