export {productQueries}

const MOD: number = 10 ** 9 + 7

function productQueries(n: number, queries: number[][]): number[] {
    const bins: number[] = createBins(n)
    const product: number[] = []
    for (const [start, end] of queries) {
        let current: number = 1

        for (let i: number = start; i <= end; i++) {
            current = (current * bins[i]) % MOD
        }

        product.push(current)
    }

    return product
}

function createBins(n: number) {
    const bins: number[] = []
    let rep: number = 1

    while (n > 0) {
        if (n % 2 === 1) {
            bins.push(rep)
        }

        n = Math.floor(n / 2)

        rep *= 2
    }

    return bins
}
