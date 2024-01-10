export {count, arraysAreEqual}

function count<Type>(nums: Type[]): Map<Type, number> {
    return nums.reduce((count: Map<Type, number>, num: Type) => {
        count.set(num, (count.get(num) ?? 0) + 1)
        return count
    }, new Map<Type, number>())
}

function arraysAreEqual<Type>(fisrt: Type[], second: Type[]): boolean {
    if (fisrt.length !== second.length) {
        return false
    }

    for (let i: number = 0; i < fisrt.length; i++) {
        if (fisrt[i] !== second[i]) {
            return false
        }
    }
    return true
}
