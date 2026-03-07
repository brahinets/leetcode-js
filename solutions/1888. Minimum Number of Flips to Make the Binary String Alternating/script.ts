export { minFlips }

function minFlips(s: string): number {
    const n: number = s.length
    const t: string = s + s
    let diff: number = 0
    let result: number = Infinity

    for (let i: number = 0; i < t.length; i++) {
        const expected1: string = i % 2 === 0 ? '0' : '1'
        if (t[i] !== expected1) {
            diff++
        }

        if (i >= n) {
            const outExpected1: string = (i - n) % 2 === 0 ? '0' : '1'

            if (t[i - n] !== outExpected1) {
                diff--
            }
        }

        if (i >= n - 1) {
            result = Math.min(result, diff, n - diff)
        }
    }

    return result
}
