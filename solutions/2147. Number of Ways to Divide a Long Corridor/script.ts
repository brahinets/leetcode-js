import {matrixOfZeros} from "../../common/array-factories"

export {numberOfWays}

const MOD: number = 10 ** 9 + 7

function numberOfWays(corridor: string): number {
    const count: number[][] = matrixOfZeros(corridor.length + 1, 3)
    count[corridor.length] = [0, 0, 1]

    for (let i: number = corridor.length - 1; i >= 0; i--) {
        const prev: number[] = count[i + 1]

        if (corridor[i] === "S") {
            count[i] = [prev[1], prev[2], prev[1]]
        } else {
            count[i] = [prev[0], prev[1], (prev[0] + prev[2]) % MOD]
        }
    }

    return count[0][0]
}
