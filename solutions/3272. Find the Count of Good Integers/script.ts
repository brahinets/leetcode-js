import {arrayOf, arrayOfZeros} from "../../common/array-factories"

export {countGoodIntegers}

function countGoodIntegers(n: number, k: number): number {
    const dict: Set<string> = new Set<string>()
    const base: number = Math.pow(10, Math.floor((n - 1) / 2))
    const skip: number = n & 1

    for (let i: number = base; i < base * 10; i++) {
        let s: string = i.toString()
        s += s.split("").reverse().slice(skip).join("")

        const palindromicInteger: number = parseInt(s)
        if (palindromicInteger % k === 0) {
            const sorted: string = s.split("").sort().join("")
            dict.add(sorted)
        }
    }

    const factorial: bigint[] = arrayOf(1n, n + 1)
    for (let i = 1; i <= n; i++) {
        factorial[i] = factorial[i - 1] * BigInt(i)
    }

    let ans: bigint = 0n
    for (const s of dict) {
        const count: number[] = arrayOfZeros(10)

        for (const c of s) {
            count[parseInt(c)]++
        }

        let tot: bigint = BigInt(n - count[0]) * factorial[n - 1]
        for (const x of count) {
            tot /= factorial[x]
        }

        ans += tot
    }

    return Number(ans)
}
