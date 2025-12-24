export {sum, last, first, count, arraysAreEqual, binarySearch}

function count<Type>(values: Type[]): Map<Type, number> {
    return values.reduce((count: Map<Type, number>, value: Type): Map<Type, number> => {
        count.set(value, (count.get(value) ?? 0) + 1)

        return count
    }, new Map<Type, number>())
}

function last<Type>(values: Type[]): Type | undefined {
    return values[values.length - 1]
}

function sum(values: number[]): number {
    return values.reduce((sum: number, value: number): number => sum + value, 0)
}

function first<Type>(values: Type[]): Type | undefined {
    return values[0]
}

function arraysAreEqual<Type>(first: Type[], second: Type[]): boolean {
    if (first.length !== second.length) {
        return false
    }

    for (let i: number = 0; i < first.length; i++) {
        if (first[i] !== second[i]) {
            return false
        }
    }
    return true
}

function binarySearch(arr: number[], target: number): number {
    let left: number = 0
    let right: number = arr.length

    while (left < right) {
        const mid: number = Math.floor((left + right) / 2)

        if (target < arr[mid]) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left
}
