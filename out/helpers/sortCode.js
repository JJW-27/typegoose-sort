"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortCode = sortCode;
function sortCode(code, sortOrder) {
    const separator = '\n\n';
    const regex = /(?<=public )\w+(?=[?!]*:)/;
    const splitCode = code.trim().split(separator);
    const sortedCode = splitCode.sort((a, b) => {
        const aText = a.match(regex)?.[0];
        const bText = b.match(regex)?.[0];
        if (!aText) {
            throw new Error(`'${a}' does not match regex`);
        }
        if (!bText) {
            throw new Error(`'${b}' does not match regex`);
        }
        const sortComparison = aText.localeCompare(bText);
        if (sortComparison === 0) {
            return 0;
        }
        else if (sortOrder === 'ascending') {
            return sortComparison;
        }
        else {
            return sortComparison === 1 ? -1 : 1;
        }
    });
    return sortedCode.join(separator);
}
//# sourceMappingURL=sortCode.js.map