export {fractionAddition}

function fractionAddition(expression: string): string {
    const fractions: string[] = expression.split(/(?=[-+])/)
    let result: number[] = [0, 1]

    for (let fraction of fractions) {
        const [numerator, denominator]: string[] = fraction.split('/')
        const [a, b]: number[] = result
        const [c, d]: number[] = [Number(numerator), Number(denominator)]

        result = [a * d + b * c, b * d]

        const gcd: number = getGCD(result[0], result[1])
        result = [result[0] / gcd, result[1] / gcd]
    }

    return result.join('/')
}

function getGCD(first: number, second: number): number {
    while (second != 0) {
        const temp: number = second
        second = first % second
        first = temp
    }

    return first
}
