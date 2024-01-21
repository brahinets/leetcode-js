export {last, count, arraysAreEqual}

function count<Type>(nums: Type[]): Map<Type, number> {
    return nums.reduce((count: Map<Type, number>, num: Type) => {
        count.set(num, (count.get(num) ?? 0) + 1)
        return count
    }, new Map<Type, number>())
}

function last<Type>(values: Type[]): Type | undefined {
    return values[values.length - 1]
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
