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
        let rom: number = ROMAN.get(roman[i]) || 0;

        if ((i < roman.length - 1)) {
            let nextRoman: number = ROMAN.get(roman[i + 1]) || 0;
            if (rom < nextRoman) {
                result -= rom;
                continue;
            }
        }

        result += rom;
    }

    return result;
}