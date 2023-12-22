import {matrixOf} from "../../common/array-factories"

export {minimumDeleteSum}

function minimumDeleteSum(s1: string, s2: string): number {
    const removalsForEquality: number[][] = matrixOf(0, s1.length + 1, s2.length + 1);

    for (let i: number = 1; i <= s1.length; i++) {
        removalsForEquality[i][0] = removalsForEquality[i - 1][0] + s1.charCodeAt(i - 1)
    }
    for (let j: number = 1; j <= s2.length; j++) {
        removalsForEquality[0][j] = removalsForEquality[0][j - 1] + s2.charCodeAt(j - 1)
    }

    for (let i: number = 1; i <= s1.length; i++) {
        for (let j: number = 1; j <= s2.length; j++) {
            if (s1.charCodeAt(i - 1) === s2.charCodeAt(j - 1)) {
                removalsForEquality[i][j] = removalsForEquality[i - 1][j - 1]
            } else {
                removalsForEquality[i][j] = Math.min(
                    s1.charCodeAt(i - 1) + removalsForEquality[i - 1][j],
                    s2.charCodeAt(j - 1) + removalsForEquality[i][j - 1]
                )
            }
        }
    }

    return removalsForEquality[s1.length][s2.length];
}
