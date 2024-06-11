export {relativeSortArray}

function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    return arr1.sort((first: number, second: number): number => {
        const indexFirst: number = arr2.indexOf(first)
        const indexSecond: number = arr2.indexOf(second)

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
