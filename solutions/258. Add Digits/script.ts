export {addDigits}

function addDigits(num: number): number {
    let result: number = num;

    while (`${result}`.length !== 1) {
        result = `${result}`
            .split("")
            .map(Number)
            .reduce((sum: number, digit: number) => sum + digit, 0)
    }

    return result;
}