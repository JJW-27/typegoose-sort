"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleMatchTypeSelection = handleMatchTypeSelection;
const vscode_1 = require("vscode");
const constants_1 = require("../constants");
async function handleMatchTypeSelection() {
    const selectedMatchType = (await vscode_1.window.showQuickPick(constants_1.matchTypeOptions, {
        placeHolder: 'Choose how you would like to determine sort order',
    }));
    if (!selectedMatchType) {
        throw new Error('No code type selected');
    }
    else {
        return selectedMatchType;
    }
}
//# sourceMappingURL=handleMatchTypeSelection.js.map