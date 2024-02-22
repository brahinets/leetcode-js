import {matrixOfZeros} from "../../common/array-factories";

export {findJudge}

function findJudge(n: number, trust: number[][]): number {
    const trusts: number[][] = matrixOfZeros(n + 1, n + 1)

    for (const [from, to] of trust) {
        trusts[from][to] = 1
    }

    for (let i: number = 1; i <= n; i++) {
        let trustToNoOne: boolean = sum(trusts[i]) === 0
        let everyoneTrustMe: boolean = sum(trusts.map((t: number[]): number => t[i])) === n - 1

        if (trustToNoOne && everyoneTrustMe) {
            return i
        }
    }

    return -1
}

function sum(nums: number[]): number {
    return nums.reduce((prev: number, curr: number): number => prev + curr, 0)
}
