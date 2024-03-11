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

    if (firstPosition !== -1 && secondPosition !== -1) {
        const orderComparison: number = firstPosition - secondPosition
        if (orderComparison !== 0) {
            return orderComparison
        }
    }

    return firstPosition === -1 ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER
}
