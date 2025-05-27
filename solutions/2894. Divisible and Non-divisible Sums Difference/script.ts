export {differenceOfSums}

function differenceOfSums(n: number, m: number): number {
    const divisibleSum: number = (n * (n + 1) / 2) - (Math.floor(n / m) * (Math.floor(n / m) + 1) / 2) * m
    const nonDivisibleSum: number = n * (n + 1) / 2 - divisibleSum

    return divisibleSum - nonDivisibleSum
}
