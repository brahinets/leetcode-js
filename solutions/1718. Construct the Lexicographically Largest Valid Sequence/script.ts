import {arrayOfZeros} from "../../common/array-factories"

export {constructDistancedSequence}

function constructDistancedSequence(n: number): number[] {
    const size: number = 2 * n - 1
    const result: number[] = arrayOfZeros(size)
    const used: Set<number> = new Set<number>()

    if (backtrack(result, used, n, 0)) {
        return result
    } else {
        return []
    }
}

function backtrack(result: number[], used: Set<number>, n: number, index: number): boolean {
    if (index === result.length) {
        return true
    }

    if (result[index] !== 0) {
        return backtrack(result, used, n, index + 1)
    }

    for (let num: number = n; num >= 1; num--) {
        if (used.has(num)) {
            continue
        }

        if (num === 1) {
            result[index] = 1
            used.add(1)

            if (backtrack(result, used, n, index + 1)) {
                return true
            }

            result[index] = 0
            used.delete(1)
        } else {
            const secondIndex: number = index + num

            if (secondIndex < result.length && result[secondIndex] === 0) {
                result[index] = result[secondIndex] = num
                used.add(num)

                if (backtrack(result, used, n, index + 1)) {
                    return true
                }

                result[index] = result[secondIndex] = 0
                used.delete(num)
            }
        }
    }

    return false
}
