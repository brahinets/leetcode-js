export {fractionAddition}

function fractionAddition(expression: string): string {
    const fractions: string[] = expression.split(/(?=[-+])/)
    let resultNumerator: number = 0
    let resultDenominator: number = 1

    for (let fraction of fractions) {
        const [numerator, denominator]: string[] = fraction.split('/')
        const [a, b]: number[] = [resultNumerator, resultDenominator]
        const [c, d]: number[] = [Number(numerator), Number(denominator)]

        resultNumerator = a * d + b * c
        resultDenominator = b * d
    }

    const gcd: number = getGCD(resultNumerator, resultDenominator)
    resultNumerator = resultNumerator / gcd
    resultDenominator = resultDenominator / gcd

    if (resultDenominator < 0) {
        resultNumerator = -resultNumerator
        resultDenominator = -resultDenominator
    }

    return resultNumerator + '/' + resultDenominator
}

function getGCD(first: number, second: number): number {
    while (second != 0) {
        const temp: number = second
        second = first % second
        first = temp
    }

    return first
}
