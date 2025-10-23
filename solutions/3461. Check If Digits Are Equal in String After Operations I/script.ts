export {hasSameDigits}

function hasSameDigits(s: string): boolean {
    let digits: string[] = s.split("")

    for (let i: number = 1; i <= s.length - 2; i++) {
        for (let j: number = 0; j <= s.length - 1 - i; j++) {
            digits[j] = String((Number(digits[j]) + Number(digits[j + 1])) % 10)
        }
    }

    return digits[0] === digits[1]
}
