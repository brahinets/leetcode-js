export {customSortString}

function customSortString(order: string, s: string): string {
    return [...s.split("")]
        .sort((first: string, second: string): number => comparatorByCustom(first, second, order))
        .join("")
}

function comparatorByCustom(
    first: string,
    second: string,
    order: string
): number {
    const firstPosition: number = order.indexOf(first)
    const secondPosition: number = order.indexOf(second)

    if (firstPosition === -1) {
        return Number.MAX_SAFE_INTEGER
    } else if (secondPosition === -1) {
        return Number.MIN_SAFE_INTEGER
    } else {
        return firstPosition - secondPosition
    }
}
