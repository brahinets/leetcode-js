import {matrixOfZeros} from "../../common/array-factories"

export {strangePrinter}

function strangePrinter(s: string): number {
    const minTurns: number[][] = matrixOfZeros(s.length, s.length)

    for (let i: number = s.length - 1; i >= 0; i--) {
        minTurns[i][i] = 1

        for (let j: number = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                minTurns[i][j] = minTurns[i][j - 1]
            } else {
                let minSplitTurns: number = Infinity

                for (let k: number = i; k < j; k++) {
                    minSplitTurns = Math.min(minSplitTurns, minTurns[i][k] + minTurns[k + 1][j])
                }

                minTurns[i][j] = minSplitTurns
            }
        }
    }

    return minTurns[0][s.length - 1]
}
