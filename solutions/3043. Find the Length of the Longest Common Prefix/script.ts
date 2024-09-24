export {longestCommonPrefix}

function longestCommonPrefix(arr1: number[], arr2: number[]): number {
    let result: number = 0

    for (const a of arr1) {
        for (const b of arr2) {
            result = Math.max(result, commonPrefix(a.toString(), b.toString()))
        }
    }

    return result
}

function commonPrefix(a: string, b: string): number {
    let result: number = 0

    for (let i: number = 0; i < a.length && i < b.length; i++) {
        if (a[i] !== b[i]) {
            break
        }

        result++
    }

    return result
}
