export {findContentChildren}

function findContentChildren(g: number[], s: number[]): number {
    const greediness: number[] = g.sort((a: number, b: number): number => a - b)
    const cookies: number[] = s.sort((a: number, b: number): number => a - b)

    let i: number = 0
    let j: number = 0
    let fedChildrenCount: number = 0

    while (i < greediness.length && j < cookies.length) {
        if (greediness[i] <= cookies[j]) {
            fedChildrenCount++
            i++
        }

        j++
    }

    return fedChildrenCount
}
