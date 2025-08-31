export {isNumber}

const NUMBER_REGEXP: RegExp = /^[+-]?((\d+(\.\d*)?)|(\.\d+))([eE][+-]?\d+)?$/

function isNumber(s: string): boolean {
    return NUMBER_REGEXP.test(s.trim())
}
