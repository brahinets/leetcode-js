export {makeTheIntegerZero}

function makeTheIntegerZero(num1: number, num2: number): number {
    let k: number = 1

    while (true) {
        let x: bigint = BigInt(num1) - BigInt(num2) * BigInt(k)

        if (x < BigInt(k)) {
            return -1
        }

        if (k >= bitCount(x)) {
            return k
        }

        k++
    }
}

function bitCount(n: bigint): number {
    let count: number = 0

    while (n !== 0n) {
        count++

        n &= n - 1n
    }

    return count
}
