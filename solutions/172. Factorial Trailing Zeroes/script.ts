export { trailingZeroes }

function trailingZeroes(n: number): number {
    let count: number = 0

    while (n >= 5) {
        n = Math.floor(n / 5)

        count += n
    }

    return count
}
