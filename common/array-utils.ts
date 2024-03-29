export {last, first, count, arraysAreEqual}

function count<Type>(values: Type[]): Map<Type, number> {
    return values.reduce((count: Map<Type, number>, num: Type) => {
        count.set(num, (count.get(num) ?? 0) + 1)
        return count
    }, new Map<Type, number>())
}

function last<Type>(values: Type[]): Type | undefined {
    return values[values.length - 1]
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
