"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils = require("../../lib/utils");
define(() => {
    const extension = {
        actions(selection) {
            const result = utils.preserveEndSpace(selection.text, (text) => utils.replaceSpaces(text, '_'));
            if (result !== selection.text) {
                return () => popclip.pasteText(result);
            }
            else {
                return null;
            }
        }
    };
    return extension;
});
