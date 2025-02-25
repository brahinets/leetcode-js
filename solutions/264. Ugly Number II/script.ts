import {first} from "../../common/array-utils"

export {nthUglyNumber}

function nthUglyNumber(n: number): number {
    const uglies: Set<number> = new Set<number>([1])
    let nthUgly: number = 0

    for (let i: number = 0; i < n; i++) {
        nthUgly = first([...uglies].sort((a, b) => a - b))!
        uglies.delete(nthUgly)

        uglies.add(nthUgly * 2)
        uglies.add(nthUgly * 3)
        uglies.add(nthUgly * 5)
    }

    return nthUgly
}
