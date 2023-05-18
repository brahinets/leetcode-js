const isNumber = (char: string): boolean => char.match(/^\d+$/) !== null;
const MAX_INT32: number = 2 ** 31 - 1;
const MIN_INT32: number = -1 * 2 ** 31;

function myAtoi(s: string): number {
    let digits: string = "";

    for (const char of s.trim()) {
        if (char === '-' || char === '+') {
            if (digits) {
                break;
            } else {
                digits += char;
            }
        } else if (isNumber(char)) {
            digits += char;
        } else {
            break;
        }
    }

    const number: number = Number(digits) ? Number(digits) : 0;
    return number > MAX_INT32 ? MAX_INT32 : number < MIN_INT32 ? MIN_INT32 : number;
}