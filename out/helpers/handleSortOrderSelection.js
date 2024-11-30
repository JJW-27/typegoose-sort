"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSortOrderSelection = handleSortOrderSelection;
const vscode_1 = require("vscode");
const constants_1 = require("../constants");
async function handleSortOrderSelection() {
    const selectedSortOrder = (await vscode_1.window.showQuickPick(constants_1.sortOrderOptions, {
        placeHolder: 'Choose a sort order',
    }));
    if (!selectedSortOrder) {
        throw new Error('No sort order selected');
    }
    else {
        return selectedSortOrder;
    }
}
//# sourceMappingURL=handleSortOrderSelection.js.map