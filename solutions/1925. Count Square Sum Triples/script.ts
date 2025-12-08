export {countTriples}

function countTriples(n: number): number {
    let count: number = 0

    for (let a: number = 1; a <= n; a++) {
        for (let b: number = 1; b <= n; b++) {
            let c: number = Math.floor(Math.sqrt(a * a + b * b + 1))

            if (c <= n && c * c === a * a + b * b) {
                count++
            }
        }
    }

    return count
}
