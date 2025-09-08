export {getNoZeroIntegers}

function getNoZeroIntegers(n: number): number[] {
    for (let i: number = 1; i < n; i++) {
        if (!String(i).includes('0') && !String(n - i).includes('0')) {
            return [i, n - i]
        }
    }

    return []
}
