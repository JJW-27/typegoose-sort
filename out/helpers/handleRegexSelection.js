"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRegexSelection = handleRegexSelection;
const vscode_1 = require("vscode");
const constants_1 = require("../constants");
async function handleRegexSelection(selectedMatchType) {
    let regex;
    if (selectedMatchType === 'custom') {
        const inputtedString = await vscode_1.window.showInputBox({
            title: 'Input custom regex matcher',
            placeHolder: 'Type your custom regex here',
            prompt: 'The matched text for each block will be used to determine sort order of code blocks, note that capture groups will not be respected, you must use positive and negative lookahead/lookbehinds',
        });
        if (!inputtedString) {
            throw new Error('No regex provided');
        }
        regex = new RegExp(inputtedString || '');
    }
    else {
        regex = constants_1.regexMap[selectedMatchType];
    }
    return regex;
}
//# sourceMappingURL=handleRegexSelection.js.map