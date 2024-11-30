"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleMatchTypeSelection = handleMatchTypeSelection;
const vscode_1 = require("vscode");
const _constants_1 = require("@constants");
async function handleMatchTypeSelection() {
    const selectedMatchType = (await vscode_1.window.showQuickPick(_constants_1.matchTypeOptions, {
        placeHolder: 'Choose what type of code you would like to sort',
    }));
    if (!selectedMatchType) {
        throw new Error('No code type selected');
    }
    else {
        return selectedMatchType;
    }
}
//# sourceMappingURL=handleRegex.js.map