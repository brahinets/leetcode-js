export {relativeSortArray}

function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    const relativity: Map<number, number> = buildRelativity(arr2)

    return arr1.sort((first: number, second: number): number => {
        const indexFirst: number = relativity.get(first) ?? -1
        const indexSecond: number = relativity.get(second) ?? -1

        if (indexFirst !== -1 && indexSecond !== -1) {
            return indexFirst - indexSecond
        } else if (indexFirst !== -1) {
            return -1
        } else if (indexSecond !== -1) {
            return 1
        } else {
            return first - second
        }
    })
}

function buildRelativity(numbers: number[]): Map<number, number> {
    const relativity: Map<number, number> = new Map<number, number>()

    for (let i = 0; i < numbers.length; i++) {
        relativity.set(numbers[i], i)
    }

    return relativity
}
