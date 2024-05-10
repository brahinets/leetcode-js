export {kthSmallestPrimeFraction}

function kthSmallestPrimeFraction(arr: number[], k: number): number[] {
    const fractions: number[][] = []
    for (let i: number = 0; i < arr.length; i++) {
        for (let j: number = i + 1; j < arr.length; j++) {
            fractions.push([arr[i], arr[j]])
        }
    }

    fractions.sort(compareByFraction)

    return [fractions[k - 1][0], fractions[k - 1][1]]
}

function compareByFraction([firstDividend, firstDivisor]: number[], [secondDividend, secondDivisor]: number[]): number {
    return firstDividend / firstDivisor - secondDividend / secondDivisor
}
