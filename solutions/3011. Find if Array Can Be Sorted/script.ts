export {canSortArray}

function canSortArray(nums: number[]): boolean {
    const values: number[] = [...nums]

    for (let i: number = 0; i < values.length; i++) {
        for (let j: number = 0; j < values.length - i - 1; j++) {
            if (values[j] > values[j + 1]) {
                if (bitCount(values[j]) === bitCount(values[j + 1])) {
                    [values[j], values[j + 1]] = [values[j + 1], values[j]]
                } else {
                    return false
                }
            }
        }
    }

    return true
}

function bitCount(num: number): number {
    return num.toString(2).split('').filter((bit: string): boolean => bit === '1').length
}
