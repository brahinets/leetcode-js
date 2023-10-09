export {count};

function count<Type>(nums: Type[]): Map<Type, number> {
    return nums.reduce((count: Map<Type, number>, num: Type) => {
        count.set(num, (count.get(num) ?? 0) + 1)
        return count
    }, new Map<Type, number>())
}
