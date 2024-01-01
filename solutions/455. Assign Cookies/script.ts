export {findContentChildren}

function findContentChildren(g: number[], s: number[]): number {
    const greediness: number[] = g.toSorted((a: number, b: number) => a - b)
    const cookies: number[] = s.toSorted((a: number, b: number) => a - b)

    let i: number = 0
    let j: number = 0
    let fedChildrenCount: number = 0

    while (i < greediness.length && j < cookies.length) {
        if (greediness[i] <= cookies[j]) {
            fedChildrenCount++
            i++
            j++
        } else {
            j++
        }
    }

    return fedChildrenCount
}
