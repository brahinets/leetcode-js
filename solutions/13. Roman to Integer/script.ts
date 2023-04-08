export {romanToInt}

const ROMAN: Map<string, number> = new Map<string, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000]
]);

const romanToInt = function (roman: string): number {
    let result: number = 0;

    for (let i: number = 0; i < roman.length; i++) {
        const integer: number = getRom(roman[i]);

        if (i < roman.length - 1) {
            const nextInteger: number = getRom(roman[i + 1]);
            if (integer < nextInteger) {
                result -= integer;
                continue;
            }
        }

        result += integer;
    }

    return result;
}

function getRom(roman: string): number {
    let integer: number | undefined = ROMAN.get(roman)

    if (integer === undefined) {
        throw new Error("Roman mapping not found");
    }

    return integer;
}