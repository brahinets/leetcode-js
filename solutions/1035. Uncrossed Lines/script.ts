import {matrixOfZeros} from "../../common/array-utils";

export {maxUncrossedLines}

function maxUncrossedLines(up: number[], bottom: number[]): number {
    const crossingsUntil: number[][] = matrixOfZeros(up.length + 1, bottom.length + 1);

    for (let i: number = 1; i <= up.length; i++) {
        for (let j: number = 1; j <= bottom.length; j++) {
            if (up[i - 1] === bottom[j - 1]) {
                crossingsUntil[i][j] = 1 + crossingsUntil[i - 1][j - 1];
            } else {
                crossingsUntil[i][j] = Math.max(crossingsUntil[i - 1][j], crossingsUntil[i][j - 1]);
            }
        }
    }

    return crossingsUntil[up.length][bottom.length]
}